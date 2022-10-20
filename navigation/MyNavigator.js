import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { Ionicons } from '@expo/vector-icons';
import { Text } from "react-native";

const MealsNavigator = createNativeStackNavigator();
const FavNavigator = createNativeStackNavigator();

const MealsFavTabNavigator = createBottomTabNavigator();
const FiltersNavigator = createNativeStackNavigator();

const MainNavigator = createDrawerNavigator();

const MyMealsNavigator = () => {
  return (
      <MealsNavigator.Navigator initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: "#4a148c", },
          headerTintColor: "white",
      }}>
        <MealsNavigator.Screen name="Categories" component={CategoriesScreen}
          options={
            ({navigation}) => ({
              title: "Meal Categories",
              headerLeft: () => (
                <Ionicons name="ios-list" size={24} color="white"
                  onPress={() => navigation.openDrawer()}
                />
              ),
            })
          } />
        <MealsNavigator.Screen name="CategoryMeals" component={CategoryMealsScreen} 
          options={
            ({route}) => ({
              title: route.params.categoryTitle
            })
          }/>
        <MealsNavigator.Screen name="MealDetail" component={MealDetailScreen} 
          options={
            ({route}) => ({
              title: route.params.mealTitle
            })
          }
          />
      </MealsNavigator.Navigator>
  )
}

const MyFavNavigator = () => {
  return (
      <FavNavigator.Navigator initialRouteName="Favorites">
        <FavNavigator.Screen name="Favorites" component={FavoritesScreen} 
        options={
          ({navigation}) => ({
            title: "Favorites",
            headerLeft: () => (
              <Ionicons name="ios-list" size={24} color="black"
                onPress={() => navigation.openDrawer()}
            />
            ),
          })
        } 
        />
        <FavNavigator.Screen name="MealDetail" component={MealDetailScreen} />
      </FavNavigator.Navigator>
  )
}

const MyMealsFavTabNavigator = () => {
  return (
      <MealsFavTabNavigator.Navigator initialRouteName="Meals" screenOptions={{
        headerShown: false
      }}>
        <MealsFavTabNavigator.Screen name="Meals" component={MyMealsNavigator} 
          options={{
            tabBarIcon: ({ tintColor, focused }) => {
              return <Ionicons name="ios-restaurant" size={24} color={focused ? "orange" : "gray"} />;
            },
            tabBarLabel: () => {
              return <Text style={{color: 'red'}}>Meals</Text>
            },
            
          }}
        />
        <MealsFavTabNavigator.Screen name="Favorites" component={MyFavNavigator} 
          options={{
            tabBarIcon: ({ tintColor, focused }) => {
              return <Ionicons name="ios-star" size={24} color={focused ? "yellow" : "gray"}  />;
            },
            tabBarLabel: () => {
              return <Text style={{color: 'red'}}>Favorite</Text>
            }
          }}
        />
      </MealsFavTabNavigator.Navigator>
  )
}

const MyFilterNavigator = () => {
  return (
    <FiltersNavigator.Navigator>
      <FiltersNavigator.Screen name="Filters" component={FiltersScreen} 
      options={
        ({navigation}) => ({
          title: "Filters",
          headerLeft: () => (
            <Ionicons name="ios-list" size={24} color="black"
              onPress={() => navigation.openDrawer()}
            />
          ),
        })
      } />
    </FiltersNavigator.Navigator>
  )
}

const MyMainNavigator = () => {
  return (
    <MainNavigator.Navigator screenOptions={{
      headerShown: false
    }}>
      <MainNavigator.Screen name="MealsFav" component={MyMealsFavTabNavigator}
      options={
        () => ({
          drawerLabel: "Meals",
        })
      } />
      <MainNavigator.Screen name="Filters" component={MyFilterNavigator} />
    </MainNavigator.Navigator>
  )
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MyMainNavigator/>
    </NavigationContainer>
  );
}
