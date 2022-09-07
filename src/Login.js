import logo from './images/LoL-Logo.png'
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <img src={logo} className="Login-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Login;