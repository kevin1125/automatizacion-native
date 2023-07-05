import { FC } from 'react'
import { View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native'
import { useNavigation } from '@react-navigation/native';

interface Props {
    require: (id: string) => any,
    focused?: boolean,
    
}

export const TabItem:FC <Props> = ({require,focused}) => {
    let className =  "w-8 h-8 ";
    if (focused){
        
    }
        
 return (
    <View className=''>
    <Image 
        source={require as ImageSourcePropType}
        className={className}
    />  
    </View>
  
 )
}