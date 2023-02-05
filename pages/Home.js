import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Categories from '../components/Categories';
import { data } from '../constants';
import Cards from '../components/Cards';

const Home = ({ navigation }) => {
  const[ items, setItems ] = useState(data)
  const [showAllData, setShowAllData] = useState(true)
  const [showDogs, setShowDogs] = useState([])
  const [showCats, setShowCats] = useState([])
  const [showDog, setShowDog] = useState(false)

  useEffect(() => {
    if(showAllData){
      setItems(items)
      setShowDog(!showDogs)
    }
  }, [showAllData, setItems, setShowDogs])

  useEffect(() => {
    const cats = items.filter((item) => item.category === "cat")

    const dogs = items.filter((item) => item.category === "dog")
    
    if(showDog){
      setShowAllData(false)
      setShowDogs(dogs)
    }else{
      setShowAllData(false)
      setShowCats(cats)
    }

  }, [showDog, setShowDogs, setShowCats, setShowAllData])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" backgroundColor={"white"} barStyle="dark-content" />
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between"
      }}>
        <Text style={styles.heading}>takee</Text>
        <View>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <View style={styles.notifi} />
        </View>
      </View>

      <Categories 
      showDog={showDog}
      setShowDog={setShowDog}
      showAllData={showAllData}
      setShowAllData={setShowAllData}
      />

      <ScrollView style={{color:"#F2968F"}}>
              {showAllData && (
              <FlatList 
              data={items}
              keyExtractor={item => item.name}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'space-between',
              }}
              renderItem={({item}) => (
                <View
                styles={{
                    flexDirection:"column",
                }}
                >
                    <Cards 
                    name={item.name}
                    age={item.age}
                    breed={item.breed}
                    image={item.image}
                    onPress={() => navigation.navigate("Pets", { name:item.name, age:item.age, breed:item.breed, img:item.image, weight:item.weight, description:item.description })}
                    />
                </View>
              )}
              />
                )}

                {showDog ? (
                                <FlatList 
                                data={showDogs}
                                keyExtractor={item => item.name}
                                numColumns={2}
                                columnWrapperStyle={{
                                  justifyContent: 'space-between',
                                }}
                                renderItem={({item}) => (
                                  <View
                                  styles={{
                                      flexDirection:"column",
                                  }}
                                  >
                                      <Cards 
                                      name={item.name}
                                      age={item.age}
                                      breed={item.breed}
                                      image={item.image}
                                      onPress={() => navigation.navigate("Pets", { name:item.name, age:item.age, breed:item.breed, img:item.image, weight:item.weight, description:item.description })}
                                      />
                                  </View>
                                )}
                                />
                ): (
                  <FlatList 
                  data={showCats}
                  keyExtractor={item => item.name}
                  numColumns={2}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                  }}
                  renderItem={({item}) => (
                    <View
                    styles={{
                        flexDirection:"column",
                    }}
                    >
                        <Cards 
                        name={item.name}
                        age={item.age}
                        breed={item.breed}
                        image={item.image}
                        onPress={() => navigation.navigate("Pets", { name:item.name, age:item.age, breed:item.breed, img:item.image, weight:item.weight, description:item.description })}
                        />
                    </View>
                  )}
                  />
                )}
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:10,
    paddingHorizontal:15
  },
  heading: {
    fontSize:24,
    fontWeight:'semibold',
  },
  notifi:{
    position:"relative",
    left:12,
    bottom:26,
    width:10,
    height: 10,
    borderRadius:10,
    backgroundColor: "#F2968F",   
  }
});