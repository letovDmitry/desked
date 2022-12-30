import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import axios from 'axios'

interface Props {
    navigation: any;
}

function Register({ navigation }: Props) {
    const [ login, setLogin ] = React.useState<string>('')
    const [ email, setEmail ] = React.useState<string>('')
    const [ fullname, setFullname ] = React.useState<string>('')
    const [ password, setPassword ] = React.useState<string>('')
    const [ password2, setPassword2 ] = React.useState<string>('')
    const [ error, setError ] = React.useState<string>('')

    const handleAuthentication = (): void => {
        authenticate(login, password)
    }

    const authenticate = (username: string, password: string): void => {
        axios.post('https://desked.herokuapp.com/auth/signup', {
            username,
            password,
            email,
            fullname,
            password2
          })
          .then(response => {
            navigation.push('Login')    
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
            onChangeText={text => setFullname(text)}
            value={fullname}
            placeholder='Имя и фамилия'
            leftIcon={
                <MaterialIcons name="drive-file-rename-outline" size={23} color="black" />
            }
            />
            <Input
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder='E-mail'
            leftIcon={
                <Entypo name="email" size={21} color="black" />
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
            <Input
            onChangeText={text => setPassword2(text)}
            value={password2}
            placeholder='Введите пароль еще раз'
            errorMessage={error}
            secureTextEntry={true}
            leftIcon={
                <Feather name="key" size={22} color="black" />
            }
            />

            <Button
            buttonStyle={{ backgroundColor: '#4EA43D' }}
            title="Регистрация"
            onPress={handleAuthentication}
            />


            <Button
            titleStyle={{ color: '#4EA43D' }}
            title="Вход"
            onPress={() => navigation.push('Login')}
            type="clear"
            />
            
        </View>
    )
}

export default Register
