import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, FlatList, TextInput, TouchableWithoutFeedback, } from 'react-native';
import {Feather, FontAwesome5} from '@expo/vector-icons'

const {width, height} = Dimensions.get('window')

let array = []

function Card (props) {
  return (
    <View style={{width:width, height:50, backgroundColor:'blue', flexDirection:'row'}}>
      <View style={{width:'80%',height:'100%'}}>
        <Text>{props.todo}</Text>
        <Text>{props.id}</Text>
      </View>
      <TouchableWithoutFeedback onPress={()=>props.onDelete()}>
        <View style={{height:'100%', width:'20%',backgroundColor:'pink', alignItems:'center', justifyContent:'center'}}>
            <Feather name='trash-2' size={25} color='salmon' />
        </View>
      </TouchableWithoutFeedback>
      
    </View>
  )
}


export default class  App extends React.Component {

  state = {
    KEY:0,
    todos : [],
    text:''
  }
  

  handleSubmit () {

    // array.push({
    //   todo:text,
    //   id:KEY
    // })
    console.log('hi')
    this.state.todos.push({
      todo : this.state.text,
      id : this.state.KEY
    })

    this.setState({KEY: this.state.KEY +1, text: ''})
    console.log(this.state.todos)
    
    
    
  }

  handleDelete (id) {

    this.setState({
      todos: this.state.todos.filter( (eachTodo) => {
        return eachTodo.id !== id
      })
    })

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{width:width, height:150, backgroundColor:'green', alignItems:'center', justifyContent:'space-around'}}>
          <TextInput style={{borderWidth:1, borderRadius:10, width:'80%', height:55, paddingBottom:20 }} onChangeText={(text)=>this.setState({text:text})} value={this.state.text}/>
          <TouchableWithoutFeedback onPress={()=>this.handleSubmit()}>
            <View style={{width:60, height:60, borderRadius:30, backgroundColor:'salmon', position:'absolute', top:80}}>
  
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{width:width, height:'75%', backgroundColor:'gold'}}>
          {
            this.state.todos.map((item) => <Card todo={item.todo}  id={item.id} onDelete={()=>this.handleDelete(item.id)}/>)
          }
          
        </View>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight
  },
});
