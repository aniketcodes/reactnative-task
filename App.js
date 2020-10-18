/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const images={
  menuBackground:require("./assets/images/menu-background.png"),
  menuIcon:require("./assets/images/menu.png"),
  cartIcon:require("./assets/images/cart.png"),
  pizza:require("./assets/images/pizza.png")

};
const items=[
  {
    name:"Pizza",
    image:require("./assets/images/pizza.png")
  },
  {
    name:"Salad",
    image:require("./assets/images/salads.png")
  },
  {
    name:"Desserts",
    image:require("./assets/images/dessert.png")
  },
  {
    name:"Pasta",
    image:require("./assets/images/pasta.png")
  },
  {
    name:"Breverages",
    image:require("./assets/images/breverages.png")
  }
];
var itemsTodisplay=[];



const App: () => React$Node = () => {
  return (
   <View style={styles.body}>
      <ImageBackground source={images.menuBackground} style={styles.menuBackground}>
      <TouchableOpacity>
      <ImageBackground source={images.menuIcon} style={styles.menuIcon}>
      </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity>
      <ImageBackground source={images.cartIcon} style={styles.cartIcon}>
      </ImageBackground>
      </TouchableOpacity>
      <ImageBackground source={items[0].image} style={styles.itemImage}>
        <Text style={styles.itemTitle}>Pizza</Text>
        <Text style={styles.itemContent}>25 Items</Text>

      </ImageBackground>
      <ImageBackground source={items[1].image} style={styles.itemImage}>
      <Text style={styles.itemTitle}>Salads</Text>
        <Text style={styles.itemContent}>30 Items</Text>
      </ImageBackground>
      <ImageBackground source={items[2].image} style={styles.itemImage}>
      <Text style={styles.itemTitle}>Desserts</Text>
        <Text style={styles.itemContent}>30 Items</Text>
      </ImageBackground>
      <ImageBackground source={items[3].image} style={styles.itemImage}>
      <Text style={styles.itemTitle}>Pasta</Text>
        <Text style={styles.itemContent}>44 Items</Text>
      </ImageBackground>
      <ImageBackground source={items[4].image} style={styles.itemImage}>
      <Text style={styles.itemTitle}>Breverages</Text>
        <Text style={styles.itemContent}>30 Items</Text>
      </ImageBackground>
      </ImageBackground>
      
   </View>
     
  );
};

const styles = StyleSheet.create({
  body:{
    backgroundColor:"#FAF7F7",
    color:"#000000"
  },
  menuBackground:{
    width:"60%",
    height:"100%"
    
  },
  menuIcon:{
    width:30,
    aspectRatio:1.733,
    marginLeft:"23%",
    marginTop:"10%"
  },
  cartIcon:{
    width:20,
    aspectRatio:1.01,
    marginLeft:"130%",
    marginTop:"-8%"
  },
  itemImage:{
    width:65,
    height:65,
    marginLeft:"16%",
    marginTop:"25%",
    resizeMode:"contain",
   
  },
  itemTitle:{
    fontFamily:"PaytoneOne-Regular",
    fontSize:25,
    width:250,
    color:"#313B52",
    paddingLeft:"30%",
    marginLeft:"145%",
    paddingTop:"20%",
    marginTop:"-25%",
    borderTopWidth:0.5,
    borderTopColor:"#C2BEBE"
  },
  itemContent:{
    fontFamily:"Poppins-Light",
    fontSize:15,
    width:250,
    color:"#C2BEBE",
    paddingLeft:"30%",
    marginLeft:"145%",
 
  }
});

export default App;
