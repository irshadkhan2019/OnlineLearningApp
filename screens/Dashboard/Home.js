import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    StatusBar,

} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { IconButton, TextButton } from '../../components';
import {COLORS,SIZES,FONTS,constants,icons,images,dummyData} from "../../constants"
import { color } from 'react-native-reanimated';

const Home = () => {

    function renderHeader(){
        return(
            <View
                style={{
                    flexDirection:'row',
                    marginTop:StatusBar.currentHeight+2,
                    marginBottom:10,
                    paddingHorizontal:SIZES.padding,
                    alignItems:"center"
                }}
            >
               {/* Greetings  */}
               <View
                style={{
                    flex:1
                }}
               >
                <Text style={{...FONTS.h2}}>Hello ,IK</Text>
                <Text
                    style={{color:COLORS.gray50,...FONTS.body3}}
                >
                    Thursday, 22nd june 2023
                </Text>

               </View>

               {/* Notifications */}
                <IconButton icon={icons.notification} iconStyle={{tintColor:COLORS.black}} onPress={()=>{console.log("bell pressed")}}/>
            </View>
        )
    }

    function renderStartLearning(){
        return (
        <ImageBackground
            source={images.featured_bg_image}
            style={{
                alignItems:'flex-start',
                marginTop:SIZES.padding,
                marginHorizontal:SIZES.padding,
                padding:15
            }}
            imageStyle={{
                borderRadius:SIZES.radius
            }}
        >
            {/* Info */}
            <View>
                <Text style={{color:COLORS.white, ...FONTS.body2}}>HOW TO</Text>
                <Text style={{color:COLORS.white, ...FONTS.h2}}>Make your brain more visible with our checklist</Text>
                <Text style={{color:COLORS.white, ...FONTS.body4,marginTop:SIZES.radius}}>By Izuku Midoria</Text>
            </View>
            {/* Image */}
            <Image
                source={images.start_learning}
                style={{
                    width:"100%",
                    height:110,
                    marginTop:SIZES.padding
                }}
            />

            {/* btn */}
            <TextButton 
                label={`Start Learning`}
                contentContainerStyle={{
                    height:40,
                    paddingHorizontal:SIZES.padding,
                    borderRadius:20,
                    backgroundColor:COLORS.white
                }}
                labelStyle={{
                    color:COLORS.black
                }}
                onPress={()=>{console.log("start learning")}}
            />

        </ImageBackground>)
    }

    return (
        <View 
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* <------Content -----> */}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom:150,
              
                }}
                showsVerticalScrollIndicator={false}
                
            >
                {/* Start Learning  */}
                {renderStartLearning()}

            </ScrollView>
        </View>
    )
}

export default Home;