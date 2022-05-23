import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography} from "@mui/material";
import { Paper } from '@mui/material';

export default function Admin(){
    const buttonstyle={
        marginTop:'20px'
    }
    const paper={
        borderColor:'#000000'
    }
    return(
        <div margin="auto">
            <Paper className='paperStyles' style={paper} elevation="24" sx={{borderradius:"50px",height:'auto'}}>
            <div>
                <Typography variant='h6' sx={{textAlign:'center'}}>ADMIN PANEL</Typography>
            <TextField
             required
             id="Email"
             placeholder="company Name"
             size="medium"
             sx={{marginTop:'10px',marginLeft:'15px'}}
             />
            </div>     
        
             <TextField
             required
             id="Password"
             placeholder="productname"
             type="text"
             size="medium"
             sx={{marginTop:'10px',margin:'15px'}}
             />

            <TextField
             required
             id="Password"
             placeholder="productPrice"
             type="text"
             size="medium"
             sx={{marginTop:'10px',margin:'15px'}}
             />
             <div style={buttonstyle}>
             <Button variant='contained' sx={{marginLeft:'15px'}} onClick={pushToDB()}>Add To The DataBase</Button>
             </div>
             </Paper>
        </div>
    )
}

const pushToDB=()=>{
console.log(document.getElementById('Email').value);
}