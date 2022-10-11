import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loder } from './ContentLoder/ContentLoder';
// import ContentLoader from 'react-content-loader';
// import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { ModalImg } from 'components/Modal/Modal';
import { addImages } from 'components/services/api';

// axios.defaults.baseURL = 'https://pixabay.com/api';
// const KEY = '29487133-26ae31273c20ec953386c6e64';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
    page: 1,
    imageName: '',
    isLoadingImage: false,
    showModal: false,
    largeImageURL: '',
    totalImages: '',
  }

  handleFormSubmit = imageName => {
    this.setState({
      images: [],
      page: 1,
      imageName: imageName,
      largeImageURL: '',
      error: false,
    });
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.imageName !== this.state.imageName || prevState.page !== this.state.page) {
    try {
      this.setState({ isLoadingImage: true, })
      const images = await addImages(this.state.imageName, this.state.page)
      // console.log(images)
    // const response = await axios.get(`/?key=${KEY}&q=${this.state.imageName}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`)
      this.setState({
      images: [...this.state.images, ...images.hits],
      isLoadingImage: false,
      totalImages: images.totalHits,
    })
    } catch (error) {
      this.setState({ error: true});
      console.log(error);
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
    let lengthGalleryImg = this.state.images.length
    // console.log(this.hideButton()) 
    const { images, isLoadingImage, showModal, largeImageURL, error, totalImages} = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && (
          <p>
            Щось трапилось :( Перезавантажте сторінку та спробуйте ще
            раз.
          </p>
        )}
        <ImageGallery images={images} onSelect={this.handleSelectImg} onModalClick={this.toggleModal} />
        {images.length > 0 && lengthGalleryImg !== totalImages && <LoadMore onClick={this.handleAddPage} />}
        
        {isLoadingImage && <Loder/>}
        {showModal && <ModalImg onClose={this.toggleModal} imageURL={largeImageURL} />}
        
        <ToastContainer autoClose={2500} position="top-center"/>
      </>
    );
    
  }
  
}
