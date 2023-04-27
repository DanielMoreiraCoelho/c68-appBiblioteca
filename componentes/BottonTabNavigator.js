import { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TransactionScreen from "../screens/TransactionScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

export default class BottonTabNavigator extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Screen name="Transaçao" component={TransactionScreen} />
          <Tab.Screen name="Pesquisa" component={SearchScreen} />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
