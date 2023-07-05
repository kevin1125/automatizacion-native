import React, { FC } from 'react';
import { View } from 'react-native'

type CardType = {
    children: JSX.Element | JSX.Element[],
    addClassName?: string
}

export const CardItem:FC<CardType> = ({ children , addClassName}) => {

    let className = 'w-5/6 p-4 m-4 bg-white rounded-xl border border-slate-300';
    className = className + " " + addClassName;
 return (
   <>
   <View className={className}>
    {children}
   </View>
   </>
 )
}