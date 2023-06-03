import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ContactDetails from "../screens/ContactDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Contacts",
        },
    },
    ContactDetails: {
        screen: ContactDetails,
    },
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: { backgroundColor: "pink", height: 80 },
    },
});

export default createAppContainer(HomeStack);
