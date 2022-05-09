import {Routes , Route } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Opinion from "./components/Opinion/Opinion";
import Topbar from "./components/Topbar";




function App() {
  return (
    <div>
     <Topbar></Topbar>
     <Routes>
      <Route path="/Home" element={<Home></Home>}></Route>
      <Route path="/Blog" element={<Blog></Blog>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path='/Opinion'element={<Opinion></Opinion>}></Route>
      <Route path="/Contact" element={<Contact></Contact>}></Route>
     
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
