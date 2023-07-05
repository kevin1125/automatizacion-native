import React, { FC, useEffect, useState } from 'react'
import { FlatList, RefreshControl, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { CardItem } from '../CardItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
    entities: [],
    screenName: string,
    label: string,
}

export const CardList:FC <Props> = ({entities, screenName, label}) => {

    const navitation = useNavigation<NativeStackNavigationProp<any>>();
 
    
 return (
   <>
   
    <FlatList
          
        data={entities}
        renderItem={({item}) => 
        <CardItem>
            <TouchableOpacity
                onPress={()=>
                    navitation
                    .navigate(screenName , {id:item['id']} )}
            >
                <Text>
                    {item[label]}
                </Text>
            </TouchableOpacity>
        </CardItem>
        }
        keyExtractor={item => item["id"]}
      />
    
   
   </>
 )
}