import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const User=()=>{

    return(
        <div>
            <h1 className="heading">About Us</h1>
            <div className='container'>
             <Card sx={{ maxWidth: 800 }}>
          <CardActionArea>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           <strong>Welcome to Delicious Bites - Your Ultimate Food Destination!</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           At Delicious Bites, we take pride in offering a delightful culinary experience to our esteemed customers. Our food website is your one-stop destination for discovering mouthwatering dishes, exploring new flavors, and connecting with the finest restaurants in town. Whether you're a food enthusiast looking to try new cuisines or someone craving comfort food from your favorite local eatery, we've got you covered!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
   
        </div>
    )
}
export default User;