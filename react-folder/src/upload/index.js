import { Button, Divider, Form, Input, InputNumber } from "antd";
import "./index.css";
function UploadPage() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="productUpload" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>상품의 이미지를 업로드해주세요.</span>
          </div>
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
