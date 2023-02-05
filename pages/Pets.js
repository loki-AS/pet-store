import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Pets = ({ navigation, route }) => {

  const { name, age, breed, weight, description, img } = route.params;

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView>
        <View>
          <Image source={img} style={{height:300, width:"100%"}} />

          <View style={{position:"absolute", bottom:10, marginHorizontal:20, flexDirection:"row", alignItems:"center", backgroundColor:"#e1e1e140", paddingHorizontal:10, paddingVertical:5, borderRadius:10 }}>
          <Image source={img} style={{height:40, width:40, borderRadius:5}} />
          <View style={{paddingLeft:5}}>
            <Text style={{color:"white"}}>{name}</Text> 
            <Text style={{color:"white"}}>on a walk</Text>
          </View>
          </View>
          
          <View style={{position:"absolute",width:"100%", top:30 ,flexDirection:"row", justifyContent:"space-between", paddingHorizontal:10, }}>

            <View style={{backgroundColor:"white", borderRadius:20, paddingHorizontal:4, paddingVertical:4}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={24} color="black" />
            </TouchableOpacity>
            </View>

            <View style={{backgroundColor:"#e1e1e140", borderRadius:20, paddingHorizontal:4, paddingVertical:4, }}>
            <TouchableOpacity>
            <MaterialIcons name="favorite-outline" size={24} color="white" />
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{padding:10}}>
          <Text style={{fontSize:20}}>{name}</Text>
          <View style={{flexDirection:"row", justifyContent:"space-between", marginVertical:10}}>
            <Text style={{backgroundColor:"#FFEBCD", paddingHorizontal:12, paddingVertical:6, color:"#9B8769", borderRadius:5}}>{age}</Text>
            <Text style={{backgroundColor:"#E0CDFF", paddingHorizontal:12, paddingVertical:6, color:"#7C699B", borderRadius:5}}>Knows the command</Text>
            <Text style={{backgroundColor:"#FFCDD6", paddingHorizontal:12, paddingVertical:6, color:"#9B6972", borderRadius:5}}>{weight}</Text>
          </View>

          <View style={{paddingVertical:10}}>
            <Text style={{fontSize:18, color:"gray", lineHeight:30}}>{description}</Text>
          </View>

          <Text style={{color:"gray"}}>Update date: 24 hours ago</Text>
        </View>

        <View style={{justifyContent:"center", flex:1, alignItems:"center", marginVertical:20}}>
          <TouchableOpacity style={styles.button}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Sign up for an acquaintance</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Pets

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#F2968F",
    color: 'white',
    width:"80%",
    alignItems:"center",
    paddingHorizontal:4,
    paddingVertical:15,
    borderRadius:20,
    marginTop:5
  }
})