// Step4.js
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import '../index.css';

const Step4 = ({ onNextStep }) => {
  return (
    <div className="step4-container">
      <div className="step4-section">
        <h2 className="step4-title">Step 4: Upload Aadhar and PAN Card Documents</h2>
        <p className="step4-description">Please upload the following documents:</p>
      </div>
      <div className="step4-section">
        <Formik
          initialValues={{
            aadharDocument: '', // Add a field for Aadhar document
            panDocument: '' // Add a field for PAN document
          }}
          validationSchema={Yup.object().shape({
            aadharDocument: Yup.string().required('Aadhar Document is required'), // Validation for Aadhar document
            panDocument: Yup.string().required('PAN Document is required') // Validation for PAN document
          })}
          onSubmit={(values) => {
            console.log(values);
            onNextStep();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="aadharDocument">Upload Aadhar Card Document*</label>
                <Field type="file" name="aadharDocument" className={`input ${errors.aadharDocument && touched.aadharDocument ? 'is-invalid' : ''}`} />
                <ErrorMessage name="aadharDocument" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="panDocument">Upload PAN Card Document*</label>
                <Field type="file" name="panDocument" className={`input ${errors.panDocument && touched.panDocument ? 'is-invalid' : ''}`} />
                <ErrorMessage name="panDocument" component="div" className="error" />
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

export default Step4;

