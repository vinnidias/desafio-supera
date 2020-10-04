import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'
import RemoveButton from './RemoveButon'
import {
superMarioOdyssey,
callOfDutyInfiniteWarfare,
theWitcherIIIWildHunt,
callOfDutyWWII,
mortalKombatXL,
shardsofDarkness,
terraMediaSombrasdeMordor,
fifa18,
horizonZeroDawn,

} from './GameIcons'

const getImage = (id) => {
	if (id === 312) {
		return superMarioOdyssey
	} if (id === 201) {
		return callOfDutyInfiniteWarfare
	} if (id === 102) {
		return theWitcherIIIWildHunt
	} if (id === 99) {
		return callOfDutyWWII
	} if (id === 12) {
		return mortalKombatXL
	} if (id === 74) {
		return shardsofDarkness
	} if (id === 31) {
		return terraMediaSombrasdeMordor
	} if (id === 420) {
		return fifa18
	} if (id === 501) {
		return horizonZeroDawn
	}
}

const CartProductCard = ({ id, name, price, score, onPress}) => {
	const identification = id

	return (
		<View style={styles.cartProductCardContainer}>
			<Image source={getImage(id)} />
			<Text style={styles.cardText}>
				{name}
			</Text>
			<Text>
				R${price}
			</Text>
			<Text>
				Popularidade: {score} pts
			</Text>
			<View>
				<RemoveButton onPress={onPress}/>
			</View>
		</View>
	)
}

export default CartProductCard