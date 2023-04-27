import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Login from "./src/screens/Login";
import Signup from "./src/screens/SignUp";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components:ComponentScreen,
    Images:ImageScreen,
    login:Login,
    signUp:Signup
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Demo Application",
    },
  }
);

export default createAppContainer(navigator);
