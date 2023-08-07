"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BiBrush } from "react-icons/bi";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUsers } from "../Redux/action";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  salary: Yup.number().required("Salary is required"),
  date: Yup.date().required("Date is required"),
  status: Yup.string().required("Status is required"),
});

const UpdateUser = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    salary: "",
    date: "",
    status: "Active",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ values, handleChange, errors, touched }) => (
        <Form className="grid lg:grid-cols-2 w-4/6 gap-4">
          <div className="container">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                className={`form-control ${touched.firstname && errors.firstname ? "is-invalid" : ""}`}
                onChange={handleChange}
                value={values.firstname}
              />
              <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                className={`form-control ${touched.lastname && errors.lastname ? "is-invalid" : ""}`}
                onChange={handleChange}
                value={values.lastname}
              />
              <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                onChange={handleChange}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input
                type="text"
                name="salary"
                className={`form-control ${touched.salary && errors.salary ? "is-invalid" : ""}`}
                onChange={handleChange}
                value={values.salary}
              />
              <ErrorMessage name="salary" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                className={`form-control ${touched.date && errors.date ? "is-invalid" : ""}`}
                onChange={handleChange}
                value={values.date}
              />
              <ErrorMessage name="date" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>
              <div>
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  onChange={handleChange}
                  checked={values.status === "Active"}
                />
                <label>Active</label>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  onChange={handleChange}
                  checked={values.status === "Inactive"}
                />
                <label>Inactive</label>
              </div>
              <ErrorMessage name="status" component="div" className="invalid-feedback" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                <BiBrush /> Update
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateUser;
