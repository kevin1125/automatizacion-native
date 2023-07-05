import React from 'react';
import { FC } from 'react'
import { useController } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';

interface Props {
    name: string,
    label: string,
    control: any
}

export const Input:FC <Props>  = ({name,label, control}) => {

  const { field } = useController({
    control,
    defaultValue:'',
    name,
  })

 return (
   <>
   <View className='flex flex-col'>
      
      <TextInput 
        id={name} 
        value={field.value}
        onChangeText={field.onChange}
        placeholder={label}
        className='p-2 m-2 w-max border rounded-xl focus:outline-offset-4 focus:outline-sky-500 focus:border-solid border-sky-500' 
      />
   </View>
    
   </>
 )
}