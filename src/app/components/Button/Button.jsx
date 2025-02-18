import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick, name = 'Button' }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name} {children}
    </button>
  );
};

export default Button;