import logo from './../images/LoL-Logo.png';
import './../index.css';

import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function Login() {
  return (
    <section className="Login">
      <Card className = 'Login-card'>
        <Card.Img className = 'Login-img' variant = 'top' src = {logo}></Card.Img>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>
            <form className = 'Login-form'>
                <DropdownButton id = 'dropdown-basic-button' title = 'Region'>
                    <Dropdown.Item>NA</Dropdown.Item>
                    <Dropdown.Item>EUW</Dropdown.Item>
                    <Dropdown.Item>EUNE</Dropdown.Item>
                    {/* <Dropdown.Item>KR</Dropdown.Item>
                    <Dropdown.Item>BR</Dropdown.Item>
                    <Dropdown.Item>JP</Dropdown.Item>
                    <Dropdown.Item>RU</Dropdown.Item>
                    <Dropdown.Item>OCE</Dropdown.Item>
                    <Dropdown.Item>TR</Dropdown.Item>
                    <Dropdown.Item>LAN</Dropdown.Item>
                    <Dropdown.Item>LAS</Dropdown.Item> */}
                </DropdownButton>
                <input type = 'text' id = 'username' placeholder = 'Username...' />
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Login;