import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import {LoadMore} from 'components/LoadMore/LoadMore'


axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29487133-26ae31273c20ec953386c6e64';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
    page: 1,
    imageName: '',
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      try {
    const response = await axios.get(`/?key=${KEY}&q=${this.state.imageName}&${this.state.page}=1&image_type=photo&orientation=horizontal&per_page=12`)
    // console.log(response.data)
    this.setState({
      images: [...response.data.hits],
    })
    } catch (error) {
    
    }
    }
  }
  

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  

  

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length >0 && <LoadMore />}
        
        <ToastContainer autoClose={2500} position="top-center"/>
      </>
    );
    
  }
  
}
