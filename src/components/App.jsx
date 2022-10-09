import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContentLoader from 'react-content-loader';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from 'components/LoadMore/LoadMore';
import {ModalImg} from 'components/Modal/Modal'


axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29487133-26ae31273c20ec953386c6e64';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
    page: 1,
    imageName: '',
    isLoadingImage: false,
    showModal: false,
    largeImageURL: '',
  }

  handleFormSubmit = imageName => {
    this.setState({
      images: [],
      page: 1,
      imageName: imageName,
      largeImageURL: '',
    });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName || prevState.page !== this.state.page) {
    try {
        this.setState({isLoadingImage: true,})
    const response = await axios.get(`/?key=${KEY}&q=${this.state.imageName}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
    // console.log(response)
      this.setState({
      images: [...this.state.images, ...response.data.hits],
      isLoadingImage: false,
    })
    } catch (error) {
    
    }
    }
  }

  handleAddPage = page => {
    this.setState({ page });
  }

  handleSelectImg = img => {
    this.setState({ largeImageURL: img })
    
  }

  toggleModal = () => {
    this.setState(({showModal})=>({showModal: !showModal}))
  }
  

  render() {
    const { images, isLoadingImage, showModal, largeImageURL} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} onSelect={this.handleSelectImg} onModalClick={this.toggleModal} />
        {images.length > 0 && <LoadMore onClick={this.handleAddPage} />}
        
        {isLoadingImage && <ContentLoader 
            speed={1.5}
            width={1800}
            height={860}
            viewBox="0 0 1800 860"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
          <rect x="10" y="10" rx="0" ry="0" width="360" height="260" /> 
          <rect x="390" y="10" rx="0" ry="0" width="360" height="260" />
          <rect x="770" y="10" rx="0" ry="0" width="360" height="260" />
          <rect x="1150" y="10" rx="0" ry="0" width="360" height="260" />
          <rect x="10" y="280" rx="0" ry="0" width="360" height="260" />
          <rect x="390" y="280" rx="0" ry="0" width="360" height="260" />
          <rect x="770" y="280" rx="0" ry="0" width="360" height="260" />
          <rect x="1150" y="280" rx="0" ry="0" width="360" height="260" />
        </ContentLoader>}
        {showModal && <ModalImg onClose={this.toggleModal} imageURL={largeImageURL} />}
        
        <ToastContainer autoClose={2500} position="top-center"/>
      </>
    );
    
  }
  
}
