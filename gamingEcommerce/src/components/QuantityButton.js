import React, { useState } from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import styles from '../styles'

const QuantityButton = () => {
	const [quantity, setQuantity] = useState(1)
	return (
		<View style={styles.quantityButton}>
			<TouchableOpacity onPress={() => {
				if (quantity <= 1) {
					setQuantity(1)
					return quantity
				} else { setQuantity(quantity - 1) }
			}} >
				<View style={styles.minusButton}>
					<Text style={{ alignSelf: 'center' }}>
						➖
					</Text>
				</View>
			</TouchableOpacity>
			<Text style={styles.quantityText}>
				Qtd: {quantity}
			</Text>
			<TouchableOpacity onPress={() => {
					setQuantity(quantity + 1)
					return quantity
					} } >
				<View style={styles.plusButton}>
					<Text style={{ alignSelf: 'center' }}>
						➕
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}

export default QuantityButton