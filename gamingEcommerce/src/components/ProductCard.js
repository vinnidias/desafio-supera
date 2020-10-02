import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'


const ProductCard = ({id, name, price, score, imagePath}) => {
	const id = id
  return (
		<View style={styles.productCardContainer}>
			<Image source={require(imagePath)}/>
			<Text>
				{name}
			</Text>
			<Text>
				R${price}
			</Text>
			<Text>
				Pontuação: {score}
			</Text>
		</View>
	)
}

export default ProductCard