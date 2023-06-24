import { View, Text,Image,TouchableOpacity,Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS,FONTS,SIZES} from '../constants'

const ProfileRadioButton = ({icon,label,isSelected,onPress}) => {
  const radioAnimated=useRef(new Animated.Value(0)).current;

  const circleColorAnimated=radioAnimated.interpolate({
    inputRange:[0,17],
    outputRange:[COLORS.gray40,COLORS.primary]
  })

  const lineColorAnimated=radioAnimated.interpolate({
    inputRange:[0,17],
    outputRange:[COLORS.additionalColor4,COLORS.primary]
  })
  //runs animation when selected toggles
  useEffect(()=>{
    if(isSelected){
        Animated.timing(radioAnimated,{
            toValue:17,
            duration:300,
            useNativeDriver:false
        }).start();
    }
    else{
        Animated.timing(radioAnimated,{
            toValue:0,
            duration:300,
            useNativeDriver:false
        }).start();
    }
  },[isSelected])

  return (
    <View
        style={{
            flexDirection:"row",
            height:80,
            alignItems:"center"
        }}
    >
        {/* Icon */}
      <View
        style={{
            width:40,
            height:40,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:20,
            backgroundColor:COLORS.additionalColor11
        }}
      >
        <Image 
            source={icon}
            resizeMode='contain'
            style={{
                width:25,
                height:25,
                tintColor:COLORS.primary
            }}
        />
      </View >

      {/* Label and radio btn */}
      <View
        style={{
            flex:1,
            marginLeft:SIZES.radius
        }}
       >
        <Text 
            style={{...FONTS.h3}}
        >
           {label} 
        </Text>
       </View>

       {/* Radio button */}
       <TouchableOpacity
            style={{
                width:40,
                height:40,
                justifyContent:"center",
                alignItems:"center",
                // backgroundColor:COLORS.gray85
            }}
            onPress={onPress}
        >
            {/* display line */}
            <Animated.View 
                style={{
                    width:"100%",
                    height:5,
                    borderRadius:3,
                    backgroundColor:lineColorAnimated

                }}
            />
            {/* display Circle */}
            <Animated.View 
                style={{
                  position:"absolute",
                  left:radioAnimated,
                  width:25,
                  height:25,
                  backgroundColor:COLORS.white,
                  borderColor:circleColorAnimated,
                  borderRadius:15,
                  borderWidth:4
                }}
            />
       </TouchableOpacity>
    </View>
  )
}

export default ProfileRadioButton