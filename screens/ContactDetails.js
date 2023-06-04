import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";

export default function ContactDetails({ navigation }) {
    const name = navigation.getParam("name", "N/A");
    const phoneNumber = navigation.getParam("phoneNumbers", "N/A");
    const imageUri = navigation.getParam("image", "N/A")?.uri;

    const handlePhoneCall = () => {
        phoneNumber.map((number) => Linking.openURL(`tel:${number}`));
    };

    return (
        <View style={globalStyles.contactHeader}>
            <View style={globalStyles.backgroundImage}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={globalStyles.contactImage} />
                ) : (
                    <MaterialIcons
                        name="account-circle"
                        size={80}
                        color="#555"
                        style={globalStyles.circle}
                    />
                )}

                <Text style={globalStyles.nameStyle}> {name}</Text>
            </View>

            <View style={globalStyles.callStyle}>
                <View>
                    {phoneNumber.map((number) => (
                        <View>
                            <Text>Phone | Mobile</Text>
                            <View style={globalStyles.phoneNumberContainerStyle}>
                                <Text style={globalStyles.phoneNumberStyle}>{number}</Text>
                                <MaterialIcons
                                    name="call"
                                    size={22}
                                    color="green"
                                    style={globalStyles.callIcon}
                                    onPress={handlePhoneCall}
                                />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
