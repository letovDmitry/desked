import { AsyncStorage } from 'react-native';


export const storeData = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(
        key,
        value
      );
    } catch (error) {
      
    }
};

// export const retrieveData = (key: string): string => {  
//     return AsyncStorage.getItem(key).then(v => v); 
//   };