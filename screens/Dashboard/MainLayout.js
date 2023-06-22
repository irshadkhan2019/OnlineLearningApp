import React, { createRef, useRef } from 'react';
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
 

const MainLayout = () => {
    const flatListRef=useRef()
    const scrollX=useRef(new Animated.Value(0)).current

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
                snapToAlignment={"center"}
                snapToInterval={SIZES.width}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={true}
                data={constants.bottom_tabs}
                keyExtractor={item =>`Main-${item.id}`}
                onScroll={
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
                        {/* <Tabs 
                            scrollX={scrollX}
                        /> */}
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