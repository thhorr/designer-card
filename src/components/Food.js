import "./food.css";

function Food({
  image,
  name,
  description,
  calorie,
  date,
  celsius,
  price,
  discountrate,
  icon1,
  icon2,
}) {
  return (
    <div className="container">
      <div className="image-container">
        <img className="image" src={image} alt={name} />
      </div>
      <div className="product-details">
        <div className="product-one">
          <h1 className="product-name">{name}</h1>
          <div className="product-icon">
            <img className="product-icon-one" src={icon1} alt="icon1" />
            <img className="product-icon-two" src={icon2} alt="icon2" />
          </div>
        </div>
        <br />
        <div className="product-two">
          <p className="product-desc">{description}</p>
        </div>
        <div className="product-three">
          <p className="product-calorie">{calorie} Cal </p>
          <p className="product-date">P/F/C: {date}</p>
          <p className="product-celsius">{celsius} °c</p>
        </div>
        <div className="product-four">
          <h2 className="product-price">${price} </h2>
          <h2 className="product-discount">${discountrate}</h2>
          <button className="product-order">ORDER</button>
        </div>
      </div>
    </div>
  );
}

export default Food;
