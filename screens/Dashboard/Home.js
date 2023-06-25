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
import { CategoryCard, HorizontalCourseCard, IconButton, LineDivider, TextButton,VerticalCourseCard } from '../../components';
import {COLORS,SIZES,FONTS,constants,icons,images,dummyData} from "../../constants"
import { color } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Section=({containerStyle,title,onPress,children})=>{
    return (
        <View
            style={{
                ...containerStyle
            }}
        >
            {/* heading ->Title,seeall*/}
            <View
                style={{
                    flexDirection:'row',
                    paddingHorizontal:SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex:1,
                        ...FONTS.h2,
                    }}
                >
                    {title}

                </Text>
                <TextButton 
                contentContainerStyle={{
                    width:80,
                    borderRadius:30,
                    backgroundColor:COLORS.primary,
                }}
                    label={"See All"}
                    onPress={onPress}
                />

            </View>
            {children}
        </View>
    )

}

const Home = () => {
    const navigation=useNavigation();

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

    function renderCourses(){
        return (
            <FlatList
                horizontal
                data={dummyData.courses_list_1}
                key={`Courses`}
                keyExtractor={item=>`Courses-${item.id}`}
                // showsHorizontalScrollIndicator
                contentContainerStyle={{
                    marginTop:SIZES.padding
                }}
                renderItem={({item,index})=>(
                   <VerticalCourseCard 
                    course={item} 
                    containerStyle={{
                    marginLeft: index==0 ?SIZES.padding:SIZES.radius,
                    marginRight:index==dummyData.courses_list_1.length-1?SIZES.padding:0
                   }}/> 
                )}

            />

          
        )
    }

    function renderCategories(){
        return (
            <Section 
                containerStyle={{
                
                }}
                title={"Categories"}
                onPress={()=>console.log("See all")}

             >
                <FlatList
                    horizontal
                    data={dummyData.categories}
                    key={"Categories"}
                    keyExtractor={item=>`Categories-${item.id}`}
                    // showsHorizontalScrollIndicator
                    contentContainerStyle={{
                        marginTop:SIZES.radius
                    }}
                    renderItem={({item,index})=>(
                        <CategoryCard 
                            category={item}
                            containerStyle={{
                                marginLeft:index==0 ?SIZES.padding:SIZES.base,
                                marginRight:index==dummyData.categories.length-1?SIZES.padding:0
                            }}
                            onPress={()=>navigation.navigate("CourseListing")}
                        />
                        
                    )}

                />
                    
               
             </Section>
        )
    }
    function renderPopularCourses(){
        return (
            <Section 
                containerStyle={{
                    marginTop:30,
                }}
                title={"Popular Courses"}
                onPress={()=>console.log("See all")}

             >
                <FlatList
                    data={dummyData?.courses_list_2}
                    key={"PopularCourses"}
                    keyExtractor={item=>`PopularCourses-${item.id}`}
                    // scrollEnabled={false}
                    // showsVerticalScrollIndicator
                    contentContainerStyle={{
                        marginTop:SIZES.radius,
                        paddingHorizontal:SIZES.padding
                    }}
                    renderItem={({item,index})=>(
                        <HorizontalCourseCard course={item} 
                          containerStyle={{
                            marginVertical:SIZES.padding,
                            marginTop:index==0?SIZES.radius:SIZES.padding
                          }}/>
                    )}
                    ItemSeparatorComponent={()=>(
                        <LineDivider
                            lineStyle={{
                                backgroundColor:COLORS.gray20
                            }}
                        />
                    )}

                />
                    
               
             </Section>
        )
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

                {/* Courses */}
                {renderCourses()}

                {/* Line divider */}
                <LineDivider lineStyle={{
                    marginVertical:SIZES.padding,
                }}/>

                {/* Categories */}
                {renderCategories()}
            
                {/* Popular courses */}
                {renderPopularCourses()}

            </ScrollView>
        </View>
    )
}

export default Home;