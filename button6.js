import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function Button6({text, onPress}){
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
        width: '95%',
        height: 100,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor: '#03CEA4',
        justifyContent: 'center',
        top: 30,
        left: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 25, 
        textAlign: 'center',
        
    }
})


