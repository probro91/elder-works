import NavBar from "./components/NavBar"
//import Posts from "./Components/Posts"
//import { useState } from "react"
import Posting from "./pages/Posting"
import Explore from "./pages/Explore"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Search from "./pages/Search"

function App() {
  return (
    <div>
      <>
        <NavBar/>
        <div className = "container">
          <Routes>
            <Route path = "/" element = {<Home />} />
          </Routes>
          <Footer />
        </div>
        {}
      </>
    </div>
  );
}

export default App;

