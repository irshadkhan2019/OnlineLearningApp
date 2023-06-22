import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import {
    View,
    Text,TouchableOpacity,Image,Animated
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import {Home,Profile,Search} from "../../screens"
import {COLORS,SIZES,FONTS,constants} from "../../constants"
import { FlatList } from 'react-native';

const bottom_tabs=constants.bottom_tabs.map((bottom_tab)=>({
    ...bottom_tab,ref:createRef()
}))

const TabIndicator=({measureLayout,scrollX})=>{
    // console.log(measureLayout,":::",scrollX)
    //for animation
    const inputRange=bottom_tabs.map((_,i)=>i*SIZES.width)
    // console.log("inputRange",inputRange)
    // console.log("ORange",measureLayout.map((measure)=>measure.x))

    const TabIndicatorWidth=scrollX.interpolate({
        inputRange,
        outputRange:measureLayout.map((measure)=>measure.width)
    })
    const translateX=scrollX.interpolate({
        inputRange,
        outputRange:measureLayout.map((measure)=>measure.x)
    })

    return(
     <Animated.View
        style={{
            position:"absolute",
            left:0,
            height:"100%",
            width:TabIndicatorWidth,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.primary,
            transform:[{
                translateX
            }]
        }}
    />
    )

}
 
const Tabs=(({scrollX,onBottomTabPress})=>{
    const containerRef=useRef()
    const [measureLayout,setMeasureLayout]=useState([])
    
    useEffect(()=>{
        let ml=[]
      
        bottom_tabs.forEach(bottom_tab =>{
            bottom_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x,y,width,height)=>{
                    ml.push({
                        x,y,width,height
                    })
                    
                    if(ml.length === bottom_tabs.length){
                        setMeasureLayout(ml)
                    }
                }
            )
        })
    },[containerRef.current])

    return (
        <View
            ref={containerRef}
            style={{
                flex:1,
                flexDirection:"row",
              
            }}
        >
            {/* Tabs indicator */}
            {measureLayout.length >0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}
            {/* Tabs */}
            {bottom_tabs.map((item,index)=>{
                return (
                    <TouchableOpacity
                        key={`BottomTab-${index}`}
                        ref={item.ref}
                        style={{
                            flex:1,
                            paddingHorizontal:15,
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                        onPress={()=>onBottomTabPress(index)}
                    >
                        {/* Image */}
                        <Image source={item.icon}
                               resizeMode='contain'
                               style={{
                                width:25,
                                height:25,
                               }}
                        />

                        {/* Text */}
                        <Text style={{
                            marginTop:3,
                            color:COLORS.white,
                            ...FONTS.h3
                        }}>
                            {item.label}
                        </Text>

                    </TouchableOpacity>
                )
            })}

        </View>
    )
})


const MainLayout = () => {
    const flatListRef=useRef()
    const scrollX=useRef(new Animated.Value(0)).current

    // scroll flatlist manually when tabs item pressed instead of scrolling
    const onBottomTabPress=useCallback(bottomTabIndex=>{
        flatListRef?.current?.scrollToOffset({
            //navigates to other screen
            offset:bottomTabIndex*SIZES.width
        })
    })

    function renderContent(){
        return(
            <View
                style={{
                    flex:1,
                    
                }}
            >   
            <Animated.FlatList 
                ref={flatListRef}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                snapToAlignment={"center"}
                snapToInterval={SIZES.width}
                decelerationRate={"fast"}
                // showsHorizontalScrollIndicator={true}
                data={constants.bottom_tabs}
                keyExtractor={item =>`Main-${item.id}`}
                onScroll={
                    // change scrollX value when scrolled via UI thread
                    Animated.event([
                        {nativeEvent:{contentOffset:{x:scrollX}}}
                    ],{
                        useNativeDriver:false
                    })
                }
                renderItem={({item,index})=>{
                    return(
                        <View
                            style={{
                                height:SIZES.height,
                                width:SIZES.width,
                               
                            }}
                        >
                            
                            {item.label == constants.screens.home && <Home />}
                            {item.label == constants.screens.search && <Search />}
                            {item.label == constants.screens.profile && <Profile />}
                        </View>
                    )
                }}
            />

            </View>
        )
    }

    function renderBottomTab(){
        return (
            <View
                style={{
                    marginBottom:20,
                    paddingHorizontal:SIZES.padding,
                    paddingVertical:SIZES.radius,
                  
                }}
            >
                <Shadow
                style={{
                    width:SIZES.width -(SIZES.padding *2),
                    height:85
                }}    
                >
                    <View
                        style={{ flex:1,borderRadius:SIZES.radius,backgroundColor:COLORS.primary3}}
                        >
                        <Tabs 
                            scrollX={scrollX}
                            onBottomTabPress={onBottomTabPress}
                        />
                    </View>
                </Shadow>
                    
                
            </View>)
    }

    return (
        <View style={{
            flex:1,
            backgroundColor:COLORS.white
        }}>
            {/* Content */}
            {renderContent()}

            {/* Bottom TAb */}
            {renderBottomTab()}
           
        </View>
    )
}

export default MainLayout;