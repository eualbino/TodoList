import { TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface Props{
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: () => void;
}

export default function TodoInput({ inputValue, setInputValue, handleSubmit }: Props){
  return(
    <View style={style.inputContainer}>
      <TextInput
        style={style.input}
        placeholder="Digite a sua tarefa"
        value={inputValue}
        onChangeText={setInputValue}
        placeholderTextColor="#858585"
      />
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={style.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  )  
}

const style = StyleSheet.create({
  inputContainer: {
    color: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 50,
    marginTop: 30,
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    padding: 10,
    color: '#cfcfcf',
    textAlignVertical: 'center',
    width: 170,
  },
  button: {
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "#cfcfcf",
    textAlign: 'center',
  },
})