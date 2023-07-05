import { FC, useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Login';
import { HomeTab } from './HomeTab';
import { AuthContext } from './AuthContext';

interface Props {
}

const Stack = createNativeStackNavigator();

export const MainStack:FC <Props> = () => {

  const { isAuthenticated } = useContext(AuthContext);

 return (
    <Stack.Navigator
    screenOptions={
      {
        headerShown: false
      }
    }
    >
      {isAuthenticated==false?(
        <Stack.Screen name="Login" component={Login} />
      ):(
        <Stack.Screen name="HomeTab" component={HomeTab} />
      )}
      
      
    </Stack.Navigator>
 )
}