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
    </ScrollView>
  )
}

export default CourseFiles