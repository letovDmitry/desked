import React from 'react'
import axios from "axios";
import { View, Text } from '../components/Themed'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView, TouchableOpacity } from 'react-native';
import { SpeedDial } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

interface Topic {
    subject: string;
    name: string;
    id: string;
}

const TopicsScreen = ({ navigation, route }) => {
    const [topics, setTopics] = React.useState<Topic[]>([])
    const [open, setOpen] = React.useState(false);

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.push('Editor', { mode: 'topics', subject: route.params.name })}><Text style={{ color: 'white', fontSize: 30 }}>+</Text></TouchableOpacity>
        ),
      });
  }, [navigation]);
    

    React.useEffect(() => {
        axios.get(`https://desked.herokuapp.com/topics/${route.params.name}`).then(res => {
            setTopics(res.data.data)
        })
    })

    return (
      <View>
        <ScrollView>
          { topics.map(i => {
            return (
              <ListItem onPress={() => navigation.push('Posts', {id: i.id})} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{i.name}</ListItem.Title>
                  <ListItem.Subtitle>{i.subject}</ListItem.Subtitle>
                </ListItem.Content>
              <ListItem.Chevron size={26.5} />
            </ListItem>

            )

          })}
          
            
          
            
          </ScrollView>  
      </View>
        
    )
}

export default TopicsScreen
