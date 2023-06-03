import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
            ],
        });
        if (data.length > 0) {
            setContacts(data);
        }
    };

    const pressHandler = (contact) => {
        navigation.navigate("ContactDetails", {
            name: contact.firstName + " " + contact.lastName,
            phoneNumber: contact.phoneNumbers[0]?.number || "N/A",
        });
    };

    console.log(contacts);
    return (
        <View>
            <ScrollView>
                {contacts.map((contact) => (
                    <TouchableOpacity onPress={() => pressHandler(contact)}>
                        <Text style={styles.text} key={contact.id}>
                            {contact.name} {contact.phoneNumber}
                        </Text>
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
