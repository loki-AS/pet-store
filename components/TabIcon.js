import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

export default function TabIcon({focused, icon}) {
  return (
    <View
    style={{
        alignItems:"center",
        justifyContent:"center",
        height: 50,
        width: 50
    }}
    >
        {icon}
        {focused &&
        <View 
        style={{
            position:"absolute",
            left:0,
            bottom: 0,
            right:0,
            height: 5,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: "#F2968F",     
        }}
        />
        }
    </View>
  )
}