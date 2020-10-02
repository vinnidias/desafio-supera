import React from "react"
import { View, Text } from 'react-native'
import productsArray from '../products/products.json'
import ProductsList from "../components/ProductsList"
import styles from "../styles"
import CartButton from '../components/CartButton'


const ShopScreen = () => {
	return (
		<View style={styles.shopScreenContainer}>
			<View style={styles.shopScreenHeader}>
				<View style={styles.cartHeader}>
					<CartButton />
				</View>
			</View>
			<View style={{flex: 8}}>
				<ProductsList array={productsArray} />

			</View>
		</View>

	)
}

export default ShopScreen