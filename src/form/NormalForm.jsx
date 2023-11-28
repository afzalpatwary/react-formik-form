
// normal form validation

/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useFormik } from 'formik';
import * as yup from 'yup';
const Form = () => {


  // using formik form handling...
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      name: yup.string().min(5, "name atleast 5 caracters").required(),
      email: yup.string().email().required(),
      password: yup.string().min(6, "password atleast 6 caracters").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },

  });


  // error handling
  const nameError = (formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>)
  const emailError = (formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>)
  const passwordError = (formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>)

  console.error(formik.errors)


  // without formik form handling...

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const handleNameChange = (e) => {
  //   setName(e.target.value)
  // }
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     name, email, password
  //   };
  //   console.log(newUser)
  // }

  return (
    <div className='formArea'>
      <form className="formWrapper" onSubmit={formik.handleSubmit}>
        <h1>React form handling using formik and yup</h1>
        <div className="form-field">
          <input type="text" name='name' value={formik.values.name} onChange={formik.handleChange} placeholder='Name' />
          <div className="field-errors">
            {nameError}
          </div>
        </div>
        <div className="form-field">
          <input type="email" name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Email' />

          <div className="field-errors">
            {emailError}
          </div>

        </div>
        <div className="form-field">
          <input type="password" name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Password' />
          <div className="field-errors">
            {passwordError}
          </div>

        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;