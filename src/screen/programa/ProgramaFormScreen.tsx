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
import { saveWithAuth } from '../../hooks/saveWithAuth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from './ProgramaStack';
interface Props extends NativeStackScreenProps<RootStackParams, 'ProgramaFormScreen'>{};

export const ProgramaFormScreen = ({route , navigation }: Props) => {

  const { control, handleSubmit, getValues, setValue, formState: { errors } } = useForm({
    defaultValues: {
      id: 0,
      titulo: '',
      carrera: '',
    }
  });
  let id:string = "0";
  if (route.params?.id!= undefined) {
    id = String(route.params.id);
  }
  
  const getInitData = async () => {
    if (!id || id=="0")
        return;
    const { data, error } = await useFetchWithAuth("programa/" + id);
    
    if (!error) {
        
        if (data.id!=0){
            setValue("id", data['id'])
            setValue("titulo", data['titulo'])
            setValue("carrera", data['carrera'])
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
          let endpoint = "programa";
          //entity['compania'] = {id: entity['compania']}
          console.log(entity)
          const { data, error } = await saveWithAuth(endpoint, id, entity);
          if (error) {
              console.log(error);
          } else {
              navigation.navigate("ProgramaListScreen")
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
        <Text className='text-xl text-center my-4'>Registro de Programa</Text>
        <Input name="titulo" label='titulo' control={control} />
        <Input name="carrera" label='carrera' control={control} />
        <Button
            title='Guardar'
            onClick={handleSubmit(onSubmit)}
          />
      </Card>

   </Background>
   
   </>
 )
}