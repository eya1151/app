import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './componet/Home/Home';
import Services from './componet/Services/Services';
import Profile from './componet/Profile/Profile';
import Navbar from './componet/Home/Navbar/Navbar';
import Marketing from './componet/Services/Marketing';
import Developpement from './componet/Services/Developpement';
import Connect from './componet/Profile/Connect';
import Posts from './componet/Register/Posts';
import Update from './componet/Profile/Update';



function App() {
  return (
    <div className='container'>
      <Navbar/>
<Routes>
  <Route path ="/" element={<Home/>}/>
  <Route path ="/services" element={<Services/>}>
  <Route path ="/services/Developpement" element={<Developpement/>}/>
  <Route path ="/services/marketing" element={<Marketing/>}/>
  </Route>
  <Route path ="/profil" element={<Profile/>}/>
  <Route path ="/connect" element={<Connect/>}/>
  <Route path ="/register/post" element={<Posts/>}/>
  <Route path ="/edit/user/:id" element={<Update/>}/>
  {/*<Route path ="/profil/*" element={<Profile/>}/>*/}
  
</Routes>


    </div>
  );
}

export default App;
