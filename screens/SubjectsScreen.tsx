import React from 'react';
import { ScrollView, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ListItem, Avatar } from 'react-native-elements'


import { fetchSubjectsData } from '../store/ducks/subjects/actionCreators';
import { selectIsSubjectsLoading, selectSubjectsData } from '../store/ducks/subjects/selectors';
import { RootTabScreenProps } from '../types';

const SubjectsScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const subjects = useSelector(selectSubjectsData)
  const isSubjectsLoading = useSelector(selectIsSubjectsLoading)
  React.useEffect(() => {
    dispatch(fetchSubjectsData())
  }, [dispatch])
  return (
    <ScrollView>
        { subjects?.map(i => {
          return (
            <ListItem onPress={() => navigation.push('Topics', {name: i})} bottomDivider>
              <Avatar source={{uri: "https://cdn.iconscout.com/icon/free/png-256/school-1782416-1512436.png"}} />
              <ListItem.Content>
                <ListItem.Title>{i}</ListItem.Title>
                {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
              </ListItem.Content>
            <ListItem.Chevron size={26.5} />
          </ListItem>

          )

        })}
    
      
    </ScrollView>
  );
}

export default SubjectsScreen