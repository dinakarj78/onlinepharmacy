import React from "react";
/*import Card from '@mui/material/Card';*/
import { Paper, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import { TextField } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
/*import { BrowserRouter } from "react-router-dom";*/



 export default function Home(){
    return(
        <div>
            <Navs/>
            <Banner/>
        </div>
    );
} 


const Banner=()=>{
    return(
        <Paper elevation={10} sx={{height:'500px',width:'1200px',marginLeft:'100px'}}>
            <div className="WelcomeBanner" sx={{backgroundColor:'1d1817'}}>  
               <img src={require("./Images/Signin.png")} alt="off"/> 
              <div padding-left="30px"className="headers">
               <h1 padding="left" >
               WELCOME,
               </h1>
               <Typography variant="h4">Click on categories above  to start shopping.</Typography>
               <br></br>
                <h3>Your currency, your location.</h3>
                <br></br>
                <Typography lineheight="1.7"  class="description">
                At WebMeds  we  offer you a great variety of deals on medicines and other medical necessities and many more</Typography>
                <br></br>
                <Typography  gutterbottom fontSize="20px" class="description">
                We can assure with the lowest price and great deals and we also have easy returns.</Typography>
                <br></br>
                   </div>
                   </div>       
        </Paper>             
        )
}

const Navs=()=>{
return(
    <div>
    <div className="Navs">
    <ul>
    <Link to="/Home">
        <img src={require("./Images/webmeds.png")}/>
    </Link>
    <Link to="/Home">Home  </Link>
    <Link to="/Tablets">Tablets  </Link>
    <Link to="/Medical Accessories">Medical Accessories  </Link>
    <TextField
             required
             id="search"
             placeholder="Search"
             type="search"
             size="medium"
             sx={{marginTop:'10px',marginLeft:'100px'}}
             />
    <Link to="/Cart"><ShoppingCartIcon sx={{marginLeft:'250px',fontSize:30,"&:hover": { cursor:'pointer'}, }}/>    </Link>
    </ul>  

    </div>
    </div>)
}



export {Navs}