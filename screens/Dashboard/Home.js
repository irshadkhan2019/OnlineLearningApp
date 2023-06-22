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

import { IconButton } from '../../components';
import {COLORS,SIZES,FONTS,constants,icons,images,dummyData} from "../../constants"

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

    return (
        <View 
            style={{
                flex:1,
                backgroundColor:COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Content */}
        </View>
    )
}

export default Home;