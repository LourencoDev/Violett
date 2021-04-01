import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';





class App extends Component {

  
  render(){

    
    return(
      <View style={styles.container}>
        
      
    <Image source={ require('./img/violetticon.png')} style={styles.image}> 
    </Image> 

     <Text style={styles.text}>Bem vindo ao Violett</Text>
 

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:'#8B008B',
    alignItems:'center',
    justifyContent:'center',
  },
  image: {
    width:250,
    height:250
    
  
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#8B008B",
    
  }
});

export default App;