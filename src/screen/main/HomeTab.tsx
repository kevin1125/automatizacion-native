import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from './Login';
import { LogOut } from './LogOut';
import { ActividadStack } from '../Actividad/ActividadStack';
import { ActividadFormScreen } from '../Actividad/ActividadFormScreen';
import { TabScreen } from '../../../navigator/TabScreen';
import { NavBar } from '../../components/navbar/NavBar';
import { LineaInvestigacionStack } from '../LineaInvestigacion/LineaInvestigacionStack';
import { DocumentoStack } from '../DocumentoProyecto/DocumentoStack';
import { ProgramaStack } from '../programa/ProgramaStack';


interface Props {}


const Tab = createBottomTabNavigator();

export const HomeTab: FC<Props> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
          <Tab.Screen name="LineaInvestigacion" component={LineaInvestigacionStack} />
          <Tab.Screen name="Actividad" component={ActividadStack} />  
          <Tab.Screen name="programa" component={ProgramaStack} />  
          <Tab.Screen name="documento" component={DocumentoStack} />   
       <Tab.Screen name="LogOut" component={LogOut} />  
    </Tab.Navigator>
  );
};
