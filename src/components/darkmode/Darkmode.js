import React, { useState } from 'react';

const Darkmode=()=>{
   const [dark,setMode]=useState(false)
    return(
        <div className= {dark?"App dark-modes":"App"}   >
            <div className="nav">
           
           
              <label class="switch">
               <input type="checkbox"  onChange={()=>setMode(!dark)} />
               <span class="slider round"></span>
              </label>
            </div>
            <div className="content">
                
            </div>
        </div>
    )
}

export default Darkmode;