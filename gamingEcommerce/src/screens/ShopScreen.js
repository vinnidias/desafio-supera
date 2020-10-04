import React, { useState } from "react"
import { View, Text } from 'react-native'
import products from '../products/products'
import ProductsList from "../components/ProductsList"
import styles from "../styles"
import CartButton from '../components/CartButton'


const ShopScreen = ({navigation}) => {
	const cart = []
	const [cartItems, setCartItems] = useState(0)
	return (
		<View style={styles.shopScreenContainer}>
			<View style={styles.shopScreenHeader}>
				<View style={styles.cartHeader}>
					<CartButton onPress={()=> navigation.navigate('CartScreen', {cart})}/>
					
				</View>
			</View>
			<View style={{flex: 8}}>
				<ProductsList array={products} onPress={(id, name, price, score)=>{ 
					cart.push({id, name, price, score})
					console.log(cart)
				}}/>

			</View>
		</View>

	)
}

export default ShopScreen