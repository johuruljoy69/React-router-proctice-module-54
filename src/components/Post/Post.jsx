import React from 'react';
import './post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post' >
            <h2>ID{id} </h2>
            <h3>Name: {title} </h3>
            <p> {body} </p>
            <Link to={`/post/${id}`} >Post Details</Link>
            <Link to={`/post/${id}`} ><button>Show post Details</button></Link>
            <button onClick={handleNavigation} >With button handler</button>
        </div>
    );
};

export default Post;