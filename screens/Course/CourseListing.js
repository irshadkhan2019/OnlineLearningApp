import { View, Text ,Image,FlatList,StyleSheet} from 'react-native'
import React from 'react'
import Animated ,
{ Extrapolate,interpolate ,useAnimatedScrollHandler,useAnimatedStyle,useSharedValue,withDelay,withTiming,runOnJS} from 'react-native-reanimated'
import { IconButton ,HorizontalCourseCard,LineDivider} from '../../components'
import { COLORS,FONTS,SIZES,icons,images,dummyData } from '../../constants'
import { SharedElement } from 'react-navigation-shared-element'


const CourseListing = ({route,navigation}) => {

  const {sharedElementPrefix,category}=route.params;
 
  //handler
  function backHandler(){
    navigation.goBack()
  }

  //render
  function renderHeader(){
    return(
    <Animated.View
      style={{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        height:250,
        overflow:"hidden"

      }}
    >
     <SharedElement
        id={`${sharedElementPrefix}-CC-Bg-${category?.id}`}
        style={StyleSheet.absoluteFillObject}
      >
        <Image
          source={category?.thumbnail}
          resizeMode='cover'
          style={{
            height:"100%",
            width:"100%",
            borderBottomLeftRadius:50,
          }}
        />

      </SharedElement>
        {/* Title */}
        <Animated.View
          style={{
            position:"absolute",
            bottom:70,
            left:30,
          }}
        >
          <SharedElement
          id={`${sharedElementPrefix}-CC-Title-${category?.id}`}
          style={StyleSheet.absoluteFillObject}
          >
            <Text
              style={{
                position:"absolute",
                color:COLORS.white,
                ...FONTS.h1
              }}
            >
              {category?.title}
            </Text>
          </SharedElement>
        </Animated.View>

        {/* back btn */}
        <Animated.View>
              <IconButton 
                icon={icons.back}
                iconStyle={{
                  tintColor:COLORS.black
                }}
                containerStyle={{
                  position:"absolute",
                  height:50,
                  width:50,
                  top:40,
                  left:20,
                  backgroundColor:COLORS.white,
                  borderRadius:25,
                  justifyContent:"center",
                  alignItems:"center"
                }}
                onPress={()=>{
                  backHandler()
                }}
              />

        </Animated.View>
        {/* category Image */}
        <Animated.Image
          source={images.mobile_image}
          resizeMode={"contain"}
          style={{
            position:"absolute",
            right:40,
            bottom:-40,
            width:100,
            height:200

          }}
        />
    </Animated.View>
  )}

  return (
    <View
        style={{
            flex:1,
            backgroundColor:COLORS.white
        }}
    >
      {/* Header */}
      {renderHeader()}
     
    </View>
  )
}

CourseListing.sharedElements=(route,otherRoute,showing)=>{
  const {category,sharedElementPrefix}=route.params;

  return[
    {
      id:`${sharedElementPrefix}-CC-Bg-${category?.id}`  
    },
    {
      id:`${sharedElementPrefix}-CC-Title-${category?.id}`
    }
  ] 
}

export default CourseListing