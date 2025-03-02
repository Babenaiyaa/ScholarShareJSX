import React, { useState } from 'react';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';

function LoginForm({ children }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!selectedRole || !email || !password) {
      setError('Please fill all the fields');
      return false;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      return false;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted!');
    }
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '70%',
      }}
    >
      <h2
        style={{
          marginBottom: '30px',
          fontSize: '40px',
          fontFamily: 'Space Grotesk, sans-serif' // Apply Space Grotesk font here
        }}
      >
        Log In
      </h2>

      {/* Role Selection */}
      <select
        style={{
          width: '100%',
          height: '40px',
          border: 'none',
          borderBottom: '1px solid #C4C4C4',
          borderRadius: '0px',
          fontSize: '16px',
          textAlign: 'center',
        }}
        value={selectedRole}
        onChange={(event) => setSelectedRole(event.target.value)}
      >
        <option value="">Select a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="researcher">Researcher</option>
      </select>
      <br />
      <br />

      {/* Social Sign-In Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          padding: '10px',
          gap: '20px',
        }}
      >
        <button
          style={{
            color: '#5C5C5C',
            border: '1px solid black',
            backgroundColor: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png"
            alt="Google Logo"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
              objectFit: 'contain',
            }}
          />
          <span style={{ fontSize: '14px' }}>Sign in with Google</span>
        </button>
        <button
          style={{
            color: '#5C5C5C',
            border: '1px solid black',
            backgroundColor: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt="Facebook Logo"
            style={{
              width: '24px',
              height: '24px',
              marginRight: '10px',
              objectFit: 'contain',
            }}
          />
          <span style={{ fontSize: '14px' }}>Sign in with Facebook</span>
        </button>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '16px', color: '#666' }}>- or -</span>
      </div>


      {/* Email and Password Fields */}
      <InputField
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px',
        }}
      />
      <br />
      <br />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px',
        }}
      />
      <br />
      <br />

      {/* Forgot Password */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <a
          href="#"
          onClick={() => alert('Forgot password?')}
          style={{ textDecoration: 'none', color: '#634141' }}
        >
          Forgot Password?
        </a>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Submit Button */}
      <Button
        name="Log In"
        onClick={handleSubmit}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px',
        }}
      />
      <br />
      <br />
      {children}
    </form>
  );
}

export default LoginForm;
