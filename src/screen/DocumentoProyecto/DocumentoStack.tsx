import { FC, useContext, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../main/AuthContext';
import { DocumentoListScreen } from './DocumentoListScreen';
import { DocumentoFormScreen } from './DocumentoFormScreen';

export type RootStackParams = {
    DocumentoListScreen: undefined,
    DocumentoFormScreen: {id:number}
}

interface Props {
}
const Stack = createNativeStackNavigator<RootStackParams>();

export const DocumentoStack:FC <Props> = () => {
    const {isAuthenticated}  = useContext(AuthContext)
    
 return (  
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
        }}
        
    >
        {isAuthenticated&&(
            <>          
                <Stack.Screen name="DocumentoListScreen" component={DocumentoListScreen} />
                <Stack.Screen name="DocumentoFormScreen" component={DocumentoFormScreen} />
            </>
        )}
            
    </Stack.Navigator>
 )
}