import React from 'react'
import { View, Text, Image } from 'react-native';

interface PostScreenProps {
    navigation: any;
    route: any;
}

function PostScreen({ navigation, route }: PostScreenProps) {
    return (
        <View style={{ marginLeft: 16, marginVertical: 8 }}>
            <View style={{ marginVertical: 8 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{ route.params.title }</Text>
            </View>
            <View style={{ marginVertical: 8 }}>
                <Text style={{ fontSize: 13, fontWeight: '100' }}>{ route.params.author.username } · { route.params.author.fullname }</Text>
            </View>
            <View style={{ marginVertical: 8 }}>
                <Text style={{ fontSize: 15, }}>{ route.params.content}</Text>
            </View>
        </View>
    )
}

export default PostScreen
