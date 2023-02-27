import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImg} = props
  const {thumbnailUrl, id} = imageDetails

  const onClickImage = () => {
    onClickImg(id)
  }

  return (
    <li className="image-item">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        className="image"
        onClick={onClickImage}
      />
    </li>
  )
}

export default ImageItem
