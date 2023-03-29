import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <ul style={styles.list}>
          <li style={styles.atividade} >Ler um livro interessante</li>
          <li style={styles.atividade}>Assistir a um filme novo ou uma série de TV</li>
          <li style={styles.atividade}>Fazer uma caminhada ao ar livre em um parque ou trilha</li>
          <li style={styles.atividade}>Experimentar uma nova receita de culinária</li>
          <li style={styles.atividade}> Fazer uma sessão de ioga ou meditação para relaxar</li>
          <li style={styles.atividade}>
            Fazer uma limpeza em sua casa ou organizar sua mesa de trabalho
          </li>
          <li style={styles.atividade}>
            Aprender algo novo, como tocar um instrumento musical ou uma nova
            língua
          </li>
          <li style={styles.atividade}>Fazer uma aula de ginástica ou exercício físico em casa</li>
          <li style={styles.atividade}>
            Passar tempo com amigos ou familiares, seja pessoalmente ou por
            vídeo chamada
          </li>
          <li style={styles.atividade}>
            Fazer uma atividade criativa, como pintura, desenho ou artesanato.
          </li>
        </ul>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#FFC0CB"
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  list: {
    color: "#FF1493",
    listStyle: "number",
    fontFamily: "fantasy",
  },

  atividade: {
    margin: 20,
  },
});
