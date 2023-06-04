import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import themes from '../../theme';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const HomeScreen = ({ route, navigation }) => {

  const appTheme = route.params?.appTheme || 'dark';
  const [connectionStatus, setConnectionStatus] = React.useState(false);
  const rotateValue = new Animated.Value(0);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  React.useEffect(() => {
    if(connectionStatus){
      startAnimation();
    }
  }, [connectionStatus]);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ ...styles.container, backgroundColor: themes[appTheme].backgroundColor }}>
      <View style={styles.appContainer}>

        <Text style={styles.connectionStatus}>{connectionStatus ? "Connected" : "Your Connection is not secure"}</Text>

        <Animated.Image
          style={{
            ...styles.image,
            opacity: connectionStatus ? 1 : 0.6,
            transform: [{ rotate: spin }],
          }}
          source={require('../../assets/drawable-hdpi/planet.png')}
        />

        {
          connectionStatus &&
          <View>
            <Text style={{ ...styles.connectionLocation, color: themes[appTheme].accentColor }}>New York</Text>
            <Text style={{ ...styles.connectionTime, color: themes[appTheme].accentColor }}>10:25:00</Text>
            <Text style={styles.connectionIp}>192.168.100.1</Text>
          </View>
        }

        <TouchableOpacity style={styles.button} onPress={() => { setConnectionStatus(!connectionStatus) }}>
          <Text style={styles.buttonText}>{connectionStatus ? "Disconnect" : "Connect"}</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1E1E',
    alignItems: 'center',
  },
  appContainer: {
    paddingTop: height * .05
  },
  connectionStatus: {
    fontSize: 20,
    color: 'white',
    fontFamily: "Poppins_400Regular",
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 800
  },
  image: {
    width: width * .7,
    height: width * .7,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  connectionLocation: {
    fontSize: 32,
    fontFamily: "Poppins_400Regular",
    color: 'white',
    textAlign: 'center',
    fontWeight: 300
  },
  connectionTime: {
    fontSize: 50,
    fontFamily: "Orbitron_400Regular",
    color: 'white',
    textAlign: 'center',
  },
  connectionIp: {
    fontSize: 20,
    color: 'lightgrey',
    fontFamily: "Orbitron_400Regular",
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#0AA989',
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});

export default HomeScreen;
