import React from 'react'
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap'
import Data from '../../Data/BlogData.json'

function Sidebar(props){
    return(
        <div>
            <Card>
                <CardHeader style={{textAlign: 'center'}}><p>About Us</p></CardHeader>
                <CardImg src={require('../../Blog Images/HughJackman-wikipedia.jpg')}></CardImg>
                <CardBody>This is some random Body text to work with the Text</CardBody>
            </Card>
            <Card>
                <CardHeader><p>Social Network</p></CardHeader>
            </Card>
            <Card>
                <CardHeader><p>Recent Posts</p></CardHeader>
                <CardBody>
                    {Data.data.map((post)=>{
                        return (
                            <div key={post.id}>
                                <NavLink to={`/post/${post.id}`} style={{color: 'black'}}><h5>{post.blogTitle}</h5></NavLink>
                                <p style={{color: 'gray'}}>{post.author}</p>
                            </div>
                        )
                    })}
                </CardBody>
            </Card>
        </div>
    )
}

export default Sidebar