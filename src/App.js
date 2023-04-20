import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { Routes,Route } from "react-router-dom";



function App() {
  return (
    <>
     <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
     </Routes>
    
   
     </>
   
  );
}

export default App;
