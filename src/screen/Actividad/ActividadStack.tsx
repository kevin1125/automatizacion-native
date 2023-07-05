import { FC, useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../main/AuthContext';
import { ActividadListScreen } from './ActividadListScreen';
import { ActividadFormScreen } from './ActividadFormScreen';
// import { ActividadListScreen } from './ActividadListScreen';
// import { ActividadFormScreen } from './ActividadFormScreen';

export type RootStackParams = {
    ActividadListScreen: undefined,
    ActividadFormScreen: {id:number}
}

interface Props {
}
const Stack = createNativeStackNavigator<RootStackParams>();

export const ActividadStack:FC <Props> = () => {
    const {isAuthenticated}  = useContext(AuthContext)
    
 return (  
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
        }}
        
    >
        {isAuthenticated&&(
            <>          
                 <Stack.Screen name="ActividadListScreen" component={ActividadListScreen} />
                <Stack.Screen name="ActividadFormScreen" component={ActividadFormScreen} /> 
            </>
        )}
            
    </Stack.Navigator>
 )
}