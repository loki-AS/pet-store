import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home";
import Favorite from "../pages/Favorite"
import Chat from "../pages/Chat"
import User from "../pages/User"
import { COLORS } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import TabIcon from "../components/TabIcon";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    const colors = "#F2968F"

    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style: {
                position: "absolute",
                bottom: 0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:COLORS.white,
                borderTopColor: "transparent",
                height: 100
            }
        }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                headerShown: false,
                tabBarIcon:({focused}) => <TabIcon 
                focused={focused}
                icon={<Ionicons name="home" size={24} />}
                />
            }}
            />
            <Tab.Screen
                name="favorite"
                component={Favorite}
                options={{
                headerShown: false,
                tabBarIcon:({focused}) => <TabIcon 
                focused={focused}
                icon={<MaterialIcons name="favorite-outline" size={24} />}
                />
            }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                headerShown: false,
                tabBarIcon:({focused}) => <TabIcon 
                focused={focused}
                icon={<Ionicons name="chatbubble-outline" size={24} />}
                />
            }}
            />
            <Tab.Screen
                name="User"
                component={User}
                options={{
                headerShown: false,
                tabBarIcon:({focused}) => <TabIcon 
                focused={focused}
                icon={<FontAwesome5 name="user" size={24} />}
                />
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;