import React, { useEffect, useState } from "react"
import { View, Text } from 'react-native'
import styles from "../styles"
import CartList from "../components/CartList"

const CartScreen = ({ route, navigation }) => {
	const { cart } = route.params
	const prices = []
	const reducer = (a,b) => a + b 
	const [shipping, setShipping ] = useState(0)
	const[sub, setSub] = useState(0)
	const total = sub + shipping 

	useEffect(()=>{
			cart.forEach(product=>{
				prices.push(product.price)
				const soma = prices.reduce(reducer)
				setSub(soma)
				if(soma > 250){
					setShipping(0)
				}else{
					setShipping(cart.length*10)
				}
			})
	},[cart])
	return (
		<View style={styles.cartContainer}>
			<View style={styles.cartScreenHeader}>
				<Text style={styles.cartScreenHeaderText}>
					Carrinho
				</Text>
			</View>
			<View style={styles.checkoutContainer}>
				<Text style={styles.checkoutText}>
					Frete: R${shipping}
				</Text>
				<Text style={styles.checkoutText}>
					Subtotal: R${sub.toFixed(2)}
				</Text>
				<Text style={styles.checkoutText}>
					Total: R${total.toFixed(2)}
				</Text>
			</View>
			<View style={{ flex: 6 }}>
				<CartList 
					array={cart}
					onPress={()=>{
						cart.splice(1,1)
					}}
				/>
			</View>
		</View>
	)
}

export default CartScreen