import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

const GoBackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Image source={require('../assets/pngwing.png')} style={{width: 20, height: 20}}/>
        </TouchableOpacity>
    )
}

export default GoBackButton