import { FC, useEffect } from 'react'
import { Text } from 'react-native'
// import { NavBar } from '../../components/navbar/NavBar'
import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { useFetchWithAuth } from '../../hooks/useFetchWithAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './LineaInvestigacionStack';
import { saveWithAuth } from '../../hooks/saveWithAuth';
interface Props extends NativeStackScreenProps<RootStackParams, 'LineaInvestigacionFormScreen'>{};

export const LineaInvestigacionFormScreen = ({route , navigation }: Props) => {

  const { control, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    defaultValues: {
      id: 0,
      nombre: '',
      codigo: '',
    }
  });
  let id:string = "0";
  if (route.params?.id!= undefined) {
    id = String(route.params.id);
  }
  
  const getInitData = async () => {
    if (!id || id=="0")
        return;
    const { data, error } = await useFetchWithAuth("linea/" + id);
    
    if (!error) {
        
        if (data.id!=0){
            setValue("id", data['id'])
            setValue("nombre", data['nombre'])
            setValue("codigo", data['codigo'])
        }

    } else {
        console.log(error)
    }
}


    useEffect(() => {
        getInitData();
    }, [])

    const onSubmit = async (entity: any) => {
      try {
          let endpoint = "linea";
          //entity['compania'] = {id: entity['compania']}
          console.log(entity)
          const { data, error } = await saveWithAuth(endpoint, id, entity);
          if (error) {
              console.log(error);
          } else {
              navigation.navigate("LineaInvestigacionListScreen")
          }
      } catch (e) {
          console.log("Post error:");
          console.table(e);
      }
    }

 return (
   <>
   <Background >
      <Card>
        <Text className='text-xl text-center my-4'>Registro de Linea Investigacion</Text>
        <Input name="nombre" label='Nombre' control={control} />
        <Input name="codigo" label='codigo' control={control} />
        <Button
            title='Guardar'
            onClick={handleSubmit(onSubmit)}
          />
      </Card>

   </Background>
   
   </>
 )
}