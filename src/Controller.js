import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import DashboardLayout from './components/dashboardLayout/DashboardLayout';
import MyBooks from './screen/mybooks/MyBooks';
import AddNewBooks from './screen/addnewbooks/AddNewBooks';
const Controller=()=>{
    return(
        <div>
          
            <Router>
                <DashboardLayout >
                     <Switch>
                         <Route exact path="/" render={(props)=><MyBooks {...props}/>}/>
                         <Route  path="/addnewbooks" render={(props)=><AddNewBooks {...props}/>}/>
                         {/* <Route  path="/darkmode" render={(props)=><DarkMode {...props}/>}/> */}
                     </Switch>
                 </DashboardLayout>
            </Router>
        
        </div>

)}

export default Controller;