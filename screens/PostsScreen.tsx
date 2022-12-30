import React from 'react'
import axios from "axios";
import { View, Text } from '../components/Themed'
import { ListItem, Avatar, Card } from 'react-native-elements'
import { ScrollView, TouchableOpacity } from 'react-native';
import { SpeedDial } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

interface Author {
    _id: string;
    email: string;
    fullname: string;
    username: string;
    confirmed: boolean;

}

interface Post {
    id: string;
    author: Author;
    title: string;
    content: string;
}

function PostsScreen({ navigation, route }) {
    const [posts, setPosts] = React.useState<Post[]>([])
    const [open, setOpen] = React.useState(false);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.push('Editor', { mode: 'posts', id: route.params.id })}><Text style={{ color: 'white', fontSize: 30 }}>+</Text></TouchableOpacity>
          ),
        });
    }, [navigation]);
    

    React.useEffect(() => {
        axios.get(`https://desked.herokuapp.com/topics/posts/${route.params.id}`).then(res => {
            setPosts(res.data.data)
        })
    })
    return (
        <View>

            <ScrollView>
                { posts?.map(i => {
                    return (
                        <TouchableOpacity onPress={() => navigation.push("PostScreen", { author: i.author, title: i.title, content: i.content })}>
                            <Card>
                                <Card.Title>{i.title}</Card.Title>
                                <Text>{i.author.username}: {i.author.fullname}</Text>
                                <Card.Divider/>
                                <Card.Image source={{ uri: 'https://img-fotki.yandex.ru/get/6823/224845352.e0/0_e1cce_d255e8f4_orig' }} />
                                    <Text style={{marginBottom: 10}}>
                                        {i.content}
                                    </Text>
                            </Card>
                        </TouchableOpacity>
                        )

                    })}
                
            </ScrollView>
        </View>
    )
}

export default PostsScreen
