// axiosInstance.ts
import axios, { AxiosInstance } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  // You can add other Axios configurations here if needed
})

export default axiosInstance
