import axios, {AxiosInstance} from 'axios';
import {Platform} from 'react-native';

export interface FetchGamesParams {
  searchText: string;
}

class HttpService {
  baseURL: string;
  IP: string;
  instance: AxiosInstance;

  constructor() {
    this.IP = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
    this.baseURL = `http://${this.IP}:3000`;
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async fetchGames(params: FetchGamesParams): Promise<any> {
    try {
      const {searchText} = params;

      const api = new HttpService();

      const response = await api.instance.get<any, any>('/games', {
        params: {
          title_like: searchText,
        },
      });
      return response.data;
    } catch (e) {}
  }
}

export default HttpService;
