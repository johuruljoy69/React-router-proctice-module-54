import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    // console.log(friend);
    return (
        <div>
            <h1>Everything about this person here</h1>
            <h3>Name: {friend.name} </h3>
            <h4>Phone:{friend.phone} </h4>
        </div>
    );
};

export default FriendDetail;