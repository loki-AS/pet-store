import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground source={images.pet} style={{ height: '100%' }} />
      <View style={{position:"absolute", width: "100%", height: "100%"}}>
        {children}
      </View>
    </View>
  )
}

export default Background

const styles = StyleSheet.create({})