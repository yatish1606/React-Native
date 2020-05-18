import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, FlatList, TextInput, TouchableWithoutFeedback, } from 'react-native';

const {width, height} = Dimensions.get('window')

const array = []


export default function App() {

  const [KEY,SETKEY] = useState(0)

  const [todos,setTodos] = useState([{
    todo:'',
    key:''
  }])


  const [text,setText] = useState('')

  function handleSubmit () {

    // console.log(text)

    // let newTodo = {todo : text, key : KEY}
    
    // setTodos([...todos, newTodo])

    // SETKEY(KEY + 1)

    // console.log(todos)

    array.push({
      todo:text,
      key:KEY
    })

    SETKEY(KEY +1)

    console.log(array)
  }



  return (
    <View style={styles.container}>
      <View style={{width:width, height:200, backgroundColor:'green', alignItems:'center', justifyContent:'space-around'}}>
        <TextInput style={{borderWidth:1, borderRadius:10, width:'80%', height:35}} onChangeText={(text)=>setText(text)}/>
        <TouchableWithoutFeedback onPress={handleSubmit}>
          <View style={{width:60, height:60, borderRadius:30, backgroundColor:'salmon'}}>

          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{width:width, height:'75%', backgroundColor:'gold'}}>
        {
          array.map((todo) => <Text>{todo.todo}</Text>)
        }
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  },
});
