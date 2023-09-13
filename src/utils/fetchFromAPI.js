import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'ab185cb005msh48fd54ef193a7e4p118bc4jsndb8011c84d08',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  try{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
  }catch (error) {
    console.error(error);
  }
  
};