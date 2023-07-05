import { FC, useEffect, useState } from 'react'
import { FlatList, Image, RefreshControl, Text, View } from 'react-native'
import { Background } from '../../components/Background'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native';
import { CardList } from '../../components/cardList/CardList'
import { useFetchWithAuth } from '../../hooks/useFetchWithAuth'

interface Props {
}

export const ActividadListScreen:FC <Props> = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const endpoints = "actividad";
  let defaultData:[] = [];

    const [entities, setEntities] = useState(defaultData);

    console.log("Inicio  list Actividad")
    const getInitData = async () => {
        
        const { data, error } = await useFetchWithAuth(endpoints);
  console.debug(data)
        if (!error) {
            setEntities(data);
        } else {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("Disparo useEffect  list Actividad")
        getInitData();
    }, [refreshing])

    

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 1000);
    };

 return (
  
    <View className='' >
      <FlatList 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }  
      data={[""]}
          renderItem={({item}) => 
          <View id={item} className='flex-1 items-center'>
            <Card>
            {/* <Image
                source={require('./Actividad.png')}
                className='my-8 self-center'
        /> */}
             <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 }}>
                                               Listado de Actividad
            </Text>
            <CardList screenName="ActividadFormScreen" entities={entities} label="nombre" />     
            </Card>
            <Button title=' + ' additionalStyle='z-10 absolute bottom-5 right8-'  onClick={()=>navigation.navigate("ActividadFormScreen" as never)} />

          </View>

          }
          keyExtractor={item => item}
      
      />
      
    </View>

 
 )
}