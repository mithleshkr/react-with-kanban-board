import React from 'react'
import {  Route,Routes,HashRouter } from 'react-router-dom'
// import Backlogs from './components/backlogs/Backlogs'
import Dashboard from './Components/dashboard/Dashboard';
import Header from './Components/header/Header';
import Navbar from './Components/navbar/Navbar';
import Login from './Components/login/Login';
import Backlogs from './Components/backlogs/Backlogs';
import Project from './Components/project/Project';
import Signup from './Components/registration/Signup';


const App = () => {
  return (
    <div>      
      <HashRouter>
        <Routes>
        <Route path='/' exact  element={<Login />} />
        <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard'  element={<Dashboard />} />
          <Route path='/header'  element={<Header />} />
          <Route path='/nav'  element={<Navbar />} />
          <Route path ='/backlog' element={<Backlogs />} />
          <Route path='/project' element={<Project />} />
          
          
          
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;




// import React from 'react'
// import Dashboard from './Components/dashboard/Dashboard'
// import Header from './Components/header/Header'
// import Navbar from './Components/navbar/Navbar'

// const App = () => {
//   return (
//     <div>
   
//     <Dashboard />
//     </div>
//   )
// }

// export default App;