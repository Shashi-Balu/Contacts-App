import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Contacts from "react-native-contacts";

export default function Home({ navigation }) {
    const [contact, setContact] = useState([
        { name: "Shashi", phoneNumber: "123-456-789", key: 1 },
        { name: "Moomo", phoneNumber: "123-456-789", key: 2 },
        { name: "Amili", phoneNumber: "123-456-789", key: 3 },
    ]);

    const pressHandler = (contact) => {
        navigation.navigate("ContactDetails", contact);
    };

    return (
        <View>
            <FlatList
                data={contact}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
