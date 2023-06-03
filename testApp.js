import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import themes from './theme';

export default function App() {

  const [appTheme, setAppTheme] = useState('dark')

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themes[appTheme].backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#0AA989',
      paddingHorizontal: 60,
      paddingVertical: 20,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
    }
  });
  

  const handleClick = () => {
    console.log('click')
    if (appTheme === 'light') {
      setAppTheme('dark')
    } else {
      setAppTheme('light')
    }
  }

  return (
    <View style={{ ...styles.container}}>
      <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.buttonText}>Hit Me ({appTheme})</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

