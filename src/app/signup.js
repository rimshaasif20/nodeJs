"use client"
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import styles from './Layout.module.css';
import { configIP } from './config';
import { Typography, TextField, Button, Container } from '@mui/material';
import {useRouter} from 'next/navigation';

import { isAuthenticated } from './restrict/withAuth'; 
import Link from 'next/link';
// export function Upload() {
//   if (!isAuthenticated()) {
//     router.push('/signup');
//     return null;
//   }
// }

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const router=useRouter();
const user=JSON.parse(localStorage.getItem("user"))
useEffect(()=>{
if(user!=null)
{
  router.push("/screens");
}
},[])
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${configIP}/user/register`, {
      username: username,
      password: password,
    });

    if (response.status === 201) {
      console.log('Data sent successfully.');
      localStorage.setItem('userAuthenticated', 'true'); 
      router.push('/signin');
    }
  } catch (error) {
    console.error('Error sending data:', error);
  }
};



  return (
    < >
    
 <style jsx global>
  {`
    body {
      overflow: hidden;
    }
    
    @keyframes backgroundAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}
</style>

  <Container className={styles.image} maxWidth="sm" >
    <div style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem' }}>
      <Typography variant="h4" component="h1" color="black">
        Sign Up
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
          color="primary"
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
          color="primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Typography variant="body2" style={{ marginTop: '10px', color: "black"  }}>
    <Link href="/signin">Already exist</Link>
  </Typography>
      </div>
    </form>
  </Container>
</>

   )
}

export default SignUp;
