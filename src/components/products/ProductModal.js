import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

const ProductModal = ({
  showModal,
  handleCloseModal,
  handleAddProduct,
  formData,
  handleImageChange,
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={formData.productName}
              onChange={(e) => handleImageChange("productName", e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={formData.productPrice}
              onChange={(e) =>
                handleImageChange("productPrice", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="productImage">
            <Form.Label>Product Image</Form.Label>
            <Form.File
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleImageChange("productImage", e.target.files[0])
              }
            />
            {formData.productImage && (
              <img
                src={formData.productImage}
                alt="Preview"
                className="mt-2 img-thumbnail"
                style={{ maxWidth: "100px" }}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddProduct}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
