import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Button, View} from 'react-native';

const AddTodo = ({submitHandler}) => {

    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral'/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo;