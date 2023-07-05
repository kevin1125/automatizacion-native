import React from 'react';
import { SafeAreaView, ScrollView} from 'react-native'


export const Background = ({ children }: {children: JSX.Element | JSX.Element[]}) => {
 return (
   <>
   <SafeAreaView className='flex grow justify-center'>
   
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
      {children}
   
    </ScrollView>
   
   </SafeAreaView>
   
   </>
 )  
}
