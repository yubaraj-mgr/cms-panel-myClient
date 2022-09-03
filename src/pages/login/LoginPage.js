import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { CustomInputField } from "../../components/customInputField/CustomInputField";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { loginUserAction } from "./userAction";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({});

  const { user } = useSelector((state) => state.admin);

  useEffect(() => {
    const origin =
      (location.state && location.state.from && location.state.from.pathname) ||
      "/dashboard";
    user?._id && navigate(origin);
  }, [user, navigate]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(form));
  };
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <h3>Welcome Back</h3>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInputField
              label="Email"
              type="email"
              name="email"
              required={true}
              placeholder="your@email.com"
              onChange={handleOnChange}
            />
            <CustomInputField
              label="Email"
              type="password"
              name="password"
              required={true}
              placeholder="*******"
              onChange={handleOnChange}
            />
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default LoginPage;
