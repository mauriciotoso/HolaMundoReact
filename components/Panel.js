import React from 'react';
import {StyleSheet, Dimensions, Modal, Text, View, Button} from 'react-native'

export default ({onPressLeft, textLeft, onPressRight, textRight}) => {
    return(
        <View style={styles.panel}>
            <Button 
                onPress={onPressLeft}
                title={textLeft}/>
            <Button
                onPress={onPressRight}
                title={textRight}/>
        </View>
    )
}

const styles = StyleSheet.create({
    panel:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
});