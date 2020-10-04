import React, { useState } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from '../styles'

const RemoveButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.removeButtonContainer}>
                <Image source={require('../assets/cart-icon.png')} style={styles.addToCartIcon}/>
                <Text style={styles.removeButtonText}>
                    Excluir!
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default RemoveButton