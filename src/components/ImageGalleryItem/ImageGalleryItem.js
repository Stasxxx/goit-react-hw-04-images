import { ImGalleryItem, ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGallaryItem.styled';

export const ImageGalleryItem = ({ webformatUrl, alt, largeImageURL, onSelect}) => {
    return (
        <ImGalleryItem onClick={() => onSelect(largeImageURL)}>
            <ImageGalleryItemImage src={webformatUrl} alt={alt} data-source={largeImageURL} />
        </ImGalleryItem>
    )
}