import { FC } from 'react'
import { View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native'
import { useNavigation } from '@react-navigation/native';

interface Props {
    require: (id: string) => any ,
    label: string,
    destino:string
}

export const MenuItem:FC <Props> = ({require,label, destino}) => {
   const navitation = useNavigation();
 return (
   <>
    <View className='mx-2'>
        <TouchableOpacity 
            className='items-center'
            onPress={()=>navitation.navigate(destino as never)}
        >
            <Image 
                source={require as ImageSourcePropType}
                className='w-8 h-8 my-2'
            />
            
        </TouchableOpacity>
        <Text className='text-xs text-center' >{label}</Text>
    </View>
   </>
 )
}