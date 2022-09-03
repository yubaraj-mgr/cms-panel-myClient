import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { getAllCat } from "../../pages/categories/CategoryAction";
import { useDispatch, useSelector } from "react-redux";

const CatTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.cat);
  const parentCategories = categories.filter((item) => !item.parentId);
  const childCategories = categories.filter((item) => item.parentId);
  console.log(categories);
  useEffect(() => {
    dispatch(getAllCat());
  }, []);
  return (
    <Table striped bordered hover className="mt-5">
      <thead>
        <tr>
          <th>Status</th>
          <th>Name</th>
          <th>Lavel</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {parentCategories.map((item, index) => {
          return (
            <>
              <tr key={index} className="bg-info ">
                <td
                  className={
                    item.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {item.status}
                </td>
                <td>{item.name}</td>
                <td>{item.parentId ? "Children" : "Parent"}</td>
                <td>
                  <Button variant="danger" type="submit">
                    Delete
                  </Button>{" "}
                  <Button variant="warning" type="submit">
                    Delete
                  </Button>
                </td>
              </tr>
              {childCategories.map((childItem, childIndex) => {
                return (
                  childItem.parentId === item._id && (
                    <tr key={childIndex} className="bg-light">
                      <td
                        className={
                          childItem.status === "active"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {childItem.status}
                      </td>
                      <td>{childItem.name}</td>
                      <td>{childItem.parentId ? "Children" : "Parent"}</td>
                      <td>
                        <Button variant="danger" type="submit">
                          Delete
                        </Button>{" "}
                        <Button variant="warning" type="submit">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  )
                );
              })}
            </>
          );
        })}
        {/* {categories.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.parentId ? "Children" : "Parent"}</td>
              <td>
                <Button variant="danger" type="submit">
                  Delete
                </Button>
              </td>
            </tr>
          );
        })} */}
      </tbody>
    </Table>
  );
};

export default CatTable;
