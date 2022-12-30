import axios from "axios";
import { SubjectState } from "../store/ducks/subjects/contracts/state";
import { AsyncStorage } from 'react-native';

const token = AsyncStorage.getItem('token').then(v => v)

export const api = {
    fetchSubjects() {
        return axios.get('https://desked.herokuapp.com/subjects', { headers: { token: token._W }}).then((res) => res.data.data).catch(e => console.warn(e)) //https://trycode.pw/c/N7GEQ.json
    }
    
}