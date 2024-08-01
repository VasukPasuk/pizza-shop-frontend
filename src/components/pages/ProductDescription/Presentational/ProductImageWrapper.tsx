import {AiFillHeart} from "react-icons/ai";
import {FaStar} from "react-icons/fa";


interface IProductImageWrapper {
  image: string
  rating: number
}

function ProductImageWrapper(props: IProductImageWrapper) {
  const {image, rating} = props;
  return (
    <div className="product_description__image-box">
      <div
        className="product_description__image-box__upper-bar"
      >
        <div>
          {/*<AiOutlineHeart/>*/}
          <AiFillHeart/>
        </div>
        <div>
          <FaStar/>
          <span>
            {rating}
          </span>
        </div>
      </div>
      <img loading={"lazy"} width={350} height={350} src={`${import.meta.env.VITE_SERVER_URL}/${image}`} alt=""/>
    </div>
  )
}

export default ProductImageWrapper