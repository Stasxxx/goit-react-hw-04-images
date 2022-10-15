import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loder } from './ContentLoder/ContentLoder';
// import ContentLoader from 'react-content-loader';
// import axios from 'axios';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from 'components/LoadMore/LoadMore';
import { ModalImg } from 'components/Modal/Modal';
import { addImages } from 'components/services/api';

// axios.defaults.baseURL = 'https://pixabay.com/api';
// const KEY = '29487133-26ae31273c20ec953386c6e64';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [imageName, setImageName] = useState('');
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [largeImageURL, setlargeImageURL] = useState('');
  const [totalImages, setTotalImages] = useState('');
  const [error, setError] = useState(false);

  
  const handleFormSubmit = imageName => {
    setImages([]);
    setPage(1);
    setImageName(imageName);
    setlargeImageURL('');
    setError(false);
  };

useEffect(() => {
 
  async function fatchImages() {
    if (imageName === '') {
      return;
    }
      try {
        
        const images = await addImages(imageName, page);
        if (images.hits.length === 0) {
          return toast.error(':( Нічого не знайдено. Спробуйте ще раз ');
        }
        setIsLoadingImage(true);
        setImages(state => ([...state, ...images.hits]));
        
        setIsLoadingImage(false);
        setTotalImages(images.totalHits);
      
      } catch (error) {
        setError(true);
        console.log(error);
      }
  }


  fatchImages()
}, [imageName, page])

  

  const handleAddPage = page => {
    setPage(page);
  }

  const handleSelectImg = img => {
    setlargeImageURL(img);
    
  }

  const toggleModal = () => {
    setshowModal(showModal => !showModal );
  }
  
    let lengthGalleryImg = images.length
    
    return (
      <>
        <Searchbar onSubmit={handleFormSubmit} />
        {error && (
          <p>
            Щось трапилось :( Перезавантажте сторінку та спробуйте ще
            раз.
          </p>
        )}
        <ImageGallery images={images} onSelect={handleSelectImg} onModalClick={toggleModal} />
        {images.length > 0 && lengthGalleryImg !== totalImages && <LoadMore onClick={handleAddPage} />}
        
        {isLoadingImage && <Loder/>}
        {showModal && <ModalImg onClose={toggleModal} imageURL={largeImageURL} />}
        
        <ToastContainer autoClose={2500} position="top-center"/>
      </>
    );
}
