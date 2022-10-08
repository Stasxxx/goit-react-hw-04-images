import { ImGalleryItem, ImageGalleryItemImage } from 'components/ImageGalleryItem/ImageGallaryItem.styled';

export const ImageGalleryItem = ({ webformatUrl, alt}) => {
    return (
        <ImGalleryItem className="gallery-item">
            <ImageGalleryItemImage src={webformatUrl} alt={alt} />
        </ImGalleryItem>
    )
}