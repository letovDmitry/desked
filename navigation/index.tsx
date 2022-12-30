import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import axios from 'axios'
import { ColorSchemeName,  } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AuthorizationContainer from '../screens/AuthorizationContainer';
import { AsyncStorage } from 'react-native';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    card: '#4EA43D',
  },
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [ token, setToken ] = React.useState<string>('')
  const [ isAuthorized, setIsAuthorized ] = React.useState<boolean>(false)

  React.useEffect(() => {
    AsyncStorage.getItem('token').then(v => {
      setToken(v)
    })
    axios.get('https://desked.herokuapp.com/users/me', { headers: { token } }).then(res => setIsAuthorized(true)).catch(e => setIsAuthorized(false))

  })

  return (
    <Stack.Navigator>
      {isAuthorized ? <Stack.Screen name="Root" component={BottomTabNavigator}  options={{ headerShown: false }} /> : <Stack.Screen options={{ headerShown: false }} name="Authorization" component={AuthorizationContainer} />}
      {/*  */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        headerShown: false,
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: {backgroundColor: '#4EA43D', padding: 10, height: 55, borderTopColor: '#eee'} //#269643
      }}
      >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: '',
          tabBarIcon: ({ color }) => <AntDesign name="book" size={21} color={color} />,
        })}
      />
       <BottomTab.Screen
        name="TabTwo1"
        component={TabTwoScreen}
        options={() => ({
          
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={21} color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}
