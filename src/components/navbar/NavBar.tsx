import { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Card } from '../Card';
import { MenuItem } from './MenuItem';
import { useNavigation } from '@react-navigation/native';


interface Props {
}

export const NavBar:FC <Props> = () => {

    const navigation = useNavigation();
 return (
   <Card addClassName='flex-row p-0 self-center' >

    <MenuItem destino='CompanyScreen' require={require('./tienda-alt.png')} label='Compañias' />
   
    <MenuItem destino='CustomerScreen' require={require('./apreton-de-manos.png')} label='Clientes' />

    <View className='mx-2 -translate-y-4'>
        <TouchableOpacity 
            className='bg-sky-300 rounded-full p-3 items-center shadow-lg shadow-slate-800 -translate-y-2'
            onPress={()=>navigation.navigate("SalesOrderScreen" as never) }
        >
            <Image 
                source={require('./lista.png')}
                className='w-10 h-10 '
            />
            
        </TouchableOpacity>
        <Text className='text-xs text-center'>Pedidos</Text>
    </View>
    <MenuItem destino='ProductScreen' require={require('./caja-abierta.png')} label='Productos' />
    <MenuItem destino='' require={require('./menu-puntos.png')} label='Mas' />
   </Card>
 )
}