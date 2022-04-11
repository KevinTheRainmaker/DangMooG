import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Upload,
  message,
} from "antd";
import { useState } from "react";
import "./index.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../config/constant.js";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null);
  const history = useHistory();
  const onSubmit = (values) => {
    axios
      .post(`${API_URL}/products`, {
        name: values.name,
        price: parseInt(values.price),
        seller: values.seller,
        description: values.description,
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        message.success(`product is successfully uploaded`);
        history.replace("/");
      })
      .catch((error) => {
        console.log(error);
        message.error(`${error.message}`);
      });
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="productUpload" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            onChange={onChangeImage}
            showUploadList={false}
          >
            {imageUrl ? (
              <img id="uploaded-img" src={`${API_URL}/${imageUrl}`} />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" />
                <span>상품의 이미지를 업로드해주세요.</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[
            {
              required: true,
              message: "판매하고자 하는 상품의 이름을 입력해주세요.",
            },
          ]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품의 이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="seller"
          label={<div className="upload-label">판매자 명</div>}
          rules={[
            {
              required: true,
              message: "판매자의 이름을 입력해주세요.",
            },
          ]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="판매자의 이름을 알려주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[
            {
              required: true,
              message: "상품 가격을 설정해주세요.",
            },
          ]}
        >
          <InputNumber
            prefix="₩"
            formatter={(value) =>
              `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            className="upload-price"
            size="large"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 설명</div>}
          rules={[
            {
              required: true,
              message: "상품 설명을 입력해주세요.",
            },
          ]}
        >
          <Input.TextArea
            id="product-description"
            showCount
            maxLength={300}
            size="large"
            placeholder="상품 설명을 입력해주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            상품 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
