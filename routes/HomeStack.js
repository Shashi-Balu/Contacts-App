//imports
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ContactDetails from "../screens/ContactDetails";

// Define the screens for the stack navigator
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Contacts", // Title for the screen
            headerTintColor: "#444", //Color of the header text
            headerStyle: { backgroundColor: "#30A2FF", height: 100 },
        },
    },
    ContactDetails: {
        screen: ContactDetails,
        navigationOptions: {
            title: "", // Empty title for the screen
            headerStyle: {
                height: 80, //Height of the header
                backgroundColor: "#30A2FF", // Background color of the header
                shadowOpacity: 0, // Remove the shadow effect
                elevation: 0, // Remove the elevation effect
            },
        },
    },
};

// Create the stack navigator with the defined screens

/*  The createStackNavigator function takes an object screens 
as an argument, which defines the configuration for 
the screens in the stack navigator. */

/* A stack navigator is a type of navigation container that manages
 multiple screens in a stack-based fashion, where new screens are 
 pushed onto the stack and can be popped off to reveal the previous screens.
It provides a way to navigate between different screens in a hierarchical manner */

const HomeStack = createStackNavigator(screens);

// Export the stack navigator wrapped in the app container

/*  HomeStack navigator is exported as the default export, wrapped 
in the createAppContainer function, which ensures it is set up as
 the root component of the app. */
export default createAppContainer(HomeStack);
