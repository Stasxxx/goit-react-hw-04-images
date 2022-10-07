import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ images }) => {
    // console.log(images)
    return (
    <ul className="gallery">
            {images.map(image => <ImageGalleryItem key={image.id} webformatUrl={image.webformatURL} alt={image.tags} />)}
    </ul>
)
}
