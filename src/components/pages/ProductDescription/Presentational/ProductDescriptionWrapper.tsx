import {IPizza} from "../../../../redux/services/pizzaApi.ts";
import {useState} from "react";
import {Size} from "../../../../typing/types.tsx";
import {SIZES} from "../../../../constants.ts";

interface IProductDescriptionWrapperProps {
  userId?: number
  pizza: IPizza
  categoryDescription: string | undefined
}

export default function ProductDescriptionWrapper({pizza, categoryDescription}: IProductDescriptionWrapperProps) {
  const {
    image,
    available,
    average_cooking_speed,
    category_name,
    country,
    hot_stage,
    popular,
    description,
    discount,
    name
  } = pizza;
  const [activeSizeTab, setActiveSizeTab] = useState<Size>("medium")
  return (
    <>
      <div className="product_description__text-box">
        <h1>
          {name}
        </h1>
        <div
          className="product_description__tags-box"
        >
          {!!discount && <div data-tag-type={"discount"} className="product_description__tag">
            {discount}
					</div>}
          {popular && <div data-tag-type={"popular"} className="product_description__tag">
            {popular}
					</div>}
          {!!hot_stage && <div data-tag-type={"hot"} className="product_description__tag">
            {hot_stage}
					</div>}
          {!!available && <div data-tag-type={"available"} className="product_description__tag">
            {available ? "Available" : "Not available"}
					</div>}

        </div>
        <div className="product_description__category-description-box">
          {categoryDescription}
        </div>
        <div className="product_description__product-description-box">
          {description}
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
        <div className="addbox__info-box">
          <span>Calories</span>
          <span>5 Cal</span>
        </div>
        <div className="addbox__info-box">
          <span>Weight</span>
          <span>507 gr.</span>
        </div>
        <div className="addbox__info-box">
          <span>Price</span>
          <span>8,5$</span>
        </div>
      </div>
    </>
  )
}