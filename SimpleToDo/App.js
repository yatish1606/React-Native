import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, FlatList, TextInput, TouchableWithoutFeedback, ImageBackground,  } from 'react-native';
import {Feather, FontAwesome5} from '@expo/vector-icons'

const {width, height} = Dimensions.get('window')

function Card (props) {
  return (
    <View style={{width:width - 30, height:'auto', backgroundColor:'#fff', flexDirection:'row', paddingVertical:10, paddingHorizontal:10, borderBottomWidth:0, borderBottomColor:'#eee', alignItems:'center', marginHorizontal:15, marginVertical:5, borderRadius:10}}>
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:20, fontStyle:'normal', color:'#616668',marginLeft:10}}>{props.todo}</Text>
      </View>
      <TouchableWithoutFeedback onPress={()=>props.onDelete()}>
        <View style={{flex:0.2, alignItems:'center', justifyContent:'center'}}>
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
        <ImageBackground source={require('./assets/cubes2.png')} style={{width:width, height:height}} resizeMode='stretch'>
        <View style={{width:width, height:150, backgroundColor:'#FABE3A', alignItems:'center', justifyContent:'space-around', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
          <TextInput 
            style={{borderWidth:0, borderRadius:15, width:'80%', height:65, paddingBottom:20, backgroundColor:'#fff', paddingHorizontal:10, paddingTop:5, marginBottom:10, fontSize:18, textAlign:'center' }} 
            placeholder='Enter to do'
            placeholderTextColor='#d3d3d3'
            onChangeText={(text)=>this.setState({text:text})} 
            value={this.state.text}
          />
          <TouchableWithoutFeedback onPress={()=>this.handleSubmit()}>
            <View style={{width:60, height:60, borderRadius:30, backgroundColor:'#2899E2', position:'absolute', top:80, alignItems:'center', justifyContent:'center', elevation:10}}>
              <Feather name='plus' size={35} color='#fff' />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{width:width, height:'75%', paddingVertical:10}}>
          {
            this.state.todos.map((item) => <Card todo={item.todo}  id={item.id} onDelete={()=>this.handleDelete(item.id)}/>)
          }    
        </View>
        </ImageBackground>
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
