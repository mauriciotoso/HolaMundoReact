import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Dimensions} from 'react-native'

export default ({longPress, puntos, mostrarPuntos}) => {
    return(
        <MapView 
            style={styles.map}
            onLongPress={longPress}
        >
            {mostrarPuntos && puntos.map(x=>
                <Marker
                    key={x.name}
                    coordinate={x.coordinate}
                    title={x.name}
                />
                )}
        </MapView>

    )
}

const styles = StyleSheet.create({
    map:{
        height:Dimensions.get('window').height-150, 
        width:Dimensions.get('window').width, 
    },
});