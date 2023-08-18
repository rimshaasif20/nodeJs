"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardMedia, CardContent, Typography, CircularProgress, Container } from '@mui/material';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.1.215:5000/image/All')
      .then(response => {
        setImages(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setError('Error fetching images');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container maxWidth="md">
      <h1>Image List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap'  }}>
        {images.map(image => (
          <Card key={image.id} style={{ width: '250px', margin: '10px' }}>
            <CardMedia component="img" alt={image.name} height="200" width="500" image={image.url} />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {image.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ImageList;
