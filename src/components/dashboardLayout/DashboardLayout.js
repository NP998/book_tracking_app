import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {BiAdjust} from 'react-icons/bi';
import Darkmode from '../../components/darkmode/Darkmode';
const navItems=[
    {
        name:"MyBooks",
        icon:<AiOutlinePlayCircle/>,
        link:"/"
    },
    {
        name:"Add New Books",
        icon:<IoIosAddCircleOutline/>,
        link:"addnewbooks"
    },
    {
        name:"Settings"
    }
    // {
    //     name:"Dark Mode",
    //     icon:<BiAdjust/>,
    //     link:"darkmode"
    // }
]

const DashboardLayout=({children})=>{
    const location=useLocation()
    return(
        <div className="dashboard-layout">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <h3>Library</h3>
                </div>
                <div className="nav-container">
                   { navItems.map((navItem,index)=>(
                       <Link to={navItem.link}>
                           <div key={index} className={`nav-item ${navItem.link===location.pathname?'selected':""}`}>
                               { navItem.icon}
                               <label className="item-name">{navItem.name}</label>
                           </div>
                       </Link>
                   ))}
                  <div className="dark-mode">
                     <div className="dark-icon">
                       <BiAdjust/>
                     </div>
                      <p>Dark Mode</p>
                      <Darkmode/>
                     </div>
                  </div>

            </nav>
           
            <div className="main-container">
              {children}

            </div>
        </div>
    )
}

export default DashboardLayout;