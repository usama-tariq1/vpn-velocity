import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get("window").width; 
var height = Dimensions.get("window").height; 

const Slide = ({image ,title , description  }) => {


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
      >
      </Image>
      <Text style={styles.title}> {title} </Text>
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding:10,
    height: height * .7,
    alignItems: 'center',
  },
  image: {
    height: .7 * width,
    width: .7 * width,
    padding:10,
    marginBottom: height * .06,    
  },
  title:{
    color : "white",
    fontSize:28,
    marginBottom: height * .05,
    paddingHorizontal: 20,
    textAlign:'center'


  },
  description:{
    color : "lightgrey",
    fontSize:20,
    textAlign:'center',
    paddingHorizontal: 20,
    

  }

})

export default Slide