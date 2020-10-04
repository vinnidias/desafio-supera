import React, { useState } from "react"
import { View, Text, ToastAndroid } from 'react-native'
import products from '../products/products'
import ProductsList from "../components/ProductsList"
import styles from "../styles"
import CartButton from '../components/CartButton'


const ShopScreen = ({navigation}) => {
	const cart = []
	return (
		<View style={styles.shopScreenContainer}>
			<View style={styles.shopScreenHeader}>
				<View style={styles.cartHeader}>
					<CartButton onPress={()=> navigation.navigate('CartScreen', {cart})}/>
				</View>
			</View>
			<View style={{flex: 8}}>
				<ProductsList array={products} onPress={async (id, name, price, score)=>{ 
					cart.push({id, name, price, score})
					console.log(cart)
					ToastAndroid.show("Produto adicionado ao carrinho!", ToastAndroid.SHORT)
				}}/>

			</View>
		</View>

	)
}

export default ShopScreen