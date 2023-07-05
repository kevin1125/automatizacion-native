import { FC } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import { ActividadListScreen } from '../src/screen/Actividad/ActividadListScreen';
import { ProgramaListScreen } from '../src/screen/Programas/ProgramaListScreen';
import { DocumentoListScreen } from '../src/screen/DocumentoProyecto/DocumentoListScreen';
import { LineaInvestigacionListScreen } from '../src/screen/LineaInvestigacion/LineaInvestigaciontListScreen';
import { LogOut } from '../src/screen/main/LogOut';
import { TabItem } from '../src/components/navbar/TabItem';


interface Props {
}

export const TabScreen:FC <Props> = () => {
  const Tab = createBottomTabNavigator();
  const { width, height } = Dimensions.get("window")
 return (
  <View   
     className="h-screen"
  >
    <Tab.Navigator 
          initialRouteName="SalesOrderScreen"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#1e40af',
            tabBarHideOnKeyboard: true,
            tabBarStyle: { 
              borderRadius: 20,
              marginBottom: 30
             }
          }}
          
        >
          <Tab.Screen
            name="Actividad List Screen"
            component={ActividadListScreen}
            options={{
              tabBarLabel: 'actividad',
              tabBarLabelStyle: {fontSize: 12},
              tabBarIcon: ({ focused }) => (
                <TabItem  require={require('./apreton-de-manos.png')} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="ProgramaList"
            component={ProgramaListScreen}
            options={{
              tabBarLabel: 'programa',
              tabBarIcon: ({ focused}) => (
                <TabItem  require={require('./tienda-alt.png')} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="DocumentoList"
            component={DocumentoListScreen}
            options={{
              tabBarLabel: 'documento',
              tabBarIcon: ({ focused }) => (
                <TabItem  require={require('./lista.png')} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="LineaInvestigacionList"
            component={LineaInvestigacionListScreen}
            options={{
              tabBarLabel: 'linea',
              tabBarIcon: ({ focused }) => (
                <TabItem  require={require('./caja-abierta.png')} focused={focused} />
              ),
            }}
          />  
          <Tab.Screen
            name="LogOut"
            component={LogOut}
            options={{
              tabBarLabel: 'Salir',
              tabBarIcon: ({ focused }) => (
                <TabItem  require={require('./salida.png')} focused={focused} />
              ),
            }}
          />      
        </Tab.Navigator>
    </View>
  )
}