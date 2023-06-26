import React, { useRef } from 'react';
import {
    View,
    Text,
    Image,
    TextInput
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import {TextButton,CategoryCard} from "../../components"
import { COLORS,FONTS,SIZES,icons,dummyData } from '../../constants';
import Animated, { Extrapolate ,interpolate,useAnimatedScrollHandler,useAnimatedStyle,useSharedValue} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';


const Search = () => {
    const navigation=useNavigation()

    const scrollViewRef=useRef()

    const scrollY=useSharedValue(0)
    const onScroll=useAnimatedScrollHandler(event=>{
        // console.log(event.contentOffset.y)
        scrollY.value=event.contentOffset.y
    })

    function renderTopSearches(){
        return (
            <View
                style={{
                    marginTop:SIZES.padding
                }}
            >
                <Text
                    style={{
                      marginHorizontal: SIZES.padding,
                      ...FONTS.h2
                    }}
                >
                    Top Searches 
                </Text>

                <FlatList
                    horizontal
                    data={dummyData?.top_searches}
                    key={'TopSearches'}
                    keyExtractor={item=>`TopSearches-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop:SIZES.radius
                    }}
                    renderItem={({item,index})=>(
                        <TextButton 
                        label={item.label} 
                        contentContainerStyle={{
                            paddingVertical:SIZES.radius,
                            paddingHorizontal:SIZES.padding,
                            marginLeft:index==0?SIZES.padding:SIZES.radius,
                            marginRight:index==dummyData?.top_searches.length-1?SIZES.padding:0,
                            borderRadius:SIZES.radius,
                            backgroundColor:COLORS.gray10
                        }} 
                        labelStyle={{
                            color:COLORS.gray50,
                            ...FONTS.h3
                        }}
                        
                        />
                    )}
                >

                </FlatList>

            </View>
        )
    }

    function renderBrowseCategories(){
        return (
            <View
                style={{
                    marginTop:SIZES.padding
                }}
            >
                <Text
                    style={{
                      marginHorizontal: SIZES.padding,
                      ...FONTS.h2
                    }}
                >
                    Browse Categories
                </Text>

                <FlatList
                    data={dummyData?.categories}
                    numColumns={2}
                    scrollEnabled={false}
                    key={'BrowseCategories'}
                    keyExtractor={item=>`BrowseCategories-${item.id}`}        
                    contentContainerStyle={{
                        marginTop:SIZES.radius
                    }}
                    renderItem={({item,index})=>( 
                        <CategoryCard 
                            sharedElementPrefix={"Search"}
                            category={item}
                            containerStyle={{
                                height:130,
                                width:(SIZES.width-(SIZES.padding*2)-SIZES.radius)/2,
                                marginTop:SIZES.radius,
                                marginLeft:(index)%2==0?SIZES.padding:SIZES.radius
                                
                            }}
                            onPress={()=>navigation.navigate("CourseListing",{
                                category:item,
                                sharedElementPrefix:"Search"

                            })}
                        />
                    )}
                >

                </FlatList>

              

            </View>
        )
    }

    function renderSearchBar(){
        const inputRange=[0,55];

        const searchBarAnimatedStyle=useAnimatedStyle(()=>{
            return {
               //make ht and opacity of search bar 0 ,when scrolled y is 55
               height:interpolate(scrollY.value,inputRange,
                [55,0],Extrapolate.CLAMP),
               opacity:interpolate(scrollY.value,inputRange,
                [1,0],Extrapolate.CLAMP)

            }
        })

        return (
            <Animated.View
                style={[{
                    position:"absolute",
                    top:50,
                    left:0,
                    right:0,
                    paddingHorizontal:SIZES.padding,
                    height:50
                },
                searchBarAnimatedStyle
            ]}
            >
                <Shadow>
                    <View
                        style={{
                            flex:1,
                            flexDirection:"row",
                            alignItems:"center",
                            width:SIZES.width-(SIZES.padding*2),
                            paddingHorizontal:SIZES.radius,
                            borderRadius:SIZES.radius,
                            backgroundColor:COLORS.white

                        }}
                    >
                      {/*Search Icon  */}
                      <Image 
                        source={icons.search}
                        style={{
                            width:25,
                            height:25,
                            tintColor:COLORS.gray40
                        }}
                      />

                      {/* text input */}
                      <TextInput 
                        style={{
                            flex:1,
                            marginLeft:SIZES.base,
                            ...FONTS.h4
                        }}
                        value=''
                        placeholder='Search for Topics,courses & Educators'
                        placeholderTextColor={COLORS.gray}
                      />
                    </View>
                </Shadow>
            </Animated.View>
        )
    }

    return (
        <View
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
            <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={{
                    marginTop:100,
                    paddingBottom:300
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode={"on-drag"}
                onScroll={onScroll}
                onScrollEndDrag={(event)=>{
                    // console.log(event.nativeEvent.contentOffset)
                    if(event.nativeEvent.contentOffset.y>10 && 
                       event.nativeEvent.contentOffset.y<50
                        ){
                            scrollViewRef.current?.scrollTo({
                                x:0,
                                y:60,
                                animated:true
                            })
                        }
                }}
            >
                {/*top searches  */}
                {renderTopSearches()}

                {/* Browse Category */}
                {renderBrowseCategories()}

            </Animated.ScrollView>

            {/* Search Bar */}
            {renderSearchBar()}
        </View>
    )
}

export default Search;