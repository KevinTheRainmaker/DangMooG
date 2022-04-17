import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constant.js";
import { Carousel } from "antd";

dayjs.extend(relativeTime);

function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  React.useEffect(function () {
    axios.get(`${API_URL}/products`).then((result) => {
      const products = result.data.products;
      setProducts(products);
    });

    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Carousel>
        {banners.map((banner, index) => {
          return (
            <div id="banner">
              <img src={`${API_URL}/${banner.imageUrl}`} />
            </div>
          );
        })}
      </Carousel>
      <h1>판매 상품 리스트</h1>
      <div id="product-list">
        {products.map(function (product) {
          return (
            <div className="product-card">
              {product.soldout === 1 && <div className="product-blur" />}
              {product.soldout === 1 && <div className="click-disable" />}
              <Link
                style={{ color: "inherit" }}
                className="product-link"
                to={`/products/${product.id}`}
              >
                <div>
                  <img
                    className="product-img"
                    src={`${API_URL}/${product.imageUrl}`}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">
                    {product.price.toLocaleString("ko-KR")}원
                  </span>
                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                    <span className="product-date">
                      {dayjs(product.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
