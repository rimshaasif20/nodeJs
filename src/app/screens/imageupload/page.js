"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Button, Container, Box } from '@mui/material';
import withAuth from '../../restrict/withAuth'
import { configIP } from '@/app/config';
const Image = () => {
    const [selectedImage, setSelectedImage] = useState(null);

   
const userId= JSON.parse(localStorage.getItem('user'));

   const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = (event) => {
           
            const imageDataUrl = event.target.result;

            setSelectedImage(imageDataUrl);
           
        };


        reader.readAsDataURL(file);
    }
};


    
    const handleImageSubmit = async () => {
    try {
        if (selectedImage) {
            // Convert the data URL to a Blob object
            const blob = await fetch(selectedImage).then((res) => res.blob());

            // Create a new FormData instance and append the Blob
            const formData = new FormData();
            formData.append('media', blob, 'image.jpg'); // You can set a filename here

            const response = await axios.post(`${configIP}/image/upload/${userId}`, formData);
            console.log(response.data); // Assuming the server responds with data
        } else {
            console.error('No image selected');
        }
    } catch (error) {
        alert("image is too large")
        console.error('Error uploading image:', error);
    }
};
    return (
       <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
  <input
    accept="image/*"
    style={{ display: 'none' }}
    id="image-upload"
    type="file"
    onChange={handleImageUpload}
  />
  <label htmlFor="image-upload">
    <Button variant="contained" component="span">
      Select Image
    </Button>
  </label>
  {selectedImage && (
    <Box mt={3}>
      <Typography variant="h6">Uploaded Image</Typography>
      <img src={selectedImage} alt="Uploaded" style={{width: "350px", height: "300px"}} />

      <Box mt={2}>
        <Button variant="contained" onClick={handleImageSubmit}>
          Upload Image
        </Button>
      </Box>
    </Box>
  )}
</Container>

    );
};

export default withAuth(Image);
