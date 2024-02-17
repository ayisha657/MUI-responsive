import React from 'react'
import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Divider} from '@mui/material'

const Rightbar = () => {
  return (
    <Box 
   
    flex={2} 
    p={2}
    sx={{display:{xs : "none" , sm: "block"}}}
    >
      <Box position="fixed" width={300}>
         <Typography variant="h6" fontWeight={100}>Online Friends</Typography>

         <AvatarGroup max={7}>
              <Avatar alt="Remy Sharp" src="https://www.brose.com/de/media/career-pictures/ansprechpartner_1/brose_friedrich-maren_2023_contact4.jpg" />
              <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/989111356/photo/smiling-beautiful-black-businesswoman-working-in-call-center.jpg?s=612x612&w=0&k=20&c=FujXkaYMLlZ0xoYALOMT-I5mEIQ9pip1ZYYPcyO7XWo=" />
              <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1413684612/photo/call-center.jpg?s=612x612&w=0&k=20&c=XTAG3pUQB3ZhpYsu072Q7k3jxZt5uCA6tuK2zg0I_1E=" />
              <Avatar alt="Agnes Walker" src="https://www.home.sandvik/contentassets/b93668aa40fa4d87ad4f4224c6af3acf/maria.jpg?width=400&height=260&rmode=crop&rsampler=bicubic&compand=true&quality=90&v=1693819013&hmac=105c3fd5f41b7c3bdd1654bdf996572307f772e71608504ecd877ec628242976" />
              <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz27w_idb673-DdCq5wTrR-9EV6YnqjqasLA&usqp=CAU" />
              <Avatar alt="Bennyi Davisson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz27w_idb673-DdCq5wTrR-9EV6YnqjqasLA&usqp=CAU" />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </AvatarGroup>

          <Typography varian="h6" fontWeight={100} mt={2} mb={2}>
                Latest photos
          </Typography>
          
          <ImageList cols={3} rowHeight={150} gap={3}>

            <imageListItem>
              <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" width="95" height="100" alt=""  />
            </imageListItem>

            <imageListItem>
              <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" width="95" height="100" alt="" />
            </imageListItem>

            <imageListItem>
              <img src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format" width="95" height="100" alt="" />
            </imageListItem>

            
            
            

          </ImageList>

          <Typography varian="h6" fontWeight={100} mt={2} mb={2}>
                Latest Conversations
          </Typography>

          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.brose.com/de/media/career-pictures/ansprechpartner_1/brose_friedrich-maren_2023_contact4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://www.home.sandvik/contentassets/b93668aa40fa4d87ad4f4224c6af3acf/maria.jpg?width=400&height=260&rmode=crop&rsampler=bicubic&compand=true&quality=90&v=1693819013&hmac=105c3fd5f41b7c3bdd1654bdf996572307f772e71608504ecd877ec628242976" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>


     
    </Box>
  )
}

export default Rightbar
