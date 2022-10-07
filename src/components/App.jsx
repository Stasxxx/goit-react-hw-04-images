import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';


axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29487133-26ae31273c20ec953386c6e64';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
    imageName: '',
  }

  async componentDidMount() {
  try {
    const response = await axios.get(`/?key=${KEY}&q=${this.state.imageName}&page=1&image_type=photo&orientation=horizontal&per_page=12`)
    // console.log(response.data)
    this.setState({
      images: [...response.data.hits],
    })
  } catch (error) {
    
  }
  };

  handleFormSubmit = imageName => {
    console.log(imageName)
    if (this.state.imageName.trim() === '') {
      toast.error('Введіть імя картинки')
      return
    }
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <ToastContainer autoClose={2500} position="top-center"/>
      </>
    );
    
  }
  
}
