import React, { useEffect, useState } from 'react'
import './CSS/login.css'
import { Link } from 'react-router-dom';

const Login = () => {

  const [action, setAction] = useState('Sign Up')
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };


  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
      <div className="signup-container">
        <h1>{action}</h1>
        <div className="signup-field">
          {action === 'Login' ? '':<input type='text'name='username' placeholder='username' value={formValues.username} errors={formErrors.username}  onChange={handleChange}/>}
          <input type='email' placeholder='email' name='email' value={formValues.email} errors={formErrors.email} onChange={handleChange}/>
          <input type='password'name='password' placeholder='*********' value={formValues.password} errors={formErrors.password} onChange={handleChange}/>
        </div>
        <Link to='/'><button>Continue</button> </Link>
        <p className="login-lgn" onClick={()=>{setAction('Login')}}>Already have an account? <span>Login</span> </p>
        <div className="login-agree">
        <input type='checkbox' name='' id='' />
        <p>By continuing, I agree to the terms of use and private policy</p>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login