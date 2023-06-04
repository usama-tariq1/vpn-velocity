import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import WelcomeScreen from './screens/welcome';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Orbitron_400Regular } from '@expo-google-fonts/orbitron';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


const Stack = createNativeStackNavigator();

function App() {

  const [appTheme, setAppTheme] = React.useState('dark')

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Orbitron_400Regular,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  else{
    onLayoutRootView()
  }

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} initialParams={{ appTheme: appTheme }} />
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ appTheme: appTheme }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;