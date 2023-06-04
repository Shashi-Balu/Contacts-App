import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import * as Contacts from "expo-contacts";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";

export default function Home({ navigation }) {
    const [contacts, setContacts] = useState([]);
    const [foundContacts, setFoundContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        requestContactsPermission();
    }, []);

    useEffect(() => {
        filterContacts();
    }, [searchTerm, contacts]);

    const requestContactsPermission = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            fetchContacts();
        } else {
            console.log("Contacts permission denied");
        }
    };

    const fetchContacts = async () => {
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.FirstName,
                Contacts.Fields.LastName,
                Contacts.Fields.PhoneNumbers,
                Contacts.Fields.Image,
            ],
        });
        if (data.length > 0) {
            const filteredAvailableContacts = data.filter(
                (contact) =>
                    contact.firstName && contact.phoneNumbers && contact.phoneNumbers.length > 0
            );
            setContacts(filteredAvailableContacts);
        }
    };

    const pressHandler = (contact) => {
        const phoneNumbers = contact.phoneNumbers.map((phoneNumber) => phoneNumber.number);
        navigation.navigate("ContactDetails", {
            name:
                `${contact.firstName}${contact.middleName ? ` ${contact.middleName}` : ""}${
                    contact.lastName ? ` ${contact.lastName}` : ""
                }` || "NA",
            phoneNumbers: phoneNumbers.length > 0 ? phoneNumbers : ["N/A"],
            image: contact.image || null,
        });
    };

    const handleSearchTermChange = (findContact) => {
        setSearchTerm(findContact);
    };

    const cancelText = () => {
        setSearchTerm("");
        setFoundContacts([]);
    };

    const filterContacts = () => {
        const filteredContacts = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFoundContacts(filteredContacts);
    };
    return (
        <View>
            <ScrollView>
                <View style={globalStyles.inputTextContainer}>
                    <MaterialIcons
                        name="search"
                        color="#999"
                        style={globalStyles.searchStyle}
                        size={18}
                    />
                    <TextInput
                        placeholder={`${contacts.length} contacts`}
                        style={globalStyles.inputText}
                        placeholderTextColor="#999"
                        onChangeText={handleSearchTermChange}
                        value={searchTerm}
                    />
                    {searchTerm.length > 0 && (
                        <TouchableOpacity onPress={cancelText}>
                            <MaterialIcons
                                name="close"
                                color="#999"
                                size={18}
                                style={globalStyles.iconClose}
                            />
                        </TouchableOpacity>
                    )}
                </View>

                {searchTerm.length > 0
                    ? foundContacts.map((contact) => (
                          <TouchableOpacity onPress={() => pressHandler(contact)} key={contact.id}>
                              <View style={globalStyles.contactContainer}>
                                  {contact.imageAvailable ? (
                                      <Image
                                          source={{ uri: contact.image.uri }}
                                          style={globalStyles.contactImages}
                                      />
                                  ) : (
                                      <MaterialIcons name="account-circle" size={50} color="#555" />
                                  )}
                                  <Text style={globalStyles.text}>{contact.name}</Text>
                              </View>
                          </TouchableOpacity>
                      ))
                    : contacts.map((contact) => (
                          <TouchableOpacity onPress={() => pressHandler(contact)} key={contact.id}>
                              <View style={globalStyles.contactContainer}>
                                  {contact.imageAvailable ? (
                                      <Image
                                          source={{ uri: contact.image.uri }}
                                          style={globalStyles.contactImages}
                                      />
                                  ) : (
                                      <MaterialIcons name="account-circle" size={50} color="#555" />
                                  )}
                                  <Text style={globalStyles.text}>{contact.name}</Text>
                              </View>
                          </TouchableOpacity>
                      ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({});
