import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';



class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'GO',
            ultimoTempo: null
        };
        //variavel do timer relogio que começa nula
        this.timer = null;

        this.go = this.go.bind(this);
        this.clear = this.clear.bind(this);
    }

    go(){

        if(this.timer != null) {
            //aqui vai parar o timer
            clearInterval(this.timer);
            this.timer = null;
            this.setState({botao:'GO'});
        }
    //aqui começa a rodar o timer

        else{
        this.timer = setInterval(() => {
        this.setState({numero:this.state.numero + 0.1})}, 100);
    //pega 0 + 0.1
    //pega 0.1+0.1
        this.setState({botao: 'PAUSAR'});
            }
        } 

    clear(){
        if(this.timer != null){
            clearInterval(this.timer);
            this.timer = null;

        }
        this.setState({
            numero: 0,
            botao:'GO',
            ultimoTempo: this.state.numero
        });

    }



    render(){
        return(

            <View
            style={styles.container}
            
            >
                <Image
                source={require('./img/iconwatch.png')}
                style={styles.img}
                ></Image>
                <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
                <View
                style={styles.btnArea}
                >
                    <TouchableOpacity
                    style={styles.btn}
                    onPress={this.go}
                    >
                    <Text
                    style={styles.btnText}

                    >{this.state.botao}</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.btn}
                    onPress={this.clear}

                    >
                    <Text
                    style={styles.btnText}

                    >CLEAR</Text>

                    </TouchableOpacity>

                   
                </View> 
                <View
                    style={styles.ultimoTempo}
                    >
                        <Text
                        style={styles.tempotexto}>
                            
                        {this.state.ultimoTempo > 0 ? 'Ultimo Tempo '+ this.state.ultimoTempo.toFixed(1):''}
                        
                        </Text>

                    </View>

            </View>

            );      

          }

}
    const styles = StyleSheet.create({ 
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#ee82ee'

},
        img:{
            width:250,
            height:250
        },

        timer:{
            color:'#FFF',
            fontSize:65,
            fontWeight: 'bold'

        },
        btnArea:{
            flexDirection:'row',
            marginTop: 70,
            height:40,

        },
        btn:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#FFF',
            height:40,
            margin:18,
            borderRadius:9
        }, 
        btnText:{
            fontSize:20,
            fontWeight:'bold',
            color:'#ee82ee'
        },
        ultimoTempo:{
            marginTop:40
            
        },
        tempotexto:{
            fontSize: 25,
            fontStyle:'italic',
            color:'#FFF'
        }
});



export default App;