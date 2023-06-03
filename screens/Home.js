import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";
// import * as Permissions from "expo-permissions";
import { ScrollView } from "react-native-gesture-handler";
import { Permissions } from "expo";

export default function Home() {
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
        const { data } = await Contacts.getContactsAsync();
        if (data.length > 0) {
            setContacts(data);
        }
    };

    const pressHandler = (contact) => {
        navigation.navigate("ContactDetails", contact);
    };

    console.log(contacts);
    return (
        <View>
            {/* Display contacts */}
            <ScrollView>
                {contacts.map((contact) => (
                    <TouchableOpacity onPress={() => pressHandler(contact)}>
                        <Text style={styles.text} key={contact.id}>
                            {contact.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});
