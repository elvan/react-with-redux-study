import axios from 'axios';

import youtubeConfig from '../config/youtube-config';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: youtubeConfig.key,
  },
});
