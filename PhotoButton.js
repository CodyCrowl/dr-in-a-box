import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function PhotoButton({text, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 50,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor: '#FF7000',
        justifyContent: 'center',
        top: -20,
        left: 25,
        right: 25,

    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 25, 
        textAlign: 'center',
        
    }
})


