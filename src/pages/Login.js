import logo from './../images/LoL-Logo.png';

import { Card, Dropdown } from 'react-bootstrap';
import { useState } from 'react';


function Login() {
    const [region, setRegion] = useState('NA');

    return (
        <section className="Login">
            <Card className = 'Login-card'>
                <Card.Img className = 'Login-img' variant = 'top' src = {logo} />
                <Card.Body className = 'Login-body'>
                    <Card.Title>Login</Card.Title>
                    <Card.Text className = 'Login-text'>
                        <form className = 'Login-form'>
                            <Dropdown>

                                <Dropdown.Toggle className = 'Login-button'>
                                    {region}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick = {() => setRegion('NA')}>North America (NA)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('EUW')}>European West (EUW)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('EUNE')}>European Nordic & East (EUNE)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('KR')}>Korea (KR)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('BR')}>Brazil (BR)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('JP')}>Japan (JP)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('RU')}>Russia (RU)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('OCE')}>Oceania (OCE)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('TR')}>Turkey (TR)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('LAN')}>Latin America North (LAN)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => setRegion('LAS')}>Latin America South (LAS)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <input className = 'Login-input' type = 'text' id = 'username' placeholder = 'Username...' />
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Login;