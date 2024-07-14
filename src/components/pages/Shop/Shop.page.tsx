import React, {useState} from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import Pagination from '../../ui/Pagination/Pagination.tsx';
import ShopCard from '../../ui/ShopCard/ShopCard.tsx';
import {PIZZA_DATA} from '../../../constants/test_data.ts';
import ToolbarPanel from '../../ui/ToolbarPanel/ToolbarPanel.tsx';

const categories: string[] = ['All', 'Seafood', 'Vegetarian', 'Meat', 'Spicy'];

function ShopPage(props) {
  const [currentCategory, setCurrentCategory] = useState<string>("All")
  return (
    <div>
      <ToolbarPanel/>
      <div className="category-tabs-bar">
        {categories.map((category) => (
          <Link
            to={`?category=${category.toLowerCase()}`}
            className="pill-tab-category"
            key={category}
            data-active-link={currentCategory === category}
            onClick={() => setCurrentCategory(prevState => category)}
          >
            {category}
          </Link>
        ))}

      </div>
      <div className="product-shop-cards__section">
        {PIZZA_DATA.slice(0, 8).map((pizza) => (
          <ShopCard
            category={pizza.category}
            size={pizza.size}
            price={pizza.price}
            name={pizza.name}
            inCart={pizza.inCart}
            flour={pizza.flour}
            discount={pizza.discount}
            popular={pizza.popular}
            key={pizza.name}
          />
        ))}
      </div>
      <Pagination/>
    </div>
  );
}

export default ShopPage;
