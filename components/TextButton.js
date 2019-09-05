import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export default function TextButton ({ children, onPress }) {
    return (
        <TouchableOpacity onOress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}