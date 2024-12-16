import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

const FormikLearning = () => {
  const navigate = useNavigate()
  const initialValuess = { username: "", password: "", email: "" };
  const validationschema = Yup.object({
    username: Yup.string().required("Username is a mandatory field"),
    email: Yup.string().required("Email is a mandatory field").email("Not a valid email"),
  });
  const onsubmit = (values) => {
    navigate("/home");
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValuess}
        validationSchema={validationschema}
        onSubmit={onsubmit}
      >
        {/* formik contains these props - initial values, validation schema, onSubmit */}
        {({ handleChange, handleSubmit, errors, handleBlur, touched }) => (
          <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{touched.username && errors.username}</p>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p>{touched.email && errors.email}</p>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormikLearning;
