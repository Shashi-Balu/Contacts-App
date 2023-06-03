import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function ContactDetails({ navigation }) {
    return (
        <View>
            <Text style={StyleSheet.text}> {navigation.getParam("name")}</Text>
            <Text style={StyleSheet.text}> {navigation.getParam("phoneNumber")}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});
