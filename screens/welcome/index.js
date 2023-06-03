import * as React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import themes from '../../theme';
import Slide from './components/slide';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const WelcomeScreen = ({ route, navigation }) => {

  const appTheme = route.params.appTheme
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themes[appTheme].backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#0AA989',
      paddingHorizontal: 50,
      paddingVertical: 16,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 25
    }
  });


  const screens =[
      <Slide 
        image={require('../../assets/drawable-hdpi/world-around.png')}
        title="Welcome to Velocity VPN!"
        description={
          <Text>
            Your gateway to a private,{'\n'}
            secure, and unrestricted {'\n'}
            internet experience.
          </Text>
        }
      /> ,
      <Slide 
        image={require('../../assets/drawable-hdpi/servers.png')}
        title="Online Privacy, Reinforced"
        description={
          <Text>
            With Velocity VPN, your online {'\n'}
            activities are truly private. {'\n'}
            We don’t log, monitor, {'\n'}
            or sell your data. {'\n'}
            Your privacy is our priority.{'\n'}
          </Text>
        }
      />,

      <Slide 
        image={require('../../assets/drawable-hdpi/world-network.png')}
        title="World is an online place lets keep it that way"
        description={
          <Text>
           Tap 'Connect' to secure your connection and enjoy unrestricted browsing!  Welcome to a safer, more private, and open internet experience.
          </Text>
        }
      />
  ]

  return (
    
    <View style={styles.container}>
      
      <GestureHandlerRootView> 
        <Carousel
          loop
          width={width}
          height={height * 0.7}
          autoPlay={false}
          data={[...new Array(3).keys()]}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ index }) => (
            
            screens[index]
            
          )}
        />
      </GestureHandlerRootView>


      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar backgroundColor={themes[appTheme].backgroundColor} />

    </View>
  )
}

export default WelcomeScreen