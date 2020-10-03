import React, { useState } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { exp } from 'react-native/Libraries/Animated/src/Easing'
import styles from '../styles'

const AddToCarButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.addToCartContaine}>
                <Image source={require('../assets/cart-icon.png')} style={styles.addToCartIcon}/>
                <Text style={styles.addToCartText}>
                    Mandar pro carrinho
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default AddToCarButton