import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Favourite from "../screens/Favourite";
import Top from "../screens/Top";
import Profile from "../screens/Profile";
import { MaterialIcons } from "@expo/vector-icons";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import Search from "../screens/Search";
import UserScreen from "../screens/UserScreen";
import InfoPressAreaScreen from "../screens/InfoPressAreaScreen";
import EditProfile from "../screens/EditProfile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StacksProfile () {
  return (
   
        <Stack.Navigator initialRouteName="profileStack">
          <Stack.Screen name="profileStack" component={Profile} options= {{headerTitle : "Perfil"}}/>
          <Stack.Screen name="user" component={UserScreen} options = {{headerTitle : "Usuario"}}/>
          <Stack.Screen name="register" component={Register} options= {{headerTitle : "Registro"}}/>
          <Stack.Screen name="forgotpassword" component={ForgotPassword} options= {{headerTitle : "Recuperar Contraseña"}}/>
          <Stack.Screen name="editProfileStack" component={EditProfile} options = {{headerTitle : "Editar Perfil"}}/>
        </Stack.Navigator>
    
  )
}

function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="mainHome" component={Home} options={{headerTitle : "Inicio"}}/>
      <Stack.Screen name="infoPressArea" component={InfoPressAreaScreen} options= {{headerTitle : "Información"}}/>
    </Stack.Navigator>
  )
}


function StackSearch() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="searchStack" component={Search} options={{headerTitle : "Busqueda" }}/>
      <Stack.Screen name="infoPressArea" component={InfoPressAreaScreen} options= {{headerTitle : "Información"}}/>
    </Stack.Navigator>
  )
}

function StackFavourite() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="favouriteStack" component={Favourite} options={{headerTitle : "Favoritos" }}/>
      <Stack.Screen name="infoPressArea" component={InfoPressAreaScreen} options= {{headerTitle : "Información"}}/>
    </Stack.Navigator>
  )
}

function StackTop() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="topStack" component={Top} options={{headerTitle : "Top-5" }}/>
      <Stack.Screen name="infoPressArea" component={InfoPressAreaScreen} options= {{headerTitle : "Información"}}/>
    </Stack.Navigator>
  )
}

export default function MainTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor : "#00A7FE",
          tabBarInactiveTintColor : "#A7A9AA",
          tabBarStyle : {
            position : 'absolute',
            bottom : 15,
            left : 20,
            right : 20,
            borderRadius : 15,
            elevation : 5,
            height : 55,
            backgroundColor : "#F7F5F5"
          }
        }}
      >
        <Tab.Screen name="home" component={StackHome} 
        options={{ headerShown : false,  headerTitle: "Inicio" ,tabBarLabel : "Inicio", tabBarIcon: ({ color }) => (
          <MaterialIcons name="home" size={30} color = {color}/>
        ) }} />
        <Tab.Screen name="search" component={StackSearch} 
        options={{ headerShown : false, headerTitle: "Busqueda" ,tabBarLabel : "Buscar", tabBarIcon: ({ color }) => (
          <MaterialIcons name="search" size={30} color = {color}/>
        ) }} />
        <Tab.Screen name="favourite" component={StackFavourite} 
        options={{ headerShown : false, headerTitle: "Favoritos",tabBarLabel : "Favoritos", tabBarIcon: ({ color }) => (
          <MaterialIcons name="favorite" size={30} color = {color}/>
        ) }} />
        <Tab.Screen name="top" component={StackTop} 
        options={{headerShown : false,  headerTitle: "Top",tabBarLabel : "Top-5", tabBarIcon: ({ color }) => (
          <MaterialIcons name="grade" size={30} color = {color}/>
        ) }}/>
        <Tab.Screen name="profile" component={StacksProfile} 
        options={{ headerShown : false, headerTitle: "Perfil",tabBarLabel : "Perfil", tabBarIcon: ({ color }) => (
          <MaterialIcons name="person" size={30} color = {color}/>
        ) }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
