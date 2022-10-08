import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImGallery } from "./ImageGallery.styled"


export const ImageGallery = ({ images }) => {
    // console.log(images)
    return (
    <ImGallery>
            {images.map(image => <ImageGalleryItem key={image.id} webformatUrl={image.webformatURL} alt={image.tags} />)}
    </ImGallery>
)
}
