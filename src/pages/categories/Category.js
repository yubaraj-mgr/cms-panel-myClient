import React from "react";
import CatForm from "../../components/category/CatForm";
import CatTable from "../../components/category/CatTable";
import AdminLayout from "../../components/layout/AdminLayout";

const Category = () => {
  return (
    <AdminLayout>
      {/* heading */}
      <h3 className="mt-3">Categories Management</h3>
      {/* Cat-form */}
      <CatForm />
      {/* Cat Table */}
      <CatTable />
    </AdminLayout>
  );
};

export default Category;
