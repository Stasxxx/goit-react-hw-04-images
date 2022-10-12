import PropTypes from 'prop-types';
import { ImGalleryItem, ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGallaryItem.styled';

export const ImageGalleryItem = ({ webformatUrl, alt, largeImageURL, onSelect}) => {
    return (
        <ImGalleryItem onClick={() => onSelect(largeImageURL)}>
            <ImageGalleryItemImage src={webformatUrl} alt={alt} data-source={largeImageURL} />
        </ImGalleryItem>
    )
}

ImageGalleryItem.propTypes = {
    webformatUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}