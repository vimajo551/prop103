
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import Panel from 'react-native-panel';

export default class SignUpScreen extends React.Component {
  render() {
 
  return (
    <View style={styles.container}>
            <Text style={styles.upText}> JUNTE-SE AO </Text>
        <Text style={styles.downText}> APP CUIDE DAS PLANTAS </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          
        />
      </View>

       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Primeiro Nome"
          placeholderTextColor="#003f5c"
          
        />
      </View>

       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Sobrenome"
          placeholderTextColor="#003f5c"
          
        />
      </View>

       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Data de Nascimento"
          placeholderTextColor="#003f5c"
          
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
        />
      </View>
 
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>CADASTRE-SE</Text>
      </TouchableOpacity>
    </View>
  );
}
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    width: 190,
    borderRadius: 200,
  },
 
  inputView: {
    backgroundColor: "#aaffaf",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    color: 'white',
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: 'white',
  },
 

 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#2af598",
  },

   loginText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'century gothic',
    color: 'white',
    textAlign: 'center',
  },

   upText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'century gothic',
    marginTop: -30,
    fontStyle: 'italic',
    color: 'slategrey',
  },

  downText: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'century gothic',
    fontStyle: 'italic',
    color: '#1bd7bb',
    marginBottom: 20,
  },
});