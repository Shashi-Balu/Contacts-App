//imports
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import * as Contacts from "expo-contacts";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/GlobalStyles";

export default function Home({ navigation }) {
    const [contacts, setContacts] = useState([]); //State variable to store retrieved contacts
    const [foundContacts, setFoundContacts] = useState([]); // State variable to store filtered contacts
    const [searchTerm, setSearchTerm] = useState(""); // State variable to store current search term

    //Request contacts permission on component mount
    useEffect(() => {
        requestContactsPermission();
    }, []);

    // Filter contacts whenever the search term or contacts list changes
    useEffect(() => {
        filterContacts();
    }, [searchTerm, contacts]);

    // Request contacts permission
    const requestContactsPermission = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            fetchContacts();
        } else {
            console.log("Contacts permission denied");
        }
    };

    // Function to fetch contacts from the device
    const fetchContacts = async () => {
        // Call the Expo Contacts API to retrieve contacts data

        /*By using the await keyword, we are waiting for the getContactsAsync 
        function to complete and return the contacts data before proceeding with the execution of
         the code. This ensures that we have the contacts data available before 
         performing any further operations or rendering them in our application.*/

        /*
        {data} =  obtained from await Contacts.getContactsAsync 
        includes the contact information for each contact on the device. 
         */
        const { data } = await Contacts.getContactsAsync({
            // getContactsAsync = provided by the Expo Contacts API and returns a promise that resolves to an object containing the contacts data.
            fields: [
                Contacts.Fields.FirstName, // Retrieve the first name of the contacts
                Contacts.Fields.LastName, // Retrieve the last name of the contacts
                Contacts.Fields.PhoneNumbers, // Retrieve the phone numbers of the contacts
                Contacts.Fields.Image, // Retrieve the images of the contacts
            ],
        });

        // Check if there are contacts available in the data array
        if (data.length > 0) {
            // Filter the contacts to include only those with a non-empty firstName and at least one phoneNumber
            const filteredAvailableContacts = data.filter(
                (contact) =>
                    contact.firstName && contact.phoneNumbers && contact.phoneNumbers.length > 0
            );
            // Set the state variable "contacts" with the filtered contacts, updating the contact list
            setContacts(filteredAvailableContacts);
        }
    };

    const pressHandler = (contact) => {
        // Extract the phone numbers from the contact's phoneNumbers array
        const phoneNumbers = contact.phoneNumbers?.map((phoneNumber) => phoneNumber.number);

        /* The parameter is the name, phonneNumbers object and image of the destination screen/component to navigate to.
          In this case, it's "ContactDetails".
        It specifies the screen that should be displayed after the navigation.*/
        navigation.navigate("ContactDetails", {
            // Concatenate the first name, middle name, and last name (if available) to form the contact's name
            name:
                `${contact.firstName}${contact.middleName ? ` ${contact.middleName}` : ""}${
                    contact.lastName ? ` ${contact.lastName}` : ""
                }` || "NA",

            // Pass an array of phone numbers, ensuring that it is not empty
            phoneNumbers: phoneNumbers.length > 0 ? phoneNumbers : [""],

            // Pass the contact's image if available, or null otherwise
            image: contact.image || null,
        });
    };

    // Filter contacts based on the search term
    const filterContacts = () => {
        const filteredContacts = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFoundContacts(filteredContacts);
    };

    // Handler for search term change
    const handleSearchTermChange = (findContact) => {
        setSearchTerm(findContact);
    };

    // Clear the search term and found contacts
    const cancelText = () => {
        setSearchTerm("");
        setFoundContacts([]);
    };

    // Render the component
    return (
        <View>
            <ScrollView>
                {/* Search input field */}
                <View style={globalStyles.inputTextContainer}>
                    {/* Search icon */}
                    <MaterialIcons
                        name="search"
                        color="#999"
                        style={globalStyles.searchStyle}
                        size={18}
                    />
                    {/* Search input */}
                    <TextInput
                        placeholder={`${contacts.length} contacts`}
                        style={globalStyles.inputText}
                        placeholderTextColor="#999"
                        onChangeText={handleSearchTermChange}
                        value={searchTerm}
                    />
                    {/*Close icon to clear search*/}
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
                {/* Display contacts based on search */}

                {searchTerm.length > 0 ? (
                    // If search term is entered, display found contacts
                    <View>
                        <Text style={globalStyles.contactsLengthFound}>
                            {foundContacts.length} contacts found
                        </Text>
                        {foundContacts?.map((contact) => (
                            <TouchableOpacity
                                onPress={() => pressHandler(contact)}
                                key={contact.id}
                            >
                                {/* Display contact image if available, otherwise display default icon */}
                                <View style={globalStyles.contactContainer}>
                                    {contact.imageAvailable ? (
                                        <Image
                                            source={{ uri: contact.image.uri }}
                                            style={globalStyles.contactImages}
                                        />
                                    ) : (
                                        // If no search term, display all contacts
                                        <MaterialIcons
                                            name="account-circle"
                                            size={50}
                                            color="#555"
                                        />
                                    )}
                                    <Text style={globalStyles.text}>{contact.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    contacts?.map((contact) => (
                        <TouchableOpacity onPress={() => pressHandler(contact)} key={contact.id}>
                            <View style={globalStyles.contactContainer}>
                                {/* Display contact image if available, otherwise display default icon */}
                                {contact.imageAvailable ? (
                                    <Image
                                        source={{ uri: contact.image.uri }}
                                        style={globalStyles.contactImages}
                                    />
                                ) : (
                                    //Anonymous photo
                                    <MaterialIcons name="account-circle" size={50} color="#555" />
                                )}
                                {/* Display contact image if available, otherwise display default icon */}
                                <Text style={globalStyles.text}>{contact.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
