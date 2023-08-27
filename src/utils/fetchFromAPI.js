import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';
const options = {
    url: BASE_URL,
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '2187ab2ef8msh8745446ceb89f1dp19767ejsnad8ab1e99dc6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };