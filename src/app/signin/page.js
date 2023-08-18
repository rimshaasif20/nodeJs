"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, TextField, Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../Layout.module.css';
import { configIP } from '../config';
function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
const router= useRouter();

const user= JSON.parse(localStorage.getItem("user"));
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${configIP}/user/login`, {
                username: username,
                password: password,
            });
            console.log("Response", response);
            localStorage.setItem("user", JSON.stringify(response.data.user._id));
             router.push("/screens/imageupload")
            if (response.status === 200) {

                console.log('Data sent successfully.');

            }
          
        } catch (error) {
            console.error('Error sending data:', error);
        }

    };
    useEffect(()=>{
     if(user!=null){
        router.push("/screens");
     }
    
    },[])

    return (
        <>
    <style jsx global>
         {`
    body {
      overflow: hidden;
    }
  `}
    </style>
        <Container className={styles.image} maxWidth="sm" style={{marginTop : "9rem"}} >
        <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
            <Typography variant="h4" component="h1" color="black">
                Sign In
            </Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1rem' }}>
                    <TextField
                        type="text"
                        id="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <TextField
                        type="password"
                        id="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
             <Typography variant="body2" style={{ marginTop: '10px' }}>
    <Link href="/">Back to Sign Up</Link>
  </Typography>
                </div>
                 
            </form>
        </Container>
        </>
    );
}

export default SignIn;
