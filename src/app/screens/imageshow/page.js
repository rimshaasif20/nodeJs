"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, IconButton, Container, Grid } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import Comment from './comment'
import withAuth from '../../restrict/withAuth'
import { configIP } from '../../config';
const Gallery = () => {
    const [images, setImages] = useState([]);
    const [likedImages, setLikedImages] = useState({});
    const [likeInProgress, setLikeInProgress] = useState({});
   
    const userid = JSON.parse(localStorage.getItem("user"));
    

    const fetchImages = async () => {
        try {
            const response = await axios.get(`${configIP}/image/All`);
            setImages(response.data);
           
            console.log("alldata",response)
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };
useEffect(() => {
        fetchImages();
    }, []);

    const handleLike = async (imageId) => {
        if (likeInProgress[imageId]) {
            return;
        }

        setLikeInProgress(prevLikeInProgress => ({
            ...prevLikeInProgress,
            [imageId]: true,
        }));

        const userId = userid;
        try {
            const requestData = {
                userId: userId,
                imageId: imageId,
            };

            const response = await axios.post(`${configIP}/image/like`, requestData);
            console.log(response.data);

            // const commentsResponse = await axios.get('http://192.168.1.215:5000/image/commnets'); // Adjust the endpoint for fetching comments
            // const commentsByImageId = {};

            // commentsResponse.data.forEach(comment => {
            //     const { imageId, comment: text } = comment;
            //     if (!commentsByImageId[imageId]) {
            //         commentsByImageId[imageId] = [];
            //     }
            //     commentsByImageId[imageId].push(text);
            // });

            // setImageComments(commentsByImageId);

            setLikedImages(prevLikedImages => ({
                ...prevLikedImages,
                [imageId]: true,
            }));

            fetchImages();
        } catch (error) {
            console.error('Error liking image:', error);
        } finally {
            setLikeInProgress(prevLikeInProgress => ({
                ...prevLikeInProgress,
                [imageId]: false,
            }));
        }
    };

    return (
      <Container maxWidth="sm">
            <div className='heading'>
                <Typography variant="h4">
                    Image Gallery
                </Typography>
            </div>
            <div className="image-list">
                {images.map((image, index) => (
                    <Card key={index} className="image-card">
                        <CardMedia
                            component="img"
                            height="520"
                            image={image.url}
                            alt={`Image ${index + 1}`}
                        />
                        <CardContent>
                            <IconButton onClick={() => handleLike(image._id)}>
                                {likedImages[image._id] ? <ThumbUpIcon style={{ color: 'blue' }} /> : <ThumbUpOutlinedIcon />}
                            </IconButton>
                             <IconButton>
                                <CommentIcon />
                            </IconButton>
                            <Typography variant="body2">
                                <h3>Comments:</h3>
                                {image.comments.map((comment, commentIndex) => (
                                    <p key={commentIndex}>{comment.comment}</p>
                                ))}
                            </Typography>
                           
                            <Comment imageId={image._id} refreshImages={fetchImages} />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
};


export default withAuth(Gallery);
