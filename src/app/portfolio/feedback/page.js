"use client"
import React, { useState } from 'react';
import { Button, Card, CardContent, CardActions, Typography, IconButton, TextField } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import axios from 'axios';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setImageName(event.target.value);
  };

  const handleUpload = async () => {
    if (selectedFile && imageName) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('name', imageName);

        const response = await axios.post('http://192.168.1.215:5000/image/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Upload response:', response.data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <Card style={{ marginTop: '5rem', marginLeft: '25rem', width: 300, height: 250,backgroundColor: "white" }}>
      <CardContent>
        <Typography variant="h5">Upload an Image</Typography>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="image-upload"
          type="file"
          onChange={handleFileChange}
        />
        <TextField
          fullWidth
          label="Image Name"
          variant="outlined"
          margin="normal"
          value={imageName}
          onChange={handleNameChange}
        />
        <label htmlFor="image-upload">
          <IconButton color="primary" >
            <PhotoCameraIcon />
          </IconButton>
        </label>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleUpload}>
          Upload
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageUpload;
