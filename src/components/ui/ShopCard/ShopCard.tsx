import React, {useCallback, useState} from 'react';
import './style.scss';
import { IShopCard } from '../../../typing/interfaces.tsx';
import { FaEllipsisVertical } from 'react-icons/fa6';
import Button from '../Button/Button.tsx';

function ShopCard(props: IShopCard) {
  const [activeActionMenu, setActiveActionMenu] = useState<boolean>(false);
  const onFaEllipsisVerticalClick = (event: React.MouseEvent<SVGElement>) => {
    setActiveActionMenu(prevState => !prevState)
  }

  const { key, category, size = 'medium', discount, flour, inCart, name, popular, price } = props;
  return (
    <div
      className="product-shop-cart"
      data-in-cart={Boolean(inCart)}
      key={key}
    >
      <div className="tags-and-action-box">
        <div className="product-shop-cart__tags-box">
          {!!discount && <span className="card-tag discount-tag">- {discount}%</span>}
          {popular && <span className="card-tag popular-tag"> popular </span>}
        </div>
        <FaEllipsisVertical
          className="product-shop-cart__ellipsis-action-trigger"
          onClick={onFaEllipsisVerticalClick}
        />
        {activeActionMenu && (
          <ul className="product-shop-cart__action-menu">
            <li className="product-shop-cart__action-menu__option">View</li>
            <li className="product-shop-cart__action-menu__option">
              <div className="product-shop-cart__action-menu__option__title">Select size</div>
              <ul className="product-shop-cart__action-menu__option__title__micropt-box">
                <li> Small</li>
                <li> Medium</li>
                <li> Big</li>
              </ul>
            </li>
            <li className="product-shop-cart__action-menu__option">Add to favourites</li>
            {inCart ? (
              <li className="product-shop-cart__action-menu__option"> Remove </li>
            ) : (
              <li className="product-shop-cart__action-menu__option"> Add to cart</li>
            )}
          </ul>
        )}
      </div>
      <img
        src="./pz-pozza-removebg-preview.png"
        alt="pizza-image"
        className="pizza-image"
        loading="lazy"
        width={125}
        height={125}
      />

      <ul className="select-size-box">
        {['small', 'medium', 'big'].map((val, idx) => (
          <>
            {!!idx && (<div className="select-separator">|</div>)}
            <li data-selected={size === val}> {val} </li>
          </>
        ))}
      </ul>

      <ul className="select-flour-box">
        <li data-selected={size === 'thick'}> thick</li>
        <div className="select-separator">|</div>
        <li data-selected={size === 'thin'}> thin</li>
      </ul>
      <div className="price-and-button-box">
        <div className="price-box"></div>
        {inCart ? (
          <Button variant={'warning'}>Remove</Button>
        ) : (
          <Button variant={'main'}> Add to cart</Button>
        )}
      </div>
    </div>
  );
}

export default ShopCard;
