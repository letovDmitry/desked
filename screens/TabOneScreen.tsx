import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native'
import React from 'react';
import { StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../types';
import Editor from './Editor';
import PostScreen from './PostScreen';
import PostsScreen from './PostsScreen';
import SubjectsScreen from './SubjectsScreen';
import TopicsScreen from './TopicsScreen';

const FirstTabStack = createNativeStackNavigator()

const TabOneScreen = () => {
  return (
      <FirstTabStack.Navigator>
        <FirstTabStack.Screen options={{ headerTitle: 'Предметы', headerTitleStyle: { color: 'white' } }} name="Subjects" component={SubjectsScreen} />
        <FirstTabStack.Screen options={{ headerTitle: 'Темы', headerTitleStyle: { color: 'white' } }} name="Topics" component={TopicsScreen} />
        <FirstTabStack.Screen options={{ headerTitle: 'Ответы', headerTitleStyle: { color: 'white' } }} name="Posts" component={PostsScreen} />
        <FirstTabStack.Screen options={{ headerTitle: '' }} name="PostScreen" component={PostScreen} />
        <FirstTabStack.Screen options={{ headerTitle: 'Редактирование', headerTitleStyle: { color: 'white' } }} name="Editor" component={Editor} /> 
      </FirstTabStack.Navigator>
  );
}

export default TabOneScreen