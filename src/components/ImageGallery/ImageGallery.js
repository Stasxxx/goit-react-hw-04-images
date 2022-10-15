import PropTypes from 'prop-types'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImGallery } from "./ImageGallery.styled"


export const ImageGallery = ({ images, onSelect, onModalClick }) => {
    return (
    <ImGallery onClick={()=>onModalClick()}>
            {images.map(image => <ImageGalleryItem key={image.id} webformatUrl={image.webformatURL} alt={image.tags} largeImageURL={image.largeImageURL} onSelect={onSelect } />)}
    </ImGallery>
)
}

ImageGallery.propTypes = {
    onModalClick: PropTypes.func.isRequired
}