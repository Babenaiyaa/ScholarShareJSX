import React, { useState } from 'react';
import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';

function RegistrationForm({ children }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.role) {
      setError('All fields are required');
      return;
    }
    setError('');
    alert('Registration Successful!');
  };

  return (
    <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        width: '70%',
      }}>
      <h2 style={{ marginBottom: '30px', fontSize: '40px' }}>Create Account</h2>
      {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '40px',
          border: 'none',
          borderBottom: '1px solid #C4C4C4',
          borderRadius: '0px',
          fontSize: '16px',
          textAlign: 'center',
        }}
      >
        <option value="">Select a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="researcher">Researcher</option>
      </select>
      <br />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        padding: '10px',
        gap: '20px'
      }}>
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
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" alt="Google Logo" style={{
            width: '24px',
            height: '24px',
            marginRight: '10px',
            objectFit: 'contain',
          }} />
          <span style={{ fontSize: '14px' }}>Sign up with Google</span>
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook Logo" style={{
            width: '24px',
            height: '24px',
            marginRight: '10px',
            objectFit: 'contain',
          }} />
          <span style={{ fontSize: '14px' }}>Sign up with Facebook</span>
        </button>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span style={{ fontSize: '16px', color: '#666' }}>- or -</span>
      </div>
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px'
        }}
      />
      <br />
      <InputField
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px'
        }}
      />
      <br />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px'
        }}
      />
      <br />
      <br />
      <Button
        name="Register"
        type="submit"
        style={{
          width: '100%',
          height: '40px',
          marginBottom: '20px'
        }}
      />
      <br />
      <br />
      {children}
    </form>
  );
}

export default RegistrationForm;