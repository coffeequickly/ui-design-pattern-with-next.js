import axios from 'axios';

export const $axios = axios.create({
  baseURL: 'http://localhost:3000', // TODO: change to process.env.NEXT_BASE_URL
  headers: {
    'Content-Type': 'application/json',
  },
});
