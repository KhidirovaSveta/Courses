import React from 'react'
import { Formik, Form, Field } from 'formik';
import { SignupSchema } from './schema';
import axios from 'axios';
import "./index.scss"
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const navigate = useNavigate()
  return (
    <div id='AddCourse'>
      <div className="container">

        <div className="form">
    <h1 className='addHeader'>Add Course</h1>
    <Formik
      initialValues={{
        img1: '',
        title: '',
        tags: '',
        img2: '',
        name: '',
        price: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        axios.post(`http://localhost:8080/`, values)
        navigate("/")
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>

            <div className="formInput">
          <Field name="img1" placeholder="img1"/>
          {errors.img1 && touched.img1 ? (
            <div>{errors.img1}</div>
          ) : null}
            </div>

            <div className="formInput">
          <Field name="title" placeholder="title"/>
          {errors.title && touched.title ? (
            <div>{errors.title}</div>
          ) : null}
            </div>

            <div className="formInput">
          <Field name="tags" placeholder="tags"/>
          {errors.tags && touched.tags ? (
            <div>{errors.tags}</div>
          ) : null}
            </div>

            <div className="formInput">
          <Field name="img2" placeholder="img2"/>
          {errors.img2 && touched.img2 ? (
            <div>{errors.img2}</div>
          ) : null}
            </div>


            <div className="formInput">
          <Field name="name" placeholder="name"/>
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
            </div>

            <div className="formInput">
          <Field name="price" placeholder="price"/>
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}
            </div>



          <button type="submit" className='subBtn'>Submit</button>
        </Form>
      )}
    </Formik>

        </div>

      </div>
      
  </div>
  )
}

export default AddCourse