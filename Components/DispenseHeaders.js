import React from 'react';
import { StyleSheet, Text, View, borderColor} from 'react-native';

export default function DHeader({text}){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop:20,
        paddingBottom:0,
        backgroundColor: '#03CEA4',
        borderWidth: 1,
        borderBottomColor: '#000'
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        color: "#0A2239",
        fontSize: 40,
        fontWeight:'bold',
    }
});