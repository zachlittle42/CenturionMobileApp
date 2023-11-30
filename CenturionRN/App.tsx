import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// Import your custom screens for each tab
import GoalScreen from './screens/GoalScreen'; 
import InsightsScreen from './screens/InsightsScreen'; 
import TodayScreen from './screens/TodayScreen'; 
import ExploreScreen from './screens/ExploreScreen'; 
import ProfileScreen from './screens/ProfileScreen'; 



// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

// Define the tabs within a component
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Goal" component={GoalScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// The main App component that now returns the NavigationContainer wrapping MyTabs
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}

