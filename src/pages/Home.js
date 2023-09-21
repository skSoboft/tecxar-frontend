import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import {get} from "../utils/api"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productImage: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await get("/products");  
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); 

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddProduct = () => {
    
    const newProduct = {
      id: Date.now(), 
      name: formData.productName,
      price: formData.productPrice,
      image: formData.productImage,
    };

    setProducts([...products, newProduct]);
    handleCloseModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: URL.createObjectURL(file) });
  };

  return (
    <Container>
      <h2 className="my-4">Product List</h2>
      <Button variant="primary" onClick={handleShowModal}>
        Add Product
      </Button>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={12} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
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
      </Modal>
    </Container>
  );
};

export default Home;
