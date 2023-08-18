 "use client"
import './style.css';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Footer from './footer/page';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
const portfolio=()=>{
 const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

   
    return(
       <>
       <h1 className="heading">Portfolio</h1> 
       <div className='container'>
       <div className='dish'>
       <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image="shrimp.jpg" 
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    <div className='dish'>
       <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chicken Manchurian"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="300"
        image="chicken-manchurian.jpg" 
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Chicken Manchurian is a dish of diced chicken fried with a thick sauce of ginger, garlic and green chillies – an essential combination in Bengali cuisine.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           Cut chicken into small cubes and marinate with flour, egg, garlic powder, black pepper, white pepper, salt and 1 tbsp oil. (Approximately half an hour).
          </Typography>
          <Typography paragraph>
           Now heat oil a deep pan over medium heat. Deep fry the marinated chicken and keep aside.Heat 2 tablespoon oil in a pan and saute chopped garlic in it. Then add green pepper, spring onion and stir fry for few minutes. Now add pineapple chunks and stir fry for another 2 minutes.Add fried chicken and stir in the ketchup, chili garlic sauce, salt, black and white pepper.Add a glass of water and cook for 3 minutes.Add Worcester sauce and let it simmer for few minutes.
          </Typography>
          <Typography paragraph>
            Add Worcester sauce and let it simmer for few minutes.Dissolve corn flour in little water and add to the sauce while stirring.Let it simmer for few minutes or until sauce is thickened.Just before serving add a few drops of lemon juice and dish it out.Delicious Chicken Manchurian is ready to serve.
          </Typography>
          <Typography>
           Serve hot with egg fried rice.
          </Typography>
        </CardContent>
      </Collapse>
    </Card> 
    </div>
    <div className='dish'>
       <Card sx={{ maxWidth: 345 }}>
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Fried Fish"
        subheader="December 20, 2017"
      />
      <CardMedia
        component="img"
        height="300"
        image="fish.jpg" 
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Baked or boiled fish is a better source of heart-healthy omega-3 fatty acids than fried, salted or dried fish.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           Cut chicken into small cubes and marinate with flour, egg, garlic powder, black pepper, white pepper, salt and 1 tbsp oil. (Approximately half an hour).
          </Typography>
          <Typography paragraph>
           Now heat oil a deep pan over medium heat. Deep fry the marinated chicken and keep aside.Heat 2 tablespoon oil in a pan and saute chopped garlic in it. Then add green pepper, spring onion and stir fry for few minutes. Now add pineapple chunks and stir fry for another 2 minutes.Add fried chicken and stir in the ketchup, chili garlic sauce, salt, black and white pepper.Add a glass of water and cook for 3 minutes.Add Worcester sauce and let it simmer for few minutes.
          </Typography>
          <Typography paragraph>
            Add Worcester sauce and let it simmer for few minutes.Dissolve corn flour in little water and add to the sauce while stirring.Let it simmer for few minutes or until sauce is thickened.Just before serving add a few drops of lemon juice and dish it out.Delicious Chicken Manchurian is ready to serve.
          </Typography>
          <Typography>
           Serve hot with egg fried rice.
          </Typography>
        </CardContent>
      </Collapse>
    </Card> 
    </div>
    
    </div>
    <Footer/>
        </>
    )
}
export default portfolio;

// import React, { useState } from 'react';
// import { Card, CardContent, CardActions, IconButton, Typography } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = ({ expand, onClick }) => (
//   <IconButton onClick={onClick} aria-expanded={expand} aria-label="show more">
//     <ExpandMoreIcon />
//   </IconButton>
// );

// const Portfolio = () => {
//   const [expandedCards, setExpandedCards] = useState(Array(3).fill(false)); // Change 3 to the number of cards

//   const handleExpandClick = (index) => {
//     setExpandedCards((prevExpanded) => {
//       const newExpanded = [...prevExpanded];
//       newExpanded[index] = !newExpanded[index];
//       return newExpanded;
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your submit logic here
//     // Only the expanded card(s) will be submitted
//     // You can access the expanded state of each card in the expandedCards array
//     console.log('Expanded Cards:', expandedCards);
//   };

//   // Sample data for cards
//   const cardData = [
//     { title: 'Shrimp and Chorizo Paella', content: 'This impressive paella is a perfect...' },
//     { title: 'Chicken Manchurian', content: 'Chicken Manchurian is a dish of diced chicken...' },
//     { title: 'Fried Fish', content: 'Baked or boiled fish is a better source of heart-healthy omega-3...' },
//   ];

//   return (
//     <>
//       <h1 className="heading">Portfolio</h1>
//       <div className='container'>
//         <form onSubmit={handleSubmit}>
//           {cardData.map((card, index) => (
//             <div key={index} className='dish'>
//               <Card sx={{ maxWidth: 345 }}>
//                 <CardHeader
//                   action={
//                     <IconButton aria-label="settings">
//                       <MoreVertIcon />
//                     </IconButton>
//                   }
//                   title={card.title}
//                   subheader="September 14, 2016"
//                 />
//                 {/* ...Rest of the Card content... */}
//                 <CardActions disableSpacing>
//                   <IconButton aria-label="add to favorites">
//                     <FavoriteIcon />
//                   </IconButton>
//                   <IconButton aria-label="share">
//                     <ShareIcon />
//                   </IconButton>
//                   <ExpandMore
//                     expand={expandedCards[index]} // Use the correct expanded state for each card
//                     onClick={() => handleExpandClick(index)} // Pass the index to handleExpandClick
//                   />
//                 </CardActions>
//                 {/* ...Rest of the Card content... */}
//               </Card>
//             </div>
//           ))}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
