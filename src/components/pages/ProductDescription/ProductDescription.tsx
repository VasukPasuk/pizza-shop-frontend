import {Link, useParams} from "react-router-dom";
import './style.scss';
import {useState} from "react";
import {Size} from "../../../typing/types.tsx";
import {SIZES} from "../../../constants.ts";
import {FaHeart, FaStar} from "react-icons/fa";


function ProductDescription() {
  const {name} = useParams()
  const [reviews, setReviews] = useState([])
  const [activeSizeTab, setActiveSizeTab] = useState<Size>("medium")
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
        <div className="product_description__image-box">
          <div
            className="product_description__image-box__upper-bar"
          >
            <div>
              <FaHeart/>
            </div>
            <div>
              <FaStar/>
              <span>
                4,5
              </span>
            </div>
          </div>
          <img loading={"lazy"} width={350} height={350} src="/pz-pozza-removebg-preview.png" alt=""/>
        </div>
        <div className="product_description__text-box">
          <h1>
            Magneritana
          </h1>
          <div
            className="product_description__tags-box"
          >
            <div data-tag-type={"discount"} className="product_description__tag">
              -5%
            </div>
            <div data-tag-type={"popular"} className="product_description__tag">
              Popular
            </div>
            <div data-tag-type={"hot"} className="product_description__tag">
              Low | Medium | High
            </div>
            <div data-tag-type={"available"} className="product_description__tag">
              Available | Not available
            </div>

          </div>
          <div className="product_description__category-description-box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>
          <div className="product_description__product-description-box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
        <div className="product_description__tabs-box">
          {SIZES.map((size) => (
            <div
              className="product_description__select-size-tab"
              data-active-tab={activeSizeTab === size}
              onClick={() => setActiveSizeTab(size.toLowerCase() as Size)}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </div>
          ))}
        </div>
        <div className="product_description__size-additional-box">
          <div>
            <span>Calories</span>
            <span>5 Cal</span>
          </div>
          <div>
            <span>Weight</span>
            <span>507 gr.</span>
          </div>
          <div>
            <span>Price</span>
            <span>8,5$</span>
          </div>
        </div>
        <div className="product_description__reviews-box">
          <section className="product_description__reviews-box__upper-bar">
            <div className="product_description__reviews-box__upper-bar__label">
              Reviews
            </div>
            <div className="product_description__reviews-box__upper-bar__buttons-group">
              <div>
                Latest
              </div>
              <div>
                Popular
              </div>
            </div>
          </section>
          <section className="product_description__reviews-box__create-comment-form">
            <textarea name="" id="" rows={6} inputMode={"email"}>

            </textarea>
            <ul className="product_description__reviews-box__create-comment-form__buttons">
              <li>
                Post review
              </li>
              <li>
                Clear
              </li>
            </ul>
          </section>
          <section className="product_description__reviews-box__comments-container">
            {!reviews.length && (
              <div className="no-comments-wrapper">
                No comments
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProductDescription