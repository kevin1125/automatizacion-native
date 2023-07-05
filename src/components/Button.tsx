import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    title:string,
    onClick?(): void,
    style?: "primary" | "secundary" | "info",
    additionalStyle?: string
}

export const Button:FC <Props> = ({title,onClick, style="primary",additionalStyle}) => {

  let className = "rounded-full mx-8 p-4 shadow-xl shadow-slate-800 uppercase";
  switch (style) {
    case "primary":
      className  = className + " bg-gradient-to-r from-cyan-500 to-blue-500"
    break;
    case "secundary":
      className  = className + " hover:bg-sky-200"
    break; 
    default:
      className  = className + " bg-gradient-to-b from-blue-700 to-sky-500 hover:bg-sky-400"
  }
  className = className +" " + additionalStyle;
 return (
   <>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} className={className} colors={['#7dd3fc', '#0ea5e9', '#2563eb']} >
    <TouchableOpacity 
      onPress={onClick}
      >
        <Text className='text-white text-center font-bold text-xl' >{title}</Text>
      </TouchableOpacity>
    </LinearGradient>

   </>
 )
}