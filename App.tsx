import { FC } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/screen/main/MainStack';
import { AuthProvider } from './src/screen/main/AuthContext';



interface Props {
}

const App:FC <Props> = () => {
 return (
   <>
    <NavigationContainer>
       <AuthProvider>  
      <MainStack/> 
        </AuthProvider> 
    </NavigationContainer>
   </>
 )
}

export default App;