import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';


export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState(""); // New state for non-field errors
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    // Clear general error when user types
    if (generalError) setGeneralError("");
  };

  // Validation Logic (Client Side)
  const validate = () => {
    const newErrors = {};
    
    if (!formData.first_name.trim()) newErrors.first_name = 'First name is required';
    if (!formData.last_name.trim()) newErrors.last_name = 'Last name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors({});
    setGeneralError("");

    if (validate()) {
      setIsSubmitting(true);

      try {
        const response = await axios.post('http://localhost:8000/account/create/', formData);
        console.log(response.data);
        setIsSubmitting(false);
      } 
      catch (error) {
        setIsSubmitting(false);
        
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          const newErrors = {};

          Object.keys(serverErrors).forEach((key) => {

            const errorMessage = Array.isArray(serverErrors[key]) 
              ? serverErrors[key][0] 
              : serverErrors[key];
            if (Object.keys(formData).includes(key)) {
              newErrors[key] = errorMessage;
            } else {
              setGeneralError(errorMessage);
            }
          });

          setErrors(newErrors);
        } else {
          setGeneralError("Something went wrong. Please check your internet connection.");
        }
      }
    } else {
      console.log('Client-side validation failed');
    }
  };

  const getInputClass = (fieldName) => {
    const baseClass = "w-full h-10 px-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-primary/50 transition-colors outline-none";
    const errorClass = "border-red-500 focus:border-red-500";
    const normalClass = "border-slate-300 dark:border-slate-700 focus:border-primary";
    
    return `${baseClass} ${errors[fieldName] ? errorClass : normalClass}`;
  };



  async function handleGoogleLogin(credentialResponse){
    try{
      let token={
        token:credentialResponse.credential
      }
      const response=await axios.post('http://localhost:8000/account/login/google/',token)
      console.log(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight"> Join Our Community </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg mt-4"> Get started in seconds and unlock all features. </p>
          <div className="mt-8 hidden lg:block">
            <img className="rounded-xl object-cover w-full h-80" alt="Abstract representation" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />
          </div>
        </div>
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
            <h1 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] text-left pb-4"> Create an Account </h1>
            
            {generalError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {generalError}
              </div>
            )}

            {/* Social Buttons */}
            <div className="flex flex-col gap-3">
            </div>

            <div className="flex items-center gap-3 my-6">
                <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
              <hr className="w-full border-slate-200 dark:border-slate-700" />
              <span className="text-xs text-slate-500 dark:text-slate-400">OR</span>
              <hr className="w-full border-slate-200 dark:border-slate-700" />
            </div>

            {/* Form Start */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="first-name"> First Name </label>
                  <input 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className={getInputClass('first_name')}
                    id="first-name" 
                    placeholder="John" 
                    type="text" 
                  />
                  {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>}
                </div>

                {/* Last Name */}
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="last-name"> Last Name </label>
                  <input 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className={getInputClass('last_name')} 
                    id="last-name" 
                    placeholder="Doe" 
                    type="text" 
                  />
                  {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="email"> Email </label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClass('email')} 
                  id="email" 
                  placeholder="john.doe@example.com" 
                  type="email" 
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="password"> Password </label>
                <div className="relative">
                  <input 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`pr-10 ${getInputClass('password')}`}
                    id="password" 
                    placeholder="••••••••" 
                    type={showPassword ? "text" : "password"} 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400 focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-base">
                      {showPassword ? "visibility" : "visibility_off"}
                    </span>
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block" htmlFor="confirm-password"> Confirm Password </label>
                <input 
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className={getInputClass('confirm_password')}
                  id="confirm-password" 
                  placeholder="••••••••" 
                  type="password" 
                />
                {errors.confirm_password && <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>}
              </div>

              <button 
                className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold mt-4 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isSubmitting}
              >
                <span className="truncate">{isSubmitting ? 'Creating Account...' : 'Create Account'}</span>
              </button>

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-2"> By creating an account, you agree to our <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>. </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}