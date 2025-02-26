import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import RegistrationForm from './SignUp';
import LoginForm from './SignIn';
import { useState, useEffect } from 'react';

function Home() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {screenWidth >= 768 && <NavBar />}
      {screenWidth >= 768 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            height: '100vh',
            backgroundColor: '#EBDEDE',
          }}
        >
          <div
            style={{
              gridColumn: 1,
              backgroundImage: showRegistration ? `url('/SignUp.png')` : `url('/SignIn.png')`,
              backgroundSize: '500px 500px', 
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="forms-container"
            style={{
              gridColumn: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              backgroundColor: '#fff',
              borderRadius: '50px 0 0 50px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {showRegistration ? (
              <RegistrationForm>
                <div style={{ alignContent: 'center', textAlign: 'center' }}>
                  <p>
                    <span>Already have an account? <a onClick={() => setShowRegistration(false)}>Login</a></span>
                  </p>
                </div>
              </RegistrationForm>
            ) : (
              <LoginForm>
                <div style={{ alignContent: 'center', textAlign: 'center' }}>
                  <p>
                    <span>Don't have an account? <a onClick={() => setShowRegistration(true)}>Register</a></span>
                  </p>
                </div>
              </LoginForm>
            )}
          </div>
        </div>
      ) : (
        <div
          className="forms-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {showRegistration ? (
            <RegistrationForm>
              <div style={{ alignContent: 'center', textAlign: 'center' }}>
                <p>
                  <span>Already have an account? <a onClick={() => setShowRegistration(false)}>Login</a></span>
                </p>
              </div>
            </RegistrationForm>
          ) : (
            <LoginForm>
              <div style={{ alignContent: 'center', textAlign: 'center' }}>
                <p>
                  <span>Don't have an account? <a onClick={() => setShowRegistration(true)}>Register</a></span>
                </p>
              </div>
            </LoginForm>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;