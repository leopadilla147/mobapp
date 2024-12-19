import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, View } from 'react-native';

import ExampleHomeScreen from './Screen/ExampleHomeScreen';
import CaseListScreen from './Screen/CaseListScreen';
import CaseReportDetails from './Screen/CaseReportDetails';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExampleHome">
        <Stack.Screen name="ExampleHome" component={ExampleHomeScreen} />
        <Stack.Screen name="CaseList" component={CaseListScreen} />
        <Stack.Screen name="CaseReport" component={CaseReportDetails} />
      </Stack.Navigator>

  </NavigationContainer>
  );
}
