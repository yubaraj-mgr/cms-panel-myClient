import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { postCatToDb } from "../../pages/categories/CategoryAction";
import { useSelector } from "react-redux";

const CatForm = () => {
  const initialState = {
    name: "",
    parentId: null,
    status: "inactive",
  };
  const [category, setCategory] = useState(initialState);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.cat);
  const handleOnChange = (e) => {
    let { checked, value, name } = e.target;
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }
    if (name === "parentId") {
      if (value === "") {
        value = null;
      }
    }
    setCategory({ ...category, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postCatToDb(category));
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Row>
        <Col>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="status"
            name="status"
            onChange={handleOnChange}
          />
        </Col>
        <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select
              defaultValue="Choose..."
              onChange={handleOnChange}
              placeholder="select Parent Category"
              name="parentId"
            >
              <option value="">Select Parent Category</option>
              {categories.map((item, i) => {
                return (
                  !item.parentId && (
                    <option key={i} value={item._id}>
                      {item.name}
                    </option>
                  )
                );
              })}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Control
            placeholder="Category Name"
            onChange={handleOnChange}
            name="name"
          />
        </Col>
        <Col>
          {" "}
          <Button variant="primary" type="submit">
            Add Category
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CatForm;
