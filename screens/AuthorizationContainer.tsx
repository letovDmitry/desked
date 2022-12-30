import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './Login'
import Register from './Register'

const AuthorizationStackNavigator = createNativeStackNavigator()

function AuthorizationContainer() {

    return (
        <AuthorizationStackNavigator.Navigator>
            <AuthorizationStackNavigator.Screen options={{ headerTitle: 'Вход', headerTitleStyle: { color: 'white' } }} name="Login" component={Login} />
            <AuthorizationStackNavigator.Screen options={{ headerTitle: 'Регистрация', headerTitleStyle: { color: 'white' } }} name="Register" component={Register} />
        </AuthorizationStackNavigator.Navigator>    
    )
}

export default AuthorizationContainer
