import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

const Form = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup.string().min(5, 'Name must be at least 5 characters').max(20).required(),
      email: yup.string().email('Invalid email address').max(25).required(),
      password: yup.string().min(6, 'Password must be at least 6 characters').max(20).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSubmittedData([...submittedData, values]);
      resetForm({ values: '' });
    },
  });

  const nameError = formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>;
  const emailError = formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>;
  const passwordError =
    formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>;

  return (
    <div className="formArea">
      <form className="formWrapper" onSubmit={formik.handleSubmit}>
        <h1>React form handling using Formik and Yup</h1>
        <div className="form-field">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Name"
          />
          <div className="field-errors">{nameError}</div>
        </div>
        <div className="form-field">
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
          <div className="field-errors">{emailError}</div>
        </div>
        <div className="form-field">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
          />
          <div className="field-errors">{passwordError}</div>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="form-data">
        <h2>Show Form Data</h2>
        {submittedData.map((data, index) => (
          <table className='form-data-display' key={index}>
            <td className='f-data'>Name: {data.name}</td>
            <td className='f-data'>Email: {data.email}</td>
            <td className='f-data'>Password: {data.password}</td>
          </table>
        ))}
      </div>
    </div>
  );
};

export default Form;