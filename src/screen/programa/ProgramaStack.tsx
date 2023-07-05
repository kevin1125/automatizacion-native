import { FC, useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../main/AuthContext';
import { ProgramaListScreen } from './ProgramaListScreen';
import { ProgramaFormScreen } from './ProgramaFormScreen';




export type RootStackParams = {
    ProgramaListScreen: undefined,
    ProgramaFormScreen: {id:number}
}
interface Props {
}
const Stack = createNativeStackNavigator<RootStackParams>();

export const ProgramaStack:FC <Props> = () => {
    const {isAuthenticated}  = useContext(AuthContext)
    
 return (  
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
        }}
        
    >
        {isAuthenticated&&(
            <>          
                 <Stack.Screen name="ProgramaListScreen" component={ProgramaListScreen} />
                <Stack.Screen name="ProgramaFormScreen" component={ProgramaFormScreen} /> 
            </>
        )}
            
    </Stack.Navigator>
 )
}