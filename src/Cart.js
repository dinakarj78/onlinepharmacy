                                            /* eslint-disable react/prop-types */
import {Component, React} from "react";
import { Button, Paper, Typography } from "@mui/material";
import { commerce } from "./Tablets";
import { Navs } from "./Home";


 export const Cart=()=>{
     return(
         <div>
             <Navs/>
            <ShowCart />
         </div>
     )
 }   

class ShowCart extends Component{
    constructor(){
        super();
       this.state={
         total:0,
         sum:0
       }
       commerce.cart.retrieve().then((cart) => {this.setState({
        total:cart.total_items,
        sum:cart.subtotal.formatted_with_code
       })
    }
    );
    }     
        render(){    
        return(
        <Paper elevation={3} className="paperStyles">
        <Typography variant="h3" textAlign='center'>CART</Typography>
        <Typography variant="subtitle1" margin='20px'>total no.of Items:{this.state.total}</Typography>
        <Typography variant="subtitle1" margin='20px'>total Amount:{this.state.sum}</Typography>
        <Button variant="contained" marginLeft='20px'>PAY AMOUNT</Button>
      </Paper>);
}
}