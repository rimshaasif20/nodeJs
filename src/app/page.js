"use client"
import { useEffect, useState } from "react";
import page from "./page.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Input, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { setCookie } from 'cookies-next';
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function Home() {
  const initialFormData = {
    email: '',
    password: '',
    confirmPassword: '',
  };



  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      console.log(values);
    setCookie('login', 'true');
      
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
     <h1 className={page.head}>Sign Up</h1>
    <div className={page.main}>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={page.form} >
            <div>
              <InputLabel htmlFor="email">Email:</InputLabel>
              <Field type="email" id="email" name="email" as={Input} required />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <InputLabel htmlFor="password">Password:</InputLabel>
              <Field type="password" id="password" name="password" as={Input} required />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <InputLabel htmlFor="confirmPassword">Confirm Password:</InputLabel>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                as={Input}
                required
              />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>

            <br />
            <div>
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      </div>
    </>
  );
}

export default Home;

