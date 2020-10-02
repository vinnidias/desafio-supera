import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'


const ProductCard = ({id, name, price, score, imageString}) => {
	const identification = id
	console.log(imageString)

  return (
		<View style={styles.productCardContainer}>
			<Image source={require('../assets/fifa-18.png')}/>
			<Text>
				{name}
			</Text>
			<Text>
				R${price}
			</Text>
			<Text>
				Pontuação: {score}
			</Text>
			<View style={styles.buttonCardContainer}>

			</View>
		</View>
	)
}

export default ProductCard