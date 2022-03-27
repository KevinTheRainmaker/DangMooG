import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://27da2dc2-ec1b-421c-a777-d9405b100499.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log("통신 결과: ", result);
        const products = result.data.products;
        setProducts(products);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <image src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner.png" />
        </div>
        <h1>판매 상품 리스트</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link className="product-link" to={"/product"}>
                  <div>
                    <img className="product-img" src={product.imageUrl} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
