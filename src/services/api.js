
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api/',
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('?results=5');
    return response.data.results;
  } catch (error) {
    console.error('API fetch error:', error);
    return [];
  }
};
