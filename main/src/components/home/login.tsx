import './style.css';

const Login = () => {
  return (
    <div className='login'>
      <div className="container">
        <h1>Welcome to Bank of Barodchi</h1>
        <div className="service-box">
          <div className="services" id="admin">
            <a href="google.com">Admin Login</a>
          </div>
          <div className="services" id="register">
            <a href="google.com">New Customer</a>
          </div>
          <div className="services" id="netbanking">
            <a href="google.com">Net Banking</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
