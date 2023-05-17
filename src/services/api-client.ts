import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '5564aaa7e1a64151833b9739bdf998a9',
  },
});
