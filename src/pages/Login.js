import logo from './../images/LoL-Logo.png';

import { Card, Dropdown } from 'react-bootstrap';
import { useState } from 'react';


function Login() {
    const [region, setRegion] = useState('NA');
    const [regionQuery, setRegionQuery] = useState('na1');
    const [color, setColor] = useState('#ff9b00');
    const [visibility, setVisibility] = useState('hidden');
    const [name, setName] = useState('');

    const checkName = async (e) => {
        e.preventDefault();

        const { username } = e.target.elements;
        setName(username.value);
        const user = { 
            name: username.value,
            region: regionQuery
        };
        

        const result = await fetch(`https://localhost:44318/api/v1/Summoners?region=${user.region}&name=${user.name}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                setVisibility('visible');
                return Promise.reject(response);
            }
        }).catch((error) => {
            setVisibility('visible');
            throw new Error(error);
        });
        //TODO: Remove alert and figure out how to send the JSON data to the next page
        alert(result.id);
    }

    const changeCSS = (region) => {
        switch(region) {
            case 'NA':
                setRegion('NA');
                setRegionQuery('na1');
                setColor('#ff9b00');
                break;
            case 'EUW':
                setRegion('EUW');
                setRegionQuery('euw1');
                setColor('#1e48a8');
                break;
            case 'EUNE':
                setRegion('EUNE');
                setRegionQuery('eun1');
                setColor('#3374a9');
                break;
            case 'KR':
                setRegion('KR');
                setRegionQuery('kr');
                setColor('#4d2ac0');
                break;
            case 'JP':
                setRegion('JP');
                setRegionQuery('jp1');
                setColor('#ec5d8c');
                break;
            case 'BR':
                setRegion('BR');
                setRegionQuery('br1');
                setColor('#6cd7a2');
                break;
            case 'RU':
                setRegion('RU');
                setRegionQuery('ru');
                setColor('#bf2828');
                break;
            case 'OCE':
                setRegion('OCE');
                setRegionQuery('oc1');
                setColor('#8eced5');
                break;
            case 'TR':
                setRegion('TR');
                setRegionQuery('tr1');
                setColor('#ec5c57');
                break;
            case 'LAN':
                setRegion('LAN');
                setRegionQuery('la1');
                setColor('#f7c544');
                break;
            case 'LAS':
                setRegion('LAS');
                setRegionQuery('la2');
                setColor('#ed642b');
                break;
            default:
                setRegion('NA');
                setRegionQuery('na1');
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
                        <form className = 'Login-Form' onSubmit={checkName}>
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
                <section className = 'Login-Error' style = {{ visibility: visibility }}>
                    <div>Could not retrieve data for <span className = 'Name'>"{name}"</span></div>
                    <div>Double check your spelling or try a different region</div>
                </section>
            </Card>
        </section>
    );
}

export default Login;