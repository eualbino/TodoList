import { useState } from "react";
import { Alert } from "react-native";

export default function useTodo(){
  const [data, setData] = useState<{id: number, name: string}[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddItem = () => {
    if(inputValue === null || inputValue === ''){
      Alert.alert("Erro ao adicionar a tarefa", "Porfavor insira algum caracter para poder adicionar a tarefa na lista!")
    }else{
      const newItem = {id: Date.now(), name: inputValue}
      setData((prev) => [...prev, newItem])
    }
    
    setInputValue('')
  }

  const handleDeleteItem = (id: number) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }
 
  return{
    data,
    handleAddItem,
    handleDeleteItem,
    setInputValue,
    inputValue,
  }
}