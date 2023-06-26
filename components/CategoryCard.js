import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { SharedElement } from 'react-navigation-shared-element'
import { StyleSheet } from 'react-native'


const CategoryCard = ({sharedElementPrefix,category,containerStyle,onPress}) => {

  return (
    <TouchableOpacity
      style={{
        height:150,
        width:200,
        ...containerStyle
      }}
      onPress={onPress}
    >
      {/* Image background */}
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
            borderRadius:SIZES.radius,
          }}
          />
        </SharedElement>

        {/* title */}
        <View
          style={{
            position:"absolute",
            left:10,
            bottom:25

          }}
        >
          <SharedElement
            id={`${sharedElementPrefix}-CC-Title-${category?.id}`}
            style={
              StyleSheet.absoluteFillObject
            }
          >
            <Text
              style={{
                position:"absolute",
                bottom:5,
                color:COLORS.white,
                ...FONTS.h2
              }}
              >
              {category?.title}
            </Text>
          </SharedElement>

        </View>
    </TouchableOpacity>
  )
}

export default CategoryCard