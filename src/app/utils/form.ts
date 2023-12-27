import { FormDataType, ErrorDataType } from "../types/formTypes";


export const isEmailValid = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
  
export const validateForm = (formData: FormDataType): ErrorDataType => {
  const errors: ErrorDataType = {};

  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isEmailValid(formData.email)) {
    errors.email = 'Invalid email format';
  }

  // Validate username
    if (formData.username) {
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
    }
  // Validate password
  if (!formData.password.trim()) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  }

  // Validate confirmPassword
  if(formData.confirmPassword){if (!formData.confirmPassword.trim()) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Passwords do not match';
  }}

  return errors;
};