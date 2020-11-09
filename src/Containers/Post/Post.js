import React from 'react'
import Blog from '../../Components/Blogs/Blog'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './style.css'

function Post(props) {
    return (
        <div className="posts container">
                <div className="blog">
                    <Blog id={props.match.params.postId}/>
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>
            </div>          
    )
}

export default Post