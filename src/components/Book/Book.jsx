import { Link } from '@material-ui/core';
import React from 'react';
import { useHistory, useParams } from 'react-router';

const Book = () => {
    const path = useParams()
    return (
        <div>
            <h1>Let's book a {path.bedType} room</h1>
        </div>
    );
};

export default Book;