import React from 'react';
import {StyleSheet, Dimensions, Modal, Text, View} from 'react-native'

export default ({visibility,children}) => {
    return(
        <Modal
        animationType='slide'
        transparent={true}
        visible={visibility}>
          <View style={styles.center}>
            <View style={styles.modalView}>
                {children}
            </View>
          </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      },  
    modalView:{
        width:Dimensions.get('window').width-100,
        backgroundColor:'#fff',
        borderRadius:4,
        shadowColor:'#000',
        padding:0,
        shadowOffset:{
          width:0,
          height:3,
        },
      },
});