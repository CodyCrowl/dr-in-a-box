import React from 'react';
import { StyleSheet, Text, View, borderColor} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Doc In A Box</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop:10,
        paddingBottom:0,
        backgroundColor: '#03CEA4',
        borderWidth: 1,
        borderBottomColor: '#000'
    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        color: "#0A2239",
        fontSize: 52,
        fontWeight:'bold',
    }
});