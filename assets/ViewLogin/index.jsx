import React from "react";
import {StyleSheet ,Text, TextInput, View} from 'react-native';


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Tela de Login</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>E-mail</Text>
        <TextInput style={styles.formInput} keyboardType="email-address" />
        <Text style={styles.formLabel}>Senha</Text>
        <TextInput style={styles.formInput} secureTextEntry={true} />
        <View style={styles.buttonContainer}>
          <Text
          title="Vai para Home" 
          onPress={() => navigation.navigate("telaHome")}
          style={styles.button}>Entrar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF0043",
    textTransform: "uppercase",
  },
  formContainer: {
    width: "80%",
  },
  formLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
    textTransform: "uppercase",
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#FF0043",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    cursor: "pointer",
  },
  button: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
