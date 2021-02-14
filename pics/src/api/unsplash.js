import axios from 'axios';

import unsplashConfig from '../config/unsplash-config';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${unsplashConfig.accessKey}`,
  },
});
