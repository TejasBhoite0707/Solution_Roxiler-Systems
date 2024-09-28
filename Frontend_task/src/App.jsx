import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
function App() {
  return(
    <>
 <Navbar/>
 <div className="pt-20">
 <Outlet/>
 </div>

 <Footer/>
    </>
  )

 
}

export default App;
