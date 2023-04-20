import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";

export default function Atividade() {
  const [atividade, setAtividade] = useState("");
  const [date, setDate] = useState("");
  const [lancarAtividades, setLancarAtividades] = useState([]);

  const handleAtividadeChange = (text) => {
    setAtividade(text);
  };

  const handleDateChange = (text) => {
    setDate(text);
  };

  const handleReset = () => {
    setAtividade("");
    setDate("");
  };

  const handleLancarAtividade = () => {
    if (atividade.trim() === "" || date.trim() === "") {
      alert("Favor descrever atividade e data.");
    } else {
      setLancarAtividades([...lancarAtividades, { atividade, date }]);
      handleReset();
    }
  };

  const handleExcluirAtividade = (index) => {
    setLancarAtividades(lancarAtividades.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.atividade}>{item.atividade}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Button
        title="EXCLUIR"
        onPress={() => handleExcluirAtividade(index)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Atividades</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Atividade"
        onChangeText={handleAtividadeChange}
        value={atividade}
      />
      <TextInput
        style={styles.input}
        placeholder="Data da Atividade"
        onChangeText={handleDateChange}
        value={date}
      />
      <View style={styles.buttons}>
        <Button title="Limpar" onPress={handleReset} />
        <Button title="Lançar" onPress={handleLancarAtividade} />
      </View>
      <FlatList
        data={lancarAtividades}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  atividade: {
    flex: 2,
    marginRight: 10,
  },
  date: {
    flex: 1,
  },
});
