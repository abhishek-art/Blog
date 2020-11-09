import React from 'react';
import { Card, CardBody, CardHeader, CardImg} from 'reactstrap';
import './style.css'
import * as Data from '../../Data/BlogData.json'

function Blog(props){

    const blog = Data.data.filter((post)=> post.id == props.id)[0]

    return (
        <div>
            <Card id={blog.id}>
                <CardHeader style={{textAlign:'center'}}>
                    <p>{blog.blogCategory}</p>
                    <h3>{blog.blogTitle}</h3>
                    <p style={{fontStyle: 'italic'}}>posted on {blog.postedOn} by {blog.author}</p>
                </CardHeader>
                <CardImg src={require(`../../Blog Images/${blog.blogImage}`)}></CardImg>
                <CardBody>{blog.blogText}</CardBody>
            </Card>
        </div>
    )
}

export default Blog