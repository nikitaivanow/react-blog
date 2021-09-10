import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
  return ( 
  <div style={{display:'flex',justifyContent:'center', marginTop: '50px'}}>
    <div className={classes.loader}>
    </div>   
  </div>
   );
}
 
export default Loader;