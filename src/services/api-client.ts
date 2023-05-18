import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'bcb1062bd0844b0a9106474bdb4b4ba6',
  },
});
