import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import CartProductCard from './CartProductCart'


const CartList = ({ array, onPress }) => {
    return (
        <ScrollView>
            {array.sort((a,b)=> a.price - b.price).map(product => <CartProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                score={product.score}
                onPress={onPress}
            />)}
        </ScrollView>
    )
}

export default CartList