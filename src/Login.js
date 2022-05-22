import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from   "react";
import MediaQuery from "react-responsive";
import TextField from '@mui/material/TextField';

import history from "./history";

export default function Login() {
  function check(){
history.push('/Home');  
  }
  function ulogin(){
    history.push('/Login')
  }
  
  return (
           <div>
        
           <MediaQuery minWidth={1024}>
          <Container>

           <Box sx={{height: '500px', width:'85%',marginLeft:'10%',marginTop:'5%', borderRadius:'16px',bgcolor:'#ffffff' }}>
              <img src={require("./Images/Signin.png")} sx={{height:'100%'}} style={{float:'left',marginRight:'80px'}}/> 
          
          <Typography variant="h3" sx={{marginTop:'5%',marginBottom:'0px'}}>
              Online pharmacy Store
           </Typography>

           <TextField
             required
             id="Email"
             placeholder="EmailID"
             size="medium"
             sx={{marginTop:'10px',}}
             />
             
             <TextField
             required
             id="Password"
             placeholder="Password"
             type="password"
             size="medium"
             sx={{marginTop:'10px',}}
             />

            <div> <Button variant="contained" onClick={check}sx={{clear:'both',marginTop:'25px'}}>SIGN IN </Button>  </div>
            <div> <Button variant="contained" onClick={ulogin}sx={{clear:'both',marginTop:'25px'}}>Register </Button>  </div>
            
           </Box> 
          </Container> 
          </MediaQuery> 
          </div>
  );
}
