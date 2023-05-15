import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
function Profile() {
    const [user,setUser]=useState({})
    useEffect(()=>{
        let info=JSON.parse(localStorage.getItem("user"))
        setUser(info)
    },[])
  return (
    <div className="container">
         <Typography variant="h4" component="h2">
            Profile
      </Typography>
    {
        user && (
            <Card className='card' style={{padding:"20px",width:"300px",height:"300px"}}>
          <Avatar 
          alt="Remy Sharp" 
          src={user.image}
          sx={{ width: 100, height: 100 }}
          />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
               FirstName: {user?.firstName}  
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
               LastName:  {user?.lastName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
               Age:  {user?.age}  
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
               Email:  {user?.gmail}  
              </Typography>
            </CardContent>
          </Card>
        )
    }
    </div>
  )
}

export default Profile
