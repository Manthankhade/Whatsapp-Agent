import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Redirect,Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'

const Rootnavigation = () => {
  const [islogin,setIslogin] =useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.preventAutoHideAsync();
    },2000)
  },[])
  return (
    <Stack>
      
    </Stack>
    
      )
}

export default Rootnavigation