import React from 'react';
import { useFonts } from 'expo-font';
// import MarketsOverview1 from '@/components/MarketsOverview1';
// import Market1 from './tabs/market1';
// import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
// import HomePage from './tabs/home';
// import Market2 from './tabs/market2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './tabs/home/home';
import Market1 from './tabs/market1/market1';
import Market2 from './tabs/market2/market2';



// import MarketsOverview2 from '@/components/Markets';
type RootStackParamList = {
  Home: undefined; // No parameters
  Market1: undefined;
  Market2: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
  // <><MarketsOverview1 />
  // </>
  <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Market1" component={Market1} />
        <Stack.Screen name="Market2" component={Market2} />
      </Stack.Navigator>
  );
}