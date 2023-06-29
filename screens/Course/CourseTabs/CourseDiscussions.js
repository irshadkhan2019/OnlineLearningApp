import { View, Text,TextInput,Keyboard,FlatList,Image } from 'react-native'
import React from 'react'
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
    </View>
  )
}

export default CourseDiscussions