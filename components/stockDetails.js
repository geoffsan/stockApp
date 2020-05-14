import React from 'react';
import { StyleSheet, TouchableOpacity, View,Text } from 'react-native';

export default function stockDetailsCard(props){
    return (
<View style={styles.timerContainer}>
        <Text style={styles.title}>{props.month}</Text>
    <Text>Volumes: {props.volume}</Text>
        
        <View style={styles.buttonGroup}>
            <Text>{props.open}</Text>
            <Text>{props.close}</Text>
        </View>
        <View style={styles.buttonGroup}>
            <Text>{props.high}</Text>
            <Text>{props.low}</Text>
        </View>
       
    </View>

    );
}

const styles =StyleSheet.create({
    timerContainer:{
        backgroundColor: 'white',
        borderColor:'#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom:0,
    },
    title:{
        fontSize:14,
        fontWeight: 'bold',
    },
    elapsedTime:{
        fontSize: 26,
        fontWeight: 'bold',
        textAlign:'center',
        paddingVertical: 15,
    },
    buttonGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
