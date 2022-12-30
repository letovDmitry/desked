import * as React from 'react';
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AsyncStorage } from 'react-native';
import { Avatar } from 'react-native-elements';
import axios from 'axios';

const SecondTabStack = createNativeStackNavigator()

const TabTwo = () => {
  return (
    <SecondTabStack.Navigator>
      <SecondTabStack.Screen options={{ headerTitle: 'Профиль', headerTitleStyle: { color: 'white' } }} name="User" component={UserScreen} />
    </SecondTabStack.Navigator>
  )
}

const UserScreen = () => {
  const [ username, setUsername ] = React.useState('')
  const [ fullname, setFullname ] = React.useState('')
  const [ email, setEmail ] = React.useState('')

  React.useEffect(() => {
    AsyncStorage.getItem('token').then(v => {
      axios.get("https://desked.herokuapp.com/users/me", { headers: { token: v }}).then(res => {
        setUsername(res.data.data.username)
        setFullname(res.data.data.fullname)
        setEmail(res.data.data.email)
      }).catch(err => console.error(err))
    })
 
  })

  return (
    <View style={{ marginHorizontal: 125, marginTop: 30 }}>
        <Avatar
          size={100}
          rounded
          source={{ uri: 'https://img-fotki.yandex.ru/get/6823/224845352.e0/0_e1cce_d255e8f4_orig' }}
        />
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>{fullname} · {username}</Text>
          <Text style={{ width: 200 }}>{email}</Text>
          
        </View>
    </View>
  );
}

export default TabTwo

