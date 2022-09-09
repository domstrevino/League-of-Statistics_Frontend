import logo from './../images/LoL-Logo.png';

import { Card, Dropdown } from 'react-bootstrap';
import { useState } from 'react';


function Login() {
    const [region, setRegion] = useState('NA');
    const [color, setColor] = useState('#ff9b00');

    const changeCSS = (region) => {
        switch(region) {
            case 'NA':
                setRegion('NA');
                setColor('#ff9b00');
                break;
            case 'EUW':
                setRegion('EUW');
                setColor('#1e48a8');
                break;
            case 'EUNE':
                setRegion('EUNE');
                setColor('#3374a9');
                break;
            case 'KR':
                setRegion('KR');
                setColor('#4d2ac0');
                break;
            case 'JP':
                setRegion('JP');
                setColor('#ec5d8c');
                break;
            case 'BR':
                setRegion('BR');
                setColor('#6cd7a2');
                break;
            case 'RU':
                setRegion('RU');
                setColor('#bf2828');
                break;
            case 'OCE':
                setRegion('OCE');
                setColor('#8eced5');
                break;
            case 'TR':
                setRegion('TR');
                setColor('#ec5c57');
                break;
            case 'LAN':
                setRegion('LAN');
                setColor('#f7c544');
                break;
            case 'LAS':
                setRegion('LAS');
                setColor('#ed642b');
                break;
            default:
                setRegion('NA');
                setColor('#ff9b00');
        }
    }

    return (
        <section className="Login">
            <Card className = 'Login-Card'>
                <Card.Img 
                className = 'Login-Img' 
                variant = 'top' 
                src = {logo}
                alt = 'Logo'
                />
                <Card.Body className = 'Login-Body'>
                    <Card.Title as = 'h4'>
                        Search Yourself or a Champion
                    </Card.Title>
                    <Card.Text as = 'div' className = 'Login-Text'>
                        <form className = 'Login-Form'>
                            <Dropdown>
                                <Dropdown.Toggle className = 'Login-Button' style = {{backgroundColor: color}}>{region}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick = {() => changeCSS('NA')}>North America (NA)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('EUW')}>European West (EUW)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('EUNE')}>European Nordic & East (EUNE)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('KR')}>Korea (KR)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('BR')}>Brazil (BR)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('JP')}>Japan (JP)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('RU')}>Russia (RU)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('OCE')}>Oceania (OCE)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('TR')}>Turkey (TR)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('LAN')}>Latin America North (LAN)</Dropdown.Item>
                                    <Dropdown.Item onClick = {() => changeCSS('LAS')}>Latin America South (LAS)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <input 
                            className = 'Login-Input'
                            type = 'text'
                            id = 'username'
                            placeholder = 'IGN...'
                            />
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}

export default Login;