import {Link, useParams} from "react-router-dom";
import './style.scss';
import {useState} from "react";
import {Size} from "../../../typing/types.tsx";
import {SIZES} from "../../../constants.ts";
import {FaHeart, FaStar} from "react-icons/fa";
import {IPizza, useGetPizzaWithQuery} from "../../../redux/services/pizzaApi.ts";
import {AiFillHeart} from "react-icons/ai";
import ProductDescriptionWrapper from "./Presentational/ProductDescriptionWrapper.tsx";
import ProductImageWrapper from "./Presentational/ProductImageWrapper.tsx";
import ReviewsWrapper from "./Presentational/ReviewsWrapper.tsx";


const ErrorComponent = () => (
  <div className="product_description__error-container">
    Error...
  </div>
);

const LoadingComponent = () => (
  <div className="product_description__loading-container">
    Loading...
  </div>
);

function ProductDescription() {
  const {name} = useParams()
  const {data, error, isLoading} = useGetPizzaWithQuery({name: name as string, category: true, Review: true});

  if (error || !data) {
    return <ErrorComponent/>
  }
  if (isLoading) {
    return <LoadingComponent/>
  }

  const {category, reviews, ...pizza} = data;
  console.log(data)
  return (
    <section id="product_description">

      <div className="product_description__upper-bar">
        <Link to="/shop">
          Return to shop
        </Link>
        <div className="product_description__upper-bar__buttons-group">
          <button>
            Add to cart
          </button>
          <button>
            Add to favourites
          </button>
        </div>
      </div>
      <div className="product_description__content-box">
        <ProductImageWrapper
          image={pizza.image}
          rating={pizza.rating}
        />
        <ProductDescriptionWrapper
          pizza={pizza}
          categoryDescription={category?.description}
        />
        <ReviewsWrapper
          reviews={reviews}
        />
      </div>
    </section>
  )
}

export default ProductDescription



