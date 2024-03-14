
// Step2.js
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import '../index.css';

const Step2 = ({ onNextStep }) => {
  return (
    <div className="step2-container">
      <div className="step2-section">
        <h2 className="step2-title">Step 2: Aadhar Card and PAN Card Details</h2>
        <p className="step2-description">Please fill out the following details:</p>
      </div>
      <div className="step2-section">
        <Formik
          initialValues={{
            aadharNumber: '',
            aadharName: '', // Add a new field for Aadhar Name
            panNumber: '',
            panName: '' // Add a new field for PAN Name
          }}
          validationSchema={Yup.object().shape({
            aadharNumber: Yup.string().matches(/^\d{12}$/, 'Invalid Aadhar Number').required('Aadhar Number is required'),
            aadharName: Yup.string().required('Name on Aadhar Card is required'), // Validation for Aadhar Name
            panNumber: Yup.string().matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, 'Invalid PAN Number').required('PAN Number is required'),
            panName: Yup.string().required('Name on PAN Card is required') // Validation for PAN Name
          })}
          onSubmit={(values) => {
            console.log(values);
            onNextStep();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="aadharNumber">Aadhar Number*</label>
                <Field type="text" name="aadharNumber" className={`input ${errors.aadharNumber && touched.aadharNumber ? 'is-invalid' : ''}`} />
                <ErrorMessage name="aadharNumber" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="aadharName">Name on Aadhar Card*</label>
                <Field type="text" name="aadharName" className={`input ${errors.aadharName && touched.aadharName ? 'is-invalid' : ''}`} />
                <ErrorMessage name="aadharName" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="panNumber">PAN Number*</label>
                <Field type="text" name="panNumber" className={`input ${errors.panNumber && touched.panNumber ? 'is-invalid' : ''}`} />
                <ErrorMessage name="panNumber" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="panName">Name on PAN Card*</label>
                <Field type="text" name="panName" className={`input ${errors.panName && touched.panName ? 'is-invalid' : ''}`} />
                <ErrorMessage name="panName" component="div" className="error" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Next</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Step2;

