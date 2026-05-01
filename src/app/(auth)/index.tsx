import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagepath from '@/src/constant/imagepath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const auth = () => {
  const [isloding,setIsloading] =useState(true);

  const navigate_to_welcome = () =>{
    router.push("/(auth)/terms_agree")
  }

  const loadingtimeout = () =>{
    setIsloading(true);
    setTimeout(navigate_to_welcome,3000)
  }
useEffect(()=>{
  setTimeout(loadingtimeout,2000);
},[])

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagepath.logo}
          style={styles.logo_style}
          resizeMode='contain' />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {
          isloding ? (
            <>
            <ActivityIndicator size={40} color={"#0fa519"}/>
            <Text style={styles.loading_text}>Loading...</Text>
            </>
          ) : (
        
        <>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
        </>
        )}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(70),
  },
  header: {
    // height:40,
    // width:40,
    // backgroundColor:'red',
  },
  body: {
    // height: 40,
    // width: 40,
    gap: verticalScale(6),
    marginBottom: verticalScale(100),
    alignItems: 'center'
    // backgroundColor:'green',
  },
  footer: {
    // height:40,
    // width:40,
    // backgroundColor:'blue',
    alignItems: 'center',
    height:verticalScale(60),
    justifyContent:'flex-end',
  },
  from_text: {
    fontSize: 12,
    color: '#6c6a6ad2'
  },
  facebook_text: {
    fontSize: 15,
    color: 'black',
  },
  logo_style: {
    height: verticalScale(70),
    width: scale(70),
    borderRadius: 10,
    // alignContent:'center'
  },
  whatsapp_text: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
  },
  loading_text:{
    color:'#0fa519',
    fontSize:20,
    marginTop:verticalScale(10),
  },
})
export default auth