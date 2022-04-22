import axios from 'axios';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

export const baseUrl = 'http://192.168.111.214:8090/';
//export const baseUrl = 'http://138.68.17.161:8080/unimor/';

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default instance;
