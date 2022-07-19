import React from 'react';
import { StyleSheet, Text, View}  from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.judul}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Header;