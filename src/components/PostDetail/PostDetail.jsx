import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    // console.log(post);
    const navigate = useNavigate()
    const handleGoBack =() =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>This is post details</h2>
            <h2>{post.id}</h2>
            <h2> {post.title} </h2>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;