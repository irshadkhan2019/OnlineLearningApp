import { View, Text,Image,ScrollView } from 'react-native'
import React from 'react'
import { IconButton, TextButton } from '../../../components'
import { COLORS,FONTS,SIZES,images,icons,dummyData } from '../../../constants'

function renderStudents(){
    let students=[]

    if(dummyData?.course_details.students.length >3){
        students=dummyData?.course_details.students.slice(0,3)
    }else{
        students=dummyData?.course_details.students
    }

    return(
        <View
            style={{}}
        >
            {/* title */}
            <Text style={{...FONTS.h2,fontSize:25}}>Students</Text>

            {/* Students */}
            <View 
            style={{
                flexDirection:"row",
                marginTop:SIZES.radius,
                alignItems:"center"
            }}>
                {students.map((item,index)=>{
                    return(
                        <View
                            key={`Students-${index}`}
                            style={{
                                marginLeft:index>0?SIZES.radius:0
                            }}
                        >
                            <Image 
                                source={item?.thumbnail}
                                style={{
                                    width:80,
                                    height:80
                                }}
                            />

                        </View>
                    )
                })}

                {/* view all btn if  >3 students */}
                {dummyData?.course_details?.students.length >3 && (
                    <TextButton
                        label={"View All"}
                        labelStyle={{
                            color:COLORS.primary,
                            ...FONTS.h3
                        }}
                        contentContainerStyle={{
                            backgroundColor:null,
                            marginLeft:SIZES.base
                        }}

                        
                    />
                )}

            </View>
        </View>
    )
}

function renderFiles(){
    return(
        <View
            style={{
                marginTop:SIZES.padding
            }}
        >
            {/* Section Title */}
            <Text style={{...FONTS.h2,fontSize:25}}>Files</Text>

            {/* Files */}
            {dummyData?.course_details?.files.map((item,index)=>{
                return (
                    <View 
                        key={`Files-${index}`}
                        style={{
                            flexDirection:"row",
                            marginTop:SIZES.radius,
                        
                        }}
                    >
                        {/* thumbnai */}
                        <Image 
                            source={item?.thumbnail}
                            style={{
                                width:80,
                                height:80
                            }}
                        />

                        {/* Name author date */}
                        <View
                            style={{
                                flex:1,
                                marginLeft:SIZES.radius
                            }}
                        >
                            <Text style={{...FONTS.h2}}>{item?.name}</Text>
                            <Text style={{color:COLORS.gray30,...FONTS.body3}}>{item?.author}</Text>
                            <Text style={{...FONTS.body4}}>{item?.upload_date}</Text>


                        </View>

                        {/* menu btn */}
                        <IconButton 
                            icon={icons.menu}
                            iconStyle={{
                                width:25,
                                height:25,
                                tintColor:COLORS.black,

                            }}
                            containerStyle={{
                                alignItems:"center",
                                justifyContent:"center",
                                borderRadius:25
                            }}
                        />
        
                    </View>
                )
            })}
        </View>
    )
}

const CourseFiles = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            padding:SIZES.padding
        }}
    >
      {/* Student */}
      {renderStudents()}

      {/* Files */}
      {renderFiles()}
    </ScrollView>
  )
}

export default CourseFiles