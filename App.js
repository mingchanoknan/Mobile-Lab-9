import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import MyNavigator from "./navigation/MyNavigator";
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
// import คอมโพเนนต์ที่จำเป็น

const MealsNavigator = createNativeStackNavigator();

export default function App() {
  return (
    <MyNavigator/>
    // <NavigationContainer>
    //   <MealsNavigator.Navigator initialRouteName="Categories"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: "#4a148c", },
    //       headerTintColor: "white",
    //   }}>
    //     <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
    //       options={{title: "Meal Categories"}} />
    //     <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} 
    //       options={
    //         ({route}) => ({
    //           title: route.params.categoryTitle
    //         })
    //       }/>
    //     <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen} 
    //       options={
    //         ({route}) => ({
    //           title: route.params.mealTitle
    //         })
    //       }
    //       />
    //   </MealsNavigator.Navigator>
    // </NavigationContainer>
  )
  
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});