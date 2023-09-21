import React from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { post } from "../utils/api";

const Registration = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await post("auth/register", data);

      if (response.status === "success") {
        console.log("Registration successful:", response.data);
      } else {
        console.error("Registration failed:", response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">User Registration</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                {...register("firstName")}
              />
              {/* {errors.firstName && (
                <span className="text-danger">First Name is required</span>
              )} */}
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {/* {errors.lastName && (
                <span className="text-danger">Last Name is required</span>
              )} */}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}
              />
              {/* {errors.email && (
                <span className="text-danger">Email is required</span>
              )} */}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
              {/* {errors.password && (
                <span className="text-danger">Password is required</span>
              )} */}
            </Form.Group>

            <Form.Group controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                placeholder="Mobile"
                {...register("mobile")}
              />
              {/* {errors.mobile && (
                <span className="text-danger">Mobile is required</span>
              )} */}
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
