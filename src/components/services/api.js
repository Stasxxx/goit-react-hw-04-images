import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29487133-26ae31273c20ec953386c6e64';

export const addImages = async (imageName, page) => {
    const response = await axios.get(`/?key=${KEY}&q=${imageName}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data.hits;
};

