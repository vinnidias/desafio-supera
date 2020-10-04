import React, { useState } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from '../styles'

const AddToCarButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.addToCartContainer}>
                <Image source={require('../assets/cart-icon.png')} style={styles.addToCartIcon}/>
                <Text style={styles.addToCartText}>
                    Mandar pro carrinho
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default AddToCarButton