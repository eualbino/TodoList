import { FlatList, Text, View } from "react-native";
import TodoInput from "../components/TodoInput";
import useTodo from "../hooks/useTodo";
import { StyleSheet } from "react-native";
import {
  useFonts,
  JetBrainsMono_400Regular,
} from "@expo-google-fonts/jetbrains-mono";
import TodoItem from "../components/TodoItem";

export default function TodoScreens() {
  const { data, handleAddItem, handleDeleteItem, inputValue, setInputValue } =
    useTodo();
  const [jetbrainsregular] = useFonts({ JetBrainsMono_400Regular });

  if (!jetbrainsregular) {
    return null;
  }

  return (
    <View>
      <Text style={style.textHeader}>TodoList</Text>
      <TodoInput
        handleSubmit={handleAddItem}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            name={item.name}
            handleDeleteItem={handleDeleteItem}
          />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  textHeader: {
    color: "#f39c12",
    fontFamily: "JetBrainsMono_400Regular",
    marginTop: 45,
    fontSize: 30,
    textAlign: "center",
  },
});
