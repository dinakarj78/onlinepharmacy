                                            /* eslint-disable react/prop-types */

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { IconButton } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './cardstyling.css'
import Commerce  from '@chec/commerce.js';
import { commerce } from './Tablets';

class  ShowProducts extends React.Component{
     Commerce=new Commerce("pk_29127732ffc721c838aefb211251e140ed6900ba27221",true);


    constructor(){
       super();
       this.state={i:0,
                  productId:[],
                  clicked:""}
    }

    render(){
     const  item=this.props.items;
 return (
 <Card className="root" variant="outlined">
     <CardHeader className="title" title={item.name}></CardHeader>
     <CardMedia className="media" image ={item.media.source}  title="cpu"/>
       <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
             <Typography className="price" >{item.price.formatted_with_symbol}</Typography>
                <CardActions className="addtoCart" >
                   <IconButton aria-label="add  to cart" color="secondary" onClick={()=>{  
                       commerce.cart.add(item.id, updateCount(this.state.i) ).then((response) => console.log(response));
    }}>
                      <AddShoppingCartRoundedIcon />
                   </IconButton>
                </CardActions>
          </AccordionSummary>
          <AccordionDetails>
             <CardContent className="content">
                <Typography  dangerouslySetInnerHTML={{__html:item.description }}  variant="body2" />
             </CardContent>
          </AccordionDetails>
       </Accordion>
 </Card>
   )
 }
 }

 function updateCount(i){
     return i+1;
 }
 
 export default ShowProducts;
