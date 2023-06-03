import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
export default function ContactDetails({ navigation }) {
    const name = navigation.getParam("name", "N/A");
    const phoneNumber = navigation.getParam("phoneNumber", "N/A");
    const imageUri = navigation.getParam("image", "N/A")?.uri;
    return (
        <View>
            <Text style={StyleSheet.text}> Name: {name}</Text>
            <Text style={StyleSheet.text}> Phone Number: {phoneNumber}</Text>
            <Text>Image below</Text>
            {imageUri && <Image source={{ uri: imageUri }} style={{ width: 50, height: 50 }} />}
        </View>
    );
}
const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});
