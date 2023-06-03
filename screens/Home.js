import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as Contacts from "expo-contacts";
import { ScrollView } from "react-native-gesture-handler";

export default function Home({ navigation }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        requestContactsPermission();
    }, []);

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
            const filteredContacts = data.filter(
                (contact) =>
                    contact.firstName && contact.phoneNumbers && contact.phoneNumbers.length > 0
            );
            setContacts(filteredContacts);
        }
    };

    const pressHandler = (contact) => {
        navigation.navigate("ContactDetails", {
            name:
                `${contact.firstName}${contact.middleName ? ` ${contact.middleName}` : ""}${
                    contact.lastName ? ` ${contact.lastName}` : ""
                }` || "NA",
            phoneNumber: contact.phoneNumbers[0]?.number || "N/A",
            image: contact.image || null,
        });
    };

    return (
        <View>
            <ScrollView>
                {contacts.map((contact) => (
                    <TouchableOpacity onPress={() => pressHandler(contact)}>
                        <Text style={styles.text} key={contact.id}>
                            {contact.name} {contact.phoneNumber}
                        </Text>
                        {contact.imageAvailable && (
                            <Image
                                source={{ uri: contact.image.uri }}
                                style={{ width: 50, height: 50 }}
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "coral",
    },
});
