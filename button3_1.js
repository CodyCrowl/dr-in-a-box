import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function Button3_1({text, onPress}){
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
        width: 250,
        height: 250,
        borderTopLeftRadius:125,
        borderTopRightRadius:125,
        borderBottomLeftRadius:125,
        borderBottomRightRadius:125,
        backgroundColor: '#03CEA4',
        justifyContent: 'center',
        position: 'relative',
        left: 80,
        top: 20,

    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 40, 
        textAlign: 'center',
        
    }
})

