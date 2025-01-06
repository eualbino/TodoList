import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';

interface Props {
  id: number;
  name: string;
  handleDeleteItem: (id: number) => void;
}

export default function TodoItem({ id, name, handleDeleteItem }: Props) {
  return (
    <View style={styles.containerItem}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{name}</Text>
        <TouchableOpacity onPress={() => handleDeleteItem(id)}>
          <Feather name="trash-2" size={24} color="#ff4d4d" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#2d3e51",
  },
  itemText: {
    color: "#cfcfcf",
    fontSize: 16,
  },

  deleteText: {
    color: "#cfcfcf",
    fontWeight: "bold",
  },
});
