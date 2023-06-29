import { View, Text,TextInput,Keyboard,FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IconButton, IconLabelButton } from '../../../components'
import { COLORS,FONTS,SIZES,icons,dummyData } from '../../../constants'


const CommentSection=({commentItem,commentOption,replies})=>{
    return (
        <View
            style={{
                flexDirection:"row",
                marginTop:SIZES.padding
            }}
        >
            {/* profile photo */}
            <Image 
                source={commentItem?.profile}
                style={{
                    width:40,
                    height:40,
                    borderRadius:20,
                }}
            />

            {/* Name and comment */}
            <View
               style={{
                 flex:1,
                 marginTop:3,
                 marginLeft:SIZES.radius
               }}   
            >
                {/* Name */}
                <Text
                    style={{
                        ...FONTS.h3
                    }}
                >
                    {commentItem?.name}
                </Text>

                {/* Cmment */}
                <Text
                    style={{
                      ...FONTS.body4
                    }}
                >
                    {commentItem?.comment}
                </Text>

                {/* Comment options */}
                {commentOption}

                {/* replies */}
                {replies}

            </View>

          

        </View>
    )
}

const CourseDiscussions = () => {
    
      const [footerHeight,setFooterHeight]=useState(60)
//    const [footerPosition,setFooterPosition]=useState(0)

//    useEffect(()=>{
//     //  listen to keyboard
//     const showSubscription=Keyboard.addListener('keyboardDidShow',(event)=>{
//         setFooterPosition(event.endCoordinates.height)
//     })
//     const hideSubscription=Keyboard.addListener('keyboardWillHide',(event)=>{
//         setFooterPosition(0)
//     })

//     return ()=>{
//         showSubscription.remove()
//         hideSubscription.remove()
//     }
    
//    },[footerPosition])

  function renderDiscussions(){
    return (
        <View
            style={{
                flex:1,
            }}
        >
            <FlatList 
                data={dummyData?.course_details?.discussions}
                keyExtractor={item=>`Discussions-main-${item.id}`}
                contentContainerStyle={{
                    paddingHorizontal:SIZES.padding,
                    paddingBottom:70
                }}
                renderItem={({item,index})=>(
                    <CommentSection 
                        commentItem={item}
                        commentOption={
                            <View
                             style={{
                                flexDirection:"row",
                                marginTop:SIZES.radius,
                                paddingVertical:SIZES.base,
                                borderTopWidth:1,
                                borderBottomWidth:1,
                                borderColor:COLORS.gray20

                             }}
                            >
                                {/* comment */}
                                <IconLabelButton
                                    icon={icons.comment}
                                    label={item?.no_of_comments}
                                    iconStyle={{
                                        width:20,
                                        height:20,
                                        tintColor:COLORS.black

                                    }}
                                    labelStyle={{
                                        marginLeft:5,
                                        color:COLORS.black,
                                        ...FONTS.h4
                                    }}
                                />

                                {/* Like */}
                                <IconLabelButton
                                    icon={icons.heart}
                                    label={item?.no_of_likes}
                                    iconStyle={{
                                        width:20,
                                        height:20,
                                        tintColor:COLORS.red

                                    }}
                                    containerStyle={{
                                        marginLeft:SIZES.radius
                                    }}
                                    labelStyle={{
                                        marginLeft:5,
                                        color:COLORS.black,
                                        ...FONTS.h4
                                    }}
                                />
                                {/* date */}
                                <Text 
                                   style={{
                                    flex:1,
                                    textAlign:'right',
                                    ...FONTS.h4
                                   }}
                                >
                                    {item?.posted_on}
                                </Text>


                            </View>
                        }
                        replies={
                          <FlatList 
                            data={item?.replies}
                            keyExtractor={item=>`Discussions-replies-${item.id}`}
                            renderItem={({item,index})=>(
                                <CommentSection 
                                    commentItem={item}
                                    commentOption={
                                        <View
                                            style={{
                                                flexDirection:"row",
                                                marginTop:SIZES.radius,
                                                paddingVertical:SIZES.base,
                                                borderTopWidth:1,
                                                borderBottomWidth:1,
                                                borderColor:COLORS.gray20

                                            }}
                                            >
                                            {/* reply */}
                                            <IconLabelButton
                                                icon={icons.reply}
                                                label={"Reply"}
                                                iconStyle={{
                                                    width:20,
                                                    height:20,
                                                    tintColor:COLORS.black

                                                }}
                                                labelStyle={{
                                                    marginLeft:5,
                                                    color:COLORS.black,
                                                    ...FONTS.h4
                                                }}
                                            />

                                            {/* Like */}
                                            <IconLabelButton
                                                icon={icons.heart_off}
                                                label={"Like"}
                                                iconStyle={{
                                                    width:20,
                                                    height:20,
                                                    tintColor:COLORS.red

                                                }}
                                                containerStyle={{
                                                    marginLeft:SIZES.radius
                                                }}
                                                labelStyle={{
                                                    marginLeft:5,
                                                    color:COLORS.black,
                                                    ...FONTS.h4
                                                }}
                                            />
                                            {/* date */}
                                            <Text 
                                            style={{
                                                flex:1,
                                                textAlign:'right',
                                                ...FONTS.h4
                                            }}
                                            >
                                                {item?.posted_on}
                                            </Text>


                                            </View>
                                       }
                                />
                            )}
                          /> 
                        }
                    />
                )}
            />
        </View>
    )
  }  

  function renderFooterTextInput(){
    return (
        <View
            style={{
                flexDirection:'row',
                position:"absolute",
                bottom:0,
                left:0,
                right:0,
                height:footerHeight,
                paddingHorizontal:SIZES.padding,
                paddingVertical:SIZES.radius,
                backgroundColor:COLORS.gray10

            }}
        >
            <TextInput
                style={{
                    flex:1,
                    marginRight:SIZES.base,
                    ...FONTS.body3
                }}
                multiline
                placeholder='Type Something'
                placeholderTextColor={COLORS.gray80}
                onContentSizeChange={(e)=>{
                    const height=e.nativeEvent.contentSize.height;
                    console.log(height)

                    if(height<=60){
                        setFooterHeight(60)
                    }else if(height>60 && height <=100){
                        setFooterHeight(height)
                    }
                    else if(height>100){
                        setFooterHeight(100)
                    }
                }}
                

            />

            {/* send icon */}
            <IconButton 
                icon={icons.send}
                iconStyle={{
                    height:25,
                    width:25,
                    tintColor:COLORS.primary
                }}
                containerStyle={{
                    justifyContent:"center",
                    alignItems:"center",
                }}
                onPress={()=>Keyboard.dismiss()}


            />

        </View>
    )

  }

  return (
    <View
        style={{
            flex:1,
            backgroundColor:COLORS.white,
        }}
    >
      {/* Discussion */}
      {renderDiscussions()}

      {/* Footer input */}
      {renderFooterTextInput()}
    </View>
  )
}

export default CourseDiscussions