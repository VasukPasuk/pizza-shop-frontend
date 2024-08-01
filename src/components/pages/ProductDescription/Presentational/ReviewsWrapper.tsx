import {IReview} from "../../../../redux/services/pizzaApi.ts";


interface IReviewsWrapper {
  reviews: IReview[] | undefined;
}

function ReviewsWrapper(props: IReviewsWrapper) {
  const {reviews} = props;
  return (
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
        {!reviews?.length && (
          <div className="no-comments-wrapper">
            No comments
          </div>
        )}
      </section>
    </div>
  )
}

export default ReviewsWrapper