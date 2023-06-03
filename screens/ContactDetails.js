import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function ContactDetails({ navigation }) {
    const name = navigation.getParam("name", "N/A");
    const phoneNumber = navigation.getParam("phoneNumber", "N/A");
    return (
        <View>
            <Text style={StyleSheet.text}> Name: {name}</Text>
            <Text style={StyleSheet.text}> Phone Number: {phoneNumber}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});
