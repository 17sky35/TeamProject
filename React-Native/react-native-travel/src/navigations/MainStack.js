import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { createStackNavigator } from '@react-navigation/stack'
import { Main } from "../screens";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign:"left",
                headerTintColor:theme.headerTintColor,
                
                cardStyle:{backgroundColor:theme.background},
                headerBackTitleVisible:false,
            }}
        >
            <Stack.Screen 
                name="MainTab" 
                component={MainTab}
                options={{
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    )
}

export default MainStack;