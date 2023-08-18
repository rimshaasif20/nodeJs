import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { configIP } from '../../config';
const Comment = ({ imageId, refreshImages }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = async () => {
        const userId = JSON.parse(localStorage.getItem("user"));
        const requestData = {
            userId: userId,
            imageId: imageId,
            comment: comment,
        };
console.log('Requested', requestData);
        try {
            await axios.post(`${configIP}/image/commnet`, requestData);
            setComment('');
            refreshImages(); 
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };

    return (
        <div>
            <TextField
                label="Add a comment"
                value={comment}
                onChange={handleCommentChange}
                variant="outlined"
            />
            
            <Button variant="contained" color="primary" style={{ marginLeft: "10px", marginTop: "10px" }} onClick={handleCommentSubmit}>
                Submit Comment
            </Button>
        </div>
    );
};

export default Comment;
