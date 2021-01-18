import React,{useState} from 'react';
import {StyleSheet, Dimensions, Modal, Text, View, TextInput} from 'react-native'

export default ({title,...rest}) => {
    return(
        <View style={styles.wrapped}>
            <Text>{title}</Text>
            <TextInput {...rest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapped:{
        height:40,
    },
});