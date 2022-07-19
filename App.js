import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

const App = () => {

  const [todos, setTodos] = useState([
    {
      text: 'buy coffee',
      key: 1
    },
    {
      text: 'create an app',
      key: 2
    },
    {
      text: 'play on the switch',
      key: 3
    },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('OOPS!', 'ToDo must be over 3 chars long', [
        {
          text: 'Understood',
          onPress: () => console.log('alert closed')
        }
      ])
    }
  }
  
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} hidden/>
        <Header judul='My Todos'/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={
                ({item}) =>
                <TodoItem item={item} pressHandler={pressHandler}/>
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    // backgroundColor: 'red',
    padding: 40
  },
  list: {
    flex: 1,
    // backgroundColor: 'yellow',
    marginTop: 20
  }
})

export default App;