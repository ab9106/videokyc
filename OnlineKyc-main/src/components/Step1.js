import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import '../index.css';

const Step1 = ({ onNextStep }) => {
  return (
    <div className="step2-container">
      <div className="step2-section">
        <h2 className="step2-title">Step 1: General Details</h2>
        <p className="step2-description">Please fill out the following details:</p>
      </div>
      <div className="step2-section">
        <Formik
          initialValues={{
            clientType: '',
            minorMajor: '',
            branch: '',
            email: '',
            phoneNumber: '',
            aadharNumber: '',
            panNumber: ''
          }}
          validationSchema={Yup.object().shape({
            clientType: Yup.string().required('Client Type is required'),
            minorMajor: Yup.string().required('Minor/Major is required'),
            branch: Yup.string().required('Branch of Bank Account is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Phone Number is required'),
            aadharNumber: Yup.string().matches(/^\d{12}$/, 'Invalid Aadhar Number').required('Aadhar Number is required'),
            panNumber: Yup.string().matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, 'Invalid PAN Number').required('PAN Number is required')
          })}
          onSubmit={(values) => {
            console.log(values);
            onNextStep();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="clientType">Client Type*</label>
                <Field as="select" name="clientType" className={`input ${errors.clientType && touched.clientType ? 'is-invalid' : ''}`}>
                  <option value="">Select Client Type</option>
                  <option value="individual">Individual</option>
                  <option value="corporate">Corporate</option>
                </Field>
                <ErrorMessage name="clientType" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="minorMajor">Minor/Major*</label>
                <Field as="select" name="minorMajor" className={`input ${errors.minorMajor && touched.minorMajor ? 'is-invalid' : ''}`}>
                  <option value="">Select Minor/Major</option>
                  <option value="minor">Minor</option>
                  <option value="major">Major</option>
                </Field>
                <ErrorMessage name="minorMajor" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="branch">Branch of Bank Account*</label>
                <Field type="text" name="branch" className={`input ${errors.branch && touched.branch ? 'is-invalid' : ''}`} />
                <ErrorMessage name="branch" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <Field type="email" name="email" className={`input ${errors.email && touched.email ? 'is-invalid' : ''}`} />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <Field type="text" name="phoneNumber" className={`input ${errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : ''}`} />
                <ErrorMessage name="phoneNumber" component="div" className="error" />
              </div>
              <div className="form-group">
                <Field type="hidden" name="aadharNumber" />
                <Field type="hidden" name="panNumber" />
                <button type="submit" className="btn btn-primary">Next</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Step1;
