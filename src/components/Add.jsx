import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Fab, Tooltip,Modal, Box, styled, Typography, Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';


const StyledModal = styled(Modal) ({
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
})

const UserBox = styled(Box) ({
    display : "flex",
    alignItems : "center",
    gap : "10px",
    marginBottom :"20px"
})

const Add = () => {

    const[open,setOpen] = useState(false)
  return (
    <>

        <Tooltip onClick={e=>setOpen(true)} title="Add post" sx={{position :"fixed" , bottom: 20, left:{xs:"calc(50%-25px)",md:30}}} >

        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>

        </Tooltip>


        <StyledModal
            open={open}
            close={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
           <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
           <UserBox>
           <Avatar sx={{width:30 , height: 30}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" onClick={e=>setOpen(true)}/>
           <Typography fontWeight="500" variant="span">John Doe</Typography>
           </UserBox>

           <TextField
           sx={{width : "100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder ="What's on your mind??"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiEmotionsIcon color="primary" />
        <ImageIcon color="secondary" />
        <VideoLibraryIcon color="success" />
        <PersonAddIcon color="error" />
        
        </Stack>

        <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
            <Button>Post</Button>
            <Button sx={{width: "100px"}}><DateRangeIcon /></Button>
            
        </ButtonGroup>





        </Box>

        </StyledModal>
      
    </>
  )
}

export default Add
