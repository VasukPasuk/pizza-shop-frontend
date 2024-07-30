import {useState} from 'react';
import './style.scss';
import Pagination from '../../ui/Pagination/Pagination.tsx';
import ShopCard from '../../ui/ShopCard/ShopCard.tsx';
import {PIZZA_DATA} from '../../../constants/test_data.ts';
import ToolbarPanel from '../../ui/ToolbarPanel/ToolbarPanel.tsx';
import CategoriesTabPanel from "../../ui/CategoriesTabPanel/CategoriesTabPanel.tsx";

const categories: string[] = ['All', 'Seafood', 'Vegetarian', 'Meat', 'Spicy'];

function ShopPage() {
  const [currentCategory, setCurrentCategory] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(26)
  console.log("Current page ", currentPage)
  console.log("Total page ", totalPages)
  return (
    <div id="shop-page__container">
      <ToolbarPanel/>
      <CategoriesTabPanel
        categories={categories}
        currentCategory={currentCategory}
        setCategoryFn={setCurrentCategory}
      />
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
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={totalPages}/>
    </div>
  );
}

export default ShopPage;
