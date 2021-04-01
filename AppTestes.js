import React, {Component} from 'react';
//import React from 'react';
import { View, Text, Image, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';

/* function App() {
  return (
    <View>
      <Text>Eai</Text>
    </View>
  );
}

export default App;



//Podemos escrever esse mesmo código porém com Component 
//importado pelo React

class App extends Component {
  render(){

    let nome = 'Isabella';

    return(
      <View>
        <Text>Eu amo react-native</Text>
        <Text style={{
          color:'#00D', 
          fontSize: 25,
          margin: 15
        }}>Eu sou gay</Text>

     <Jobs 
     largura = {300} altura = {150} nome = 'Stivin'
     ></Jobs>
      <Text style={{fontSize:30}}>{nome}</Text>
      </View>
    );
  }
}

  class Jobs extends Component{
    render(){

      let img = 'https://sujeitoprogramador.com/steve.png'

      return(
        <View>
        <Image 
        source={{ uri: img}}
        style={{width: this.props.largura, height:this.props.altura}}
        ></Image>
        <Text>{this.props.nome}</Text>
        </View>
      );
    }
  }
  //uma maneira de escrevermos uma coisa que nao seja fixa
  //utilizando props this.props.{objeto que vc quer acessar}



export default App;



class App extends Component {
  
    constructor(props){
      super(props);
      this.state = {
        nome:'Isabelliha'
      };

       this.entrar=this.entrar.bind(this);
    }
   
    entrar(nome){
      this.setState({
        nome: nome
      })

    }

  render(){

    return(
      <View>
        <Button title="Entrar" onPress={() =>this.entrar('Loucona')}></Button>
        <Text style={{fontSize: 30, color:'red', textAlign: 'center'}}>
          {this.state.nome}</Text>
      </View>
    );
  }
}


//Como criar estilos fora do style dentro do component

class App extends Component {
  render(){
  return(
    <View style={styles.view}>
      <Text style={styles.text}>Eu amo goiaba</Text>
      <Text style={[styles.text, styles.view]}>Eu amo goiaba</Text>
      <Text>Eu amo goiaba</Text>
      <Text>Eu amo goiaba</Text>
    </View>
  );
}}

const styles = StyleSheet.create({
  view:{
    marginTop: 60, 
  },
  text:{
    fontSize: 30
  }

});

export default App;



//Tamanhos dinamicos e fixos!
//Flex dentro de style funciona como tamanho de tela (background color por exemplo)

class App extends Component {
  render(){
    return(
      <View style={{backgroundColor:'##222', flex:1}}>

        <View style={{ height:65, backgroundColor:'#222'}}></View>

        <View style={{flex:1, backgroundColor: '#FFF'}}></View>

        <View style={{height:65, backgroundColor:'#222'}}></View>
      
      </View>

    );
  }
}


class App extends Component {
  render(){
    return(
      <View style={{ flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>

        <View style={{ width:50, height:65, backgroundColor:'green'}}></View>

        <View style={{  width:50, height:65,backgroundColor: 'red'}}></View>

        <View style={{  width:50, height:65, backgroundColor:'yellow'}}></View>
      


      </View>

    );
  }
}

//Tela inicial rápida do Aplicativo Violett

const image = { uri: "https://lh3.googleusercontent.com/5Y9p4J1KwkZ5QdHEFta5bvM7LexkLMw2GQYsS3blJY_DRo-eka22PRMlXEL5WW4CT24ls0lALsuVmhXd-TA8o4d80gnoT71V6rDUwQclSV9hTkn2Khz3nd8SAdAFlyYFe9F-8UAKNH39wBes9a2iI862qpkWL5-3yqA-DJlBhhPOvfcUZ0e4jgseq--iylpyV9bXV4ZvtM_K6KfSj6cdmOFIL-xPUHtzRuJgL_WV2ODbLYa8Xg9_MjK9LZdjPSGrDDw_5BtX2NcPsdog99TgS5LpKI_R2U-erhYHXUGTXqHtnHcnw3ibSw8kUjj1kMqUbqg6F3IegiHgtZCvMIkMUSANjcPpoVWELs_cMvh9WSPf6wkm_HjNsfmQzOevz7iFfYtw88uGGJck831r288oBYl2zw0z1SU2alnX3cd_2ZtsXeGKod9LKqIyR3Y2FXzScfN5jYuobgDzofq_b4w-UnDvZdxlnUdEIiY45r_qOkVYOlxTjKGypU3i5OZsCPIQMwdtDh-6tVFrdxtUpt-WyFTUGfZuU5Sl8x4aSz-850yvT4ZXwm-CkMDzdx82wNMUmj00UDpD-udf19GDt6zueI1rggFXm-qEnexxNUoT8fSBkLP52-crgoiBFELJMvz7z5srOcee413sHihs38cfjx66xQ_yKYZAIkDsszGbndA1TyZEjb7nmx1ShviYlZxg54vSvL5SEnjLxszgJLLK9Ax8SA=w291-h273-no?authuser=0"} 
class App extends Component {

  
  render(){

    
    return(
      <View style={styles.container}>
        
      
    <Image source={image} style={styles.image}> 
    </Image> 
     <Text style={styles.text}>Bem vindo ao Violett</Text>
 

      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "gray"
  }
});


class App extends Component {
  render(){
    return(
      <View style={{ flex:1, flexDirection:'row', justifyContent: 'center', alignItems:'center'}}>

        <View style={{ width:50, height:65, backgroundColor:'green'}}></View>

        <View style={{  width:50, height:65,backgroundColor: 'red'}}></View>

        <View style={{  width:50, height:65, backgroundColor:'yellow'}}></View>
      


      </View>

    );
    }}

*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input:''
    };
    
    this.entrar = this.entrar.bind(this);
  }
  entrar (){
    if(this.state.input == ''){
      alert('Digite seu nome');
      return;
    }
    this.setState({nome: 'Bem vindo ' + this.state.input});
    }
  

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder="Digite seu nome"
        underlineColorAndroid="transparent"
        onChangeText={ (texto) => this.setState({input: texto})}
        ></TextInput>
        <Button
        title="Entrar"
        onPress={this.entrar}
        ></Button>
        <Text style={styles.texto}>{this.state.nome} </Text>
        

      </View>
 
    );
    }  
}
    const styles = StyleSheet.create({
      container:{
        flex:1
      },
      input:{
        height:45,
        borderWidth: 1,
        borderColor:'#222',
        margin:10,
        fontSize: 20,
        padding: 10
      },
      texto:{
        textAlign:'center',
        fontSize: 25
      }
    });

export default App;