import React, { useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import ProductCard from './ProductCard'


const ProductsList = ({ array }) => {
    return (
        <ScrollView>
            {array.sort((a,b)=> a.price - b.price).map(product => <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                score={product.score}
                imageString={product.image}
            />)}
        </ScrollView>
    )
}

export default ProductsList