import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Profile, ChannelList, Main, Map, MyPage, Post } from "../screens/index";
import { MaterialIcons } from "@expo/vector-icons"
import { ThemeContext } from "styled-components";

const Tab = createBottomTabNavigator();

//아이콘 컴포넌트
const TabBarIcon = ({ focused, name }) => {
    const theme = useContext(ThemeContext);
    return (
        <MaterialIcons
            name={name}
            size={26}
            color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
        />
    )
}

//route
//state
//{"index":0,"routeName":["Channel List","Profile"],"type":"tab"...}
const MainTab = ({ navigation, route }) => {
    const theme = useContext(ThemeContext);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.tabActiveColor,
                tabBatInactiveTintColor: theme.tabInactiveColor,
                headerTitleAlign: "left",
            }}
        >
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabBarIcon({ focused, name: focused ? "map" : "map" }),
                    headerRight: () => (
                        <MaterialIcons
                            name="add"
                            size={26}
                            style={{ margin: 10 }}
                            onPress={() => { }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabBarIcon({ focused, name: focused ? "home" : "home" }),
                    headerRight: () => (
                        <MaterialIcons
                            name="person"
                            size={26}
                            style={{ margin: 10 }}
                            onPress={() => { navigation.navigate('MyPage') }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="MyPage"
                component={MyPage}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabBarIcon({ focused, name: "person" }),
                    tabBarButton: () => null, // 하단 탭바에서 숨기기
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarIcon: ({ focused }) =>
                        TabBarIcon({ focused, name: focused ? "apps" : "apps" })
                }}
            />
        </Tab.Navigator>
    )
}
export default MainTab;