import { StyleSheet } from "react-native";

//variables
const lightGray = "#ddd";
const mediumDarkGray = "#444";
const darkGray = "#999";
const mainBlue = "#30A2FF";

export const globalStyles = StyleSheet.create({
    //styles of Home.js
    inputTextContainer: {
        flexDirection: "row",
        margin: 20,
        backgroundColor: lightGray,
        alignItems: "center",
        borderRadius: 50,
    },

    searchStyle: {
        padding: 10,
    },

    searchStyle: {
        padding: 10,
    },

    inputText: {
        padding: 5,
        fontSize: 16,
        width: 250,
        color: darkGray,
        paddingHorizontal: 15,
    },

    iconClose: {
        marginLeft: -10,
    },

    contactsLengthFound: {
        color: mediumDarkGray,
        marginLeft: 30,
    },

    contactContainer: {
        padding: 8,
        margin: 8,
        flexDirection: "row",
        alignItems: "center",
    },

    contactImages: {
        width: 50,
        height: 50,
        borderRadius: 40,
    },

    text: {
        color: mediumDarkGray,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 12,
    },

    //styles of ContactDetails.js
    backgroundImage: {
        backgroundColor: mainBlue,
        padding: 40,
    },
    contactImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: "red",
    },

    circle: {
        color: mediumDarkGray,
    },
    nameStyle: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: "bold",
        color: mediumDarkGray,
    },

    callStyle: {
        marginLeft: 40,
        marginTop: 70,
        flexDirection: "row",
        alignItems: "center",
    },

    phoneNumberContainerStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    phoneNumberStyle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 30,
    },
    callIcon: {
        marginLeft: 150,
    },

    contactText: {
        color: mediumDarkGray,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 12,
    },
});
