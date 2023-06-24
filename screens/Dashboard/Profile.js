
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import {
    IconButton, TextButton,LineDivider, ProgressBar, ProfileValue
} from "../../components"

import { COLORS,FONTS,SIZES,icons,images } from '../../constants';

const Profile = () => {

    function renderHeader(){
        return (
            <View
                style={{
                    flexDirection:"row",
                    marginTop:50,
                    paddingHorizontal:SIZES.padding,
                    justifyContent:"space-between"
                }}
            >
                {/* heading */}
                <Text
                    style={{
                        ...FONTS.h1
                    }}
                >
                    Profile
                </Text>
                {/* change theme icon */}
                <IconButton
                    icon={icons.sun}
                    iconStyle={{
                        tintColor:COLORS.black
                    }}
                />

            </View>
        )
    }

    function renderProfileCard(){
         return (
            <View
                style={{
                   
                    flexDirection:'row',
                    marginTop:SIZES.padding,
                    paddingHorizontal:SIZES.radius,
                    paddingVertical:20,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.primary3
                }}
            >
                {/* profile img */}
                <TouchableOpacity
                    style={{
                        width:80,
                        height:80
                    }}
                >
                    <Image
                        source={images.profile}
                        style={{
                            width:"100%",
                            height:"100%",
                            borderRadius:40,
                            borderWidth:1,
                            borderColor:COLORS.white
                        }}
                    />
                    {/* camera icon */}
                    <View
                        style={{
                            position:'absolute',
                            width:"100%",
                            height:"100%",
                            alignItems:"center",
                            justifyContent:"flex-end"

                        }}
                    >
                        <View
                            style={{
                                width:30,
                                height:30,
                                marginBottom:-15,
                                alignItems:'center',
                                justifyContent:"center",
                                borderRadius:15,
                                backgroundColor:COLORS.primary
                            }}
                        >
                            <Image 
                                source={icons.camera}
                                resizeMode='contain'
                                style={{
                                    width:18,
                                    height:18
                                }}

                            />
                        </View>
                    </View>

                </TouchableOpacity>

                {/* profile details section */}

                <View
                    style={{
                        flex:1,
                        marginLeft:SIZES.radius,
                        alignItems:'flex-start'
                    }}
                >
                        <Text
                            style={{
                                color:COLORS.white,
                                ...FONTS.h2
                            }}
                        >Izuku Midoria</Text>

                        <Text
                            style={{
                                color:COLORS.white,
                                ...FONTS.body4
                            }}
                        >Full stack developer</Text>
                    

                    {/* progress bar CC */}
                    <ProgressBar 
                        containerStyle={{marginTop:SIZES.radius}} 
                        progress={"50%"}
                    />
                    {/* overall progress */}
                    <View
                        style={{
                            flexDirection:'row'
                        }}
                    >
                        <Text 
                            style={{
                                flex:1,
                                color:COLORS.white,
                                ...FONTS.body4
                            }}>Overall Progress
                        </Text>

                        <Text 
                            style={{
                              color:COLORS.white,
                              ...FONTS.body4
                            }}>
                            50%</Text>
                    </View>
                    {/* become member btn */}
                    <TextButton 
                        label={" + Become Member"}
                        contentContainerStyle={{
                            height:35,
                            marginTop:SIZES.padding,
                            paddingHorizontal:SIZES.radius,
                            borderRadius:20,
                            backgroundColor:COLORS.white
                        }}
                        labelStyle={{
                            color:COLORS.primary
                    }}
                    />
              </View>
            </View>
         )
    }

    function renderProfileSection1(){
        return (
            <View
                style={styles.profileSectionContainer}
            >
                <ProfileValue 
                    icon={icons.profile}
                    label={"Name"}
                    value={"Izuku Midoria"}
                />
                
            </View>
        )
    }

    return (
        <View
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
            {/* header */}
            {renderHeader()}

            {/* scroll view */}
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal:SIZES.padding,
                    // paddingBottom:150
                }}
            >
                {/* Profile  CArd */}
                {renderProfileCard()}

                {/* Other profile Settings  */}
                {/* Profile Sectino 1 */}
                {renderProfileSection1()}
            </ScrollView>

        </View>
    )
}

const styles=StyleSheet.create({
    profileSectionContainer:{
       marginTop:SIZES.padding,
       paddingHorizontal :SIZES.padding,
       borderWidth:1,
       borderRadius:SIZES.radius,
       borderColor:COLORS.gray20,
    //    backgroundColor:COLORS.gray50
    }
})

export default Profile;