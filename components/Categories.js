import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from "../constants"

const Categories = ({setShowDog, showDog, setShowAllData, showAllData}) => {
  return (
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
    }}>
      <TouchableOpacity 
      onPress={() => setShowAllData(true)}
      style={{flexDirection:"row", alignItems:"center", backgroundColor:"#F2968F", paddingHorizontal:10, paddingVertical:7, borderRadius:40 }}>
        <Image source={images.all} />
        <Text style={{paddingHorizontal:10, color:"white", fontSize:20}}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => setShowDog(true)}
      style={{flexDirection:"row", alignItems:"center", paddingHorizontal:6, paddingVertical:3, borderRadius:40, backgroundColor: "#E2E8F0"  }}>
        <Image source={images.dog} />
        <Text style={{paddingHorizontal:10, fontSize:20}}>Dog</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
      onPress={() => setShowDog(false)}
      style={{flexDirection:"row", alignItems:"center", backgroundColor: "#E2E8F0", paddingHorizontal:6, paddingVertical:3, borderRadius:40 }}>
        <Image source={images.cat} />
        <Text style={{paddingHorizontal:10, fontSize:20}}>Cat</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    heading: {
        paddingHorizontal:5
      },
})