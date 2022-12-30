import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import axios from 'axios'
import { storeData, retrieveData } from '../sevices/asyncStorage';


interface Props {
    navigation: any;
}

function Login({ navigation }: Props) {
    const [ login, setLogin ] = React.useState<string>('')
    const [ password, setPassword ] = React.useState<string>('')
    const [ error, setError ] = React.useState<string>('')

    const handleSaveToken = (token: string): void => {
        storeData('token', token)
    }

    const handleAuthentication = (): void => {
        authenticate(login, password)
    }

    const authenticate = (username: string, password: string): void => {
        axios.post('https://desked.herokuapp.com/auth/signin', {
            username,
            password
          })
          .then(response => {
            handleSaveToken(response.data.data.token)    
          })
          .catch(error => {
            console.error(error)
          });
    }

    return (
        <View style={{ marginTop: '20%', marginLeft: 20, marginRight: 24 }}>
            <Input
            onChangeText={text => setLogin(text)}
            value={login}
            placeholder='Логин'
            leftIcon={
                <AntDesign name="user" size={22} color="black" />
            }
            />
            <Input
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder='Пароль'
            errorMessage={error}
            secureTextEntry={true}
            leftIcon={
                <Feather name="key" size={22} color="black" />
            }
            />

            <Button
            buttonStyle={{ backgroundColor: '#4EA43D' }}
            title="Вход"
            onPress={handleAuthentication}
            />


            <Button
            titleStyle={{ color: '#4EA43D' }}
            title="Регистрация"
            onPress={() => navigation.push('Register')}
            type="clear"
            />
            
        </View>
    )
}

export default Login
 