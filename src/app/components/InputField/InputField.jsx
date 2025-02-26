import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './InputField.module.scss';

const InputField = ({ type, placeholder, iconName }) => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.inputField}>
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {type === 'password' && (
        <span onClick={handleShowPassword} className={styles.eyeIcon}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      )}
    </div>
  );
};

export default InputField;