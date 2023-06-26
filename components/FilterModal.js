import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Animated ,{interpolate,useAnimatedStyle,withDelay,withTiming}
from 'react-native-reanimated'
import {LineDivider,TextButton} from "../components"
import { COLORS,FONTS,SIZES,icons,constants } from '../constants'

const FilterModal = ({filterModalSharedValue1,filterModalSharedValue2}) => {
    // console.log(filterModalSharedValue1)

    // Animations
    const filterModalContainerAnimatedStyle=useAnimatedStyle(()=>{
        return{
            opacity:interpolate(filterModalSharedValue1.value,[SIZES.height,0],[0,1]),
            transform:[
                {
                    translateY:filterModalSharedValue1.value
                }
            ]
        }
    })

    const filterModalBgAnimatedStyle=useAnimatedStyle(()=>{
        return{
            opacity:interpolate(filterModalSharedValue2.value,[SIZES.height,0],[0,1]),
        }
    })
    const filterModalContentAnimatedStyle=useAnimatedStyle(()=>{
        return{
            opacity:interpolate(filterModalSharedValue2.value,[SIZES.height,0],[0,1]),
            transform:[
                {
                    translateY:filterModalSharedValue2.value
                }
            ]
        }
    })

    
  return (
    // Main container
    <Animated.View
        style={[{
            position:"absolute",
            bottom:0,
            height:SIZES.height,
            width:SIZES.width,
            backgroundColor:COLORS.primary
        },
        filterModalContainerAnimatedStyle
    ]}
    >
      {/* background container */}
      <Animated.View
        style={[{
            flex:1,
            height:SIZES.height,
            width:SIZES.width,
            backgroundColor:COLORS.transparentBlack7
        },
        filterModalBgAnimatedStyle
    ]}
      >
        {/* Content Container */}
        <Animated.View
            style={[{
                position:"absolute",
                bottom:0,
                height:SIZES.height*0.9,
                width:SIZES.width,
                borderTopLeftRadius:30,
                borderTopRightRadius:30,
                backgroundColor:COLORS.white

            },
            filterModalContentAnimatedStyle
        ]}
        >
            {/* Header */}
            <View
                style={{
                    flexDirection:"row",
                    marginTop:SIZES.padding,
                    paddingHorizontal:SIZES.padding
                }}
            >
                {/* view to center the below text */}
                <View
                    style={{
                        width:60,
                        // backgroundColor:COLORS.gray70
                    }}
                />
            
                <Text 
                    style={{
                        flex:1,
                        textAlign:"center",
                        ...FONTS.h2,
                        
                    }}
                >
                    Filter
                </Text>

                <TextButton 
                    label={"Cancel"}
                    contentContainerStyle={{
                        width:60,
                        backgroundColor:null,
                    }}
                    labelStyle={{
                        color:COLORS.black,
                        ...FONTS.body3
                    }}
                    onPress={()=>{
                        filterModalSharedValue2.value=withTiming(SIZES.height,{
                            duration:1000
                          })
                        
                    
                        filterModalSharedValue1.value=withDelay(1500,withTiming(SIZES.height,{
                            duration:1000
                          }))
                    }}
                />

            </View>



        {/*end of content container  */}
        </Animated.View>
      {/*end of bg container  */}
      </Animated.View> 
    {/*end of main container  */}
    </Animated.View> 
  
  )
}

export default FilterModal