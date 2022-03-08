import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let headers = {};

export const axiosInstance = axios.create({
  baseURL: 'https://base.url.api.here',
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use((response) => {
  if (
    response.status === 200 ||
    response.status === 204 ||
    response.status === 201
  ) {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  } else {
    return new Promise((resolve, reject) => {
      reject(response.data);
    });
  }
});
