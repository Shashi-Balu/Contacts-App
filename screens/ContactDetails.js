//imports
import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";

export default function ContactDetails({ navigation }) {
    // navigation props destructuring
    // Extracting the parameters passed from navigation

    /* navigation.getParam is used to retrieve the values passed through navigation parameters.  */
    const name = navigation.getParam("name", "N/A");
    const phoneNumber = navigation.getParam("phoneNumbers", "N/A");
    const imageUri = navigation.getParam("image", "N/A")?.uri;

    // Handler for making a phone call
    const handlePhoneCall = () => {
        phoneNumber?.map((number) => Linking.openURL(`tel:${number}`));
    };

    return (
        <View style={globalStyles.contactHeader}>
            <View style={globalStyles.backgroundImage}>
                {/* Displaying the contact image */}
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
                {/* Displaying the contact name */}
                <Text style={globalStyles.nameStyle}> {name}</Text>
            </View>

            <View style={globalStyles.callStyle}>
                <View>
                    {/* Iterating over the phone numbers */}
                    {phoneNumber?.map((number) => (
                        <View>
                            {/* Displaying phone number type */}
                            <Text>Phone | Mobile</Text>

                            {/* Displaying phone number and call button */}
                            <View style={globalStyles.phoneNumberContainerStyle}>
                                <Text style={globalStyles.phoneNumberStyle}>{number}</Text>

                                {/*Phone call icon */}
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
