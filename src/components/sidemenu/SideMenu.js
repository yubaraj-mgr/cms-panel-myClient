import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-state/systemState";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const { showSideMenu } = useSelector((state) => state.system);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setShowSideMenu(false));

  return (
    <>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS Admin Panel</Offcanvas.Title>
          <hr />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush" className="fs-5">
            <ListGroup.Item>
              <Link onClick={handleClose} to="/dashboard" className="nav-link">
                <i className="fa-solid fa-gauge"></i> Dashboard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/category" className="nav-link">
                <i className="fa-solid fa-list"></i> Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="/product" className="nav-link">
                <i className="fa-solid fa-box"></i> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-credit-card"></i> Payment Method
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-users"></i> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-table"></i> Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-star"></i> Reviews
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link onClick={handleClose} to="" className="nav-link">
                <i className="fa-solid fa-gear"></i> Setting
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
