import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,

} from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contagem: 0,
      botaoStatus: 'Iniciar',
      ultimaContagem: 0,
      botaoStatusDesliga: 'Zerar',


    }
    this.liga = this.liga.bind(this)
    this.desliga = this.desliga.bind(this)
    this.idContador = 0
  }

  liga() {                               // ID setInterval ( metodo a ser executado(). intervalo de tempo em milisegundos) 
                                          //**depois usar o clearInterval (ID), PARA ANULAR O CRONÔMETRO

    if (this.idContador != 0) {   // quando ligo ele fica diferente de 0
      clearInterval(this.idContador)
      this.idContador = 0
      this.setState({ botaoStatus: 'Iniciar' })

    } else {
      this.setState({ botaoStatus: 'Pausar' })
      this.idContador = setInterval(() => { this.setState({ contagem: this.state.contagem + 1 }) }, 1000)  // só é usado para fazer a contagem + 1
    }


  }

  desliga() {

    
    
      this.setState({ contagem: 0})  // esta declaração zera o cronometro
      this.setState({botaoStatusDesliga: 'Zerar'})
    
    
      // esta declaração verifica a última contagem
      this.setState({botaoStatusDesliga: 'Zerar e Salvar'})



      this.setState({ultimaContagem: this.state.contagem }) 

    }

  

  render() {
    return (
      <View style={{ alignItems: 'center', backgroundColor: '#f01345'}}>
        <Image style={estilo.imagem} source={require('./src/cronometro.png')}
        />

        <Text style={{ fontSize: 100, fontWeight:'bold',color: 'forestgreen', margin: 20}}>{this.state.contagem} s</Text>


        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={this.liga}
            style={estilo.botao}>
            <Text style={{ fontSize: 30, fontWeight:'bold', color: 'forestgreen'}}>{this.state.botaoStatus}</Text>
          </TouchableOpacity>
        </View>
        
        
        <View style={{ flexDirection: 'row' }}>        
          <TouchableOpacity
            onPress={this.desliga}
            style={estilo.botao2}>
            <Text style={{ fontSize: 30, fontWeight:'bold',color: 'white'}}>{this.state.botaoStatusDesliga}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={estilo.ultimacontagem}>Esta foi a última contagem: {this.state.ultimaContagem} s </Text>
        </View>

      </View>
    )
  }
}


const estilo = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    margin: 30,
    flex: 1,
    borderRadius: 30,

  },

  botao2: {
    alignItems: 'center',
    backgroundColor: 'darkolivegreen',
    height: 50,
    margin: 30,
    flex: 1,
    borderRadius: 30,
    

  },

  imagem: {
    margin: 20,
    borderRadius: 10,


  },

  ultimacontagem: {
    fontSize: 20,
    margin: 20,
    fontWeight:'bold',
    color: 'white'

  }
})
