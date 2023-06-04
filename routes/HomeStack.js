import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ContactDetails from "../screens/ContactDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Contacts",
            headerTintColor: "#444",
            headerStyle: { backgroundColor: "#30A2FF", height: 100 },
        },
    },
    ContactDetails: {
        screen: ContactDetails,
        navigationOptions: {
            title: "",
            headerStyle: {
                height: 80,
                backgroundColor: "#30A2FF",
                shadowOpacity: 0, // Remove the shadow effect
                elevation: 0,
            },
        },
    },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
