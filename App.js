import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import PersonalScreen from './screens/PersonalScreen';
import ProfessionalScreen from './screens/ProfessionalScreen';
import CompanyScreen from './screens/CompanyScreen';
import FeedDetailScreen from './screens/FeedDetailScreen';

// Enable native screens for better performance
enableScreens();

// Create a Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    // Wrap the entire app in GestureHandlerRootView to handle gestures
    <GestureHandlerRootView style={{flex: 1}}>
      {/* Wrap the entire app in a NavigationContainer to manage navigation state */}
      <NavigationContainer>
        {/* Define a Stack Navigator */}
        <Stack.Navigator>
          {/* Screen for Personal tab */}
          <Stack.Screen
            name="Personal"
            component={PersonalScreen}
            options={{headerShown: false}} // Hide the header for the Personal screen
          />
          {/* Screen for Professional tab */}
          <Stack.Screen
            name="Professional"
            component={ProfessionalScreen}
            options={{headerShown: false}} // Hide the header for the Professional screen
          />
          {/* Screen for Company tab */}
          <Stack.Screen
            name="Company"
            component={CompanyScreen}
            options={{headerShown: false}} // Hide the header for the Company screen
          />
          {/* Screen for displaying Feed Details */}
          <Stack.Screen
            name="FeedDetail"
            component={FeedDetailScreen}
            options={{title: 'Feed Detail'}} // Show the header with a custom title
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App; // Export the App component as the default export
