import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-state/systemState";
import { adminLogout } from "../../pages/login/userAction";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.admin);
  const handleOpen = () => dispatch(setShowSideMenu(true));
  const navigate = useNavigate();

  const handleOnLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" expand="md">
      <Container>
        <div>
          {user?._id && (
            <i className="fa-solid fa-bars" onClick={handleOpen}></i>
          )}{" "}
          <Navbar.Brand href="#">March Ecom</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <Link className="nav-link" to="/" onClick={handleOnLogout}>
                Logout
              </Link>
            ) : (
              <>
                {" "}
                <Link className="nav-link" to="/">
                  Login
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
