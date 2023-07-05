import { FC, useEffect, useState } from 'react'
import { FlatList, RefreshControl, Text, View } from 'react-native'
import { Background } from '../../components/Background'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native';
import { CardList } from '../../components/cardList/CardList'
import { useFetchWithAuth } from '../../hooks/useFetchWithAuth'

interface Props {
}

export const LineaInvestigacionListScreen:FC <Props> = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const endpoints = "linea";
  let defaultData:[] = [];

    const [entities, setEntities] = useState(defaultData);

    console.log("Inicio  list linea")
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
        console.log("Disparo useEffect  list customer")
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
            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 }}>
            Listado de Linea Investigación
            </Text>
            <CardList screenName="LineaInvestigacionFormScreen" entities={entities} label="nombre" />         
            </Card>
            <Button title=' + ' additionalStyle='z-10 absolute bottom-2 right-0'  onClick={()=>navigation.navigate("LineaInvestigacionFormScreen" as never)} />
          </View>

          }
          keyExtractor={item => item}
      
      />
      
    </View>

 
 )
}