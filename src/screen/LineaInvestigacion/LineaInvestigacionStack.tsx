import { FC, useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../main/AuthContext';
import { LineaInvestigacionListScreen } from './LineaInvestigaciontListScreen';
import { LineaInvestigacionFormScreen } from './LineaInvestigacionFormScreen';

// import { ActividadListScreen } from './ActividadListScreen';
// import { ActividadFormScreen } from './ActividadFormScreen';

export type RootStackParams = {
    LineaInvestigacionListScreen: undefined,
    LineaInvestigacionFormScreen: {id:number}
}
interface Props {
}
const Stack = createNativeStackNavigator<RootStackParams>();

export const LineaInvestigacionStack:FC <Props> = () => {
    const {isAuthenticated}  = useContext(AuthContext)
    
 return (  
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
        }}
        
    >
        {isAuthenticated&&(
            <>          
                 <Stack.Screen name="LineaInvestigacionListScreen" component={LineaInvestigacionListScreen} />
                <Stack.Screen name="LineaInvestigacionFormScreen" component={LineaInvestigacionFormScreen} /> 
            </>
        )}
            
    </Stack.Navigator>
 )
}