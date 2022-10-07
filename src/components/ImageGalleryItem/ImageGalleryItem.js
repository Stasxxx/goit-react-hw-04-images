
export const ImageGalleryItem = ({ webformatUrl, alt}) => {
    return (
        <li className="gallery-item">
            <img src={webformatUrl} alt={alt} />
        </li>
    )
}