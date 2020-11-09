import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'
import './style.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

function Home(){
    return( <div className="container">
        <Card className="home-main">
            <div className="main-img" style={{maxWidth: '75%'}}>
                <CardImg src={require('../../Blog Images/Img1.jpg')}></CardImg>
            </div>
            <div className="side-img" style={{maxWidth: '25%'}}>
                <CardImg src={require('../../Blog Images/Img2.jpeg')} />
                <CardImg src={require('../../Blog Images/Img3.jpg')} />
                <CardImg src={require('../../Blog Images/Img4.jpg')} />
            </div>
            </Card>
            <div className="row" style={{margin: "10px 0px"}}>
                <div className="col-9 pl-0">
                    <Card>
                        <CardImg src={require('../../Blog Images/Img3.jpg')}/>
                        <CardBody style={{textAlign: 'center'}}>
                            <p>Featured</p>
                            <h3>Fitness Mantra to live Fit Life</h3>
                            <p style={{fontStyle: 'italic'}}>posted on July 21, 2016 by Sara Blogging Tips</p>
                            <button className="btn btn-outline-secondary" style={{borderRadius: "20px"}}>Read More</button>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-3 pr-0" style={{paddingLeft: '4px'}}>
                    <Sidebar />
                </div>
            </div>
    </div>
        )}

export default Home