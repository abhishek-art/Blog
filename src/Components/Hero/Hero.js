import React, {useState} from 'react';
import { Button, Card, CardBody, Form, Input, Nav, Navbar, NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import Logo from '../Logo/logo'
import './style.css'

function Hero(){

    const [search, setSearch] = useState('')

return (
    <div className="container">
        <Card>
            <CardBody style={{paddingBottom: 0}}>
                <Logo />
                <Navbar style={{padding: 0}}>
                    <Nav>
                        <NavItem><NavLink to='/' className="nav-link">Home</NavLink></NavItem>
                        <NavItem><NavLink to='/about' className="nav-link">About Us</NavLink></NavItem>
                        <NavItem><NavLink to='/post/1' className="nav-link">Posts</NavLink></NavItem>
                        <NavItem><NavLink to='/contact' className="nav-link">Contact Us</NavLink></NavItem>
                    </Nav>
                    <Form inline onSubmit={(e)=>e.preventDefault()}>
                    <Input type="search" placeholder="Search" name="searchbar" 
                    value={search} onChange = {(e)=> setSearch(e.target.value)}></Input>
                    <Button>Search</Button> 
                    </Form>
                </Navbar>
            </CardBody>
        </Card>
    </div>
)
}

export default Hero