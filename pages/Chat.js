import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:15, fontWeight:"bold"}}>Chat with us to know more!</Text>
      <View style={{position:"absolute", bottom:20, right:20, backgroundColor:"#89CFF0", borderRadius:30, shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2,}}>
      <Ionicons name="add" size={40} color="white" />
      </View>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});