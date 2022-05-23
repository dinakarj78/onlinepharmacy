import React,{useEffect} from "react";
import { Navs } from "./Home";
import Commerce  from '@chec/commerce.js';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import ShowProducts from "./ShowProducts";


export default function Tablets(){
    return(
    <div>
        <Navs/> 
        <FetchProducts/>
    </div>
    );
}
 export const commerce=new Commerce("pk_29127732ffc721c838aefb211251e140ed6900ba27221",true);

const FetchProducts=()=>{

    const [prodcuts,setProducts]=useState([]);
     const fetchProducts= async ()=>
     {
      const { data }=await commerce.products.list();
      setProducts(data);
      }   
      commerce.products.retrieve('prod_RyWOwmddnAlnEa')
  .then((product) => console.log(product.name)); 

   useEffect(()=>{
     fetchProducts();
      },[])

    const styles=
   {
      position:'relative',
      marginTop:'auto',
      marginLeft:'320px',
      width:'800px',
      height:'max-content',
      
   }
   const headerstyle=
   {
       marginTop:'65px',
       textAlign:'center',
       fontSize:'105px',
       color:'black',
   }

    return(
        <div>
          <h1 style={headerstyle}>Tablets</h1>
             <Grid  container  spacing={3} style={styles} >
              {
                prodcuts.map((item)=>(
                  <Grid item xs={3} lg={6} md={3} xl={3} key={item} >
                   <ShowProducts items={item}/>
                </Grid>
                ))
              }   
             </Grid>
       </div>
    );
}   