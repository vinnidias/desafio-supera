import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const CartButon = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={require('../assets/cart-icon.png')} style={{width: 50, height: 40}}/>
        </TouchableOpacity>
    )
}

export default CartButon