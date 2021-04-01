import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            textoFrases:'',
            img: require('./img/biscoito.png'),

        };
        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'Eu amo pudim',
            'Eu odeio brinquedos com altura',
            'Eu queria sair do diamante',
            'Eu gosto muito de sonho',
            'EU SOU MUITO GAY',
            'Facada mal dada do caralho'
        ];
    }

    quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
        
        this.setState({
            textoFrases: ' "" ' +this.frases[numeroAleatorio] + ' "" ',
            img: require('./img/biscoitoAberto.png')
        })
    
    
    }

    render(){
        return(
            <View style={styles.visao}
            
            >
                <Image
                source={this.state.img}
                style={styles.imagem}
                
                ></Image>
                <Text 
                style={styles.textoFrase}
                >{this.state.textoFrases}</Text>
                <TouchableOpacity
                style={styles.botaoBiscoito}
                onPress={this.quebraBiscoito}
                >
                    <View
                    styles={styles.btnArea}
                    >
                        <Text
                        style={styles.btnTexto}
                        >Abrir o Biscoito</Text>
                    </View>
                </TouchableOpacity>

            </View>
    );
        
    }

}

const styles = StyleSheet.create ({
visao:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
}, 
imagem:{
    width: 250,
    height: 250,
},
textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin: 30,
    fontStyle:'italic',
    textAlign: 'center'
},
botaoBiscoito:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
}, 
btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
},
btnTexto:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#dd7b22',
    textAlign:'center'
}

});



export default App;