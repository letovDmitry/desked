import React from "react";
import { Text, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, View, TextInput } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import axios from "axios";

const Editor = ({ navigation, route }) => {
    const [ topicName, setTopicName ] = React.useState('')
    const [ postName, setPostName ] = React.useState('')
    const [ postContent, setPostContent ] = React.useState('')
    const token = AsyncStorage.getItem('token').then(v => v)
	const onSubmitTopic = () => {
        axios.post("https://desked.herokuapp.com/topics/create", { name: topicName, subject: route.params.subject, posts: [] }, { headers: { token: token._W }}).then((res) => {
            navigation.goBack()
        })
    }
    const onSubmitPost = async () => {
        axios.post("https://desked.herokuapp.com/topics/create_post", { id: route.params.id, title: postName, content: postContent }, { headers: { token: token._W }}).then((res) => {
            navigation.goBack()
        })

    }
    if (route.params.mode == "topics"){
        return (
            <View>

                <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 55, marginTop: 20}}>Введите название темы</Text>
                <TextInput value={topicName} style={{ marginLeft: 50, marginTop: 20, height: 150}} onChangeText={text => setTopicName(text)} />
                <Button
                title="Принять"
                onPress={onSubmitTopic}
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                raised
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 72,
                  marginVertical: 10,
                }}
              />
            </View>
        );
    }
    if (route.params.mode == "posts"){
        return (
            <View>

                <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 55, marginTop: 20}}>Введите содержание поста</Text>
                <TextInput value={postName} placeholder="Заглавие поста" style={{ marginLeft: 50, marginTop: 20, height: 20}} onChangeText={setPostName} />
                <TextInput value={postContent} placeholder="Содержание поста" style={{ marginLeft: 50, marginTop: 20, height: 150}} onChangeText={setPostContent} />
                <Button
                title="Принять"
                onPress={onSubmitPost}
                buttonStyle={{
                  borderColor: 'rgba(78, 116, 289, 1)',
                }}
                type="outline"
                raised
                titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 72,
                  marginVertical: 10,
                }}
              />
            </View>
        );
    }
};

export default Editor;