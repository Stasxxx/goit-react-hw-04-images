import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';


axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29487133-26ae31273c20ec953386c6e64';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
  }

  async componentDidMount() {
  try {
    const response = await axios.get(`/?key=${KEY}&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`)
    // console.log(response.data)
    this.setState({
      images: [...response.data.hits],
    })
  } catch (error) {
    
  }
}

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery images={this.state.images} />
      </>
    );
    
  }
  
}
