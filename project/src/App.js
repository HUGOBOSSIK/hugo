import React, {useState} from "react";

import './App.css';
import './responsive.css';
import Header from "./Components/Header.jsx";
import Blog from "./Components/Blog.jsx";
import Title from "./Components/Title.jsx";
import Nav from "./Components/Nav.jsx";
import Tabs from "./Components/Tabs.jsx";
import Articles from "./Components/Articles.jsx";
import Banner from "./Components/Banner.jsx";
import Post from "./Components/Post.jsx";
import Job from "./Components/Job.jsx";
import Subscribe from "./Components/Subscribe.jsx";
import Footer from "./Components/Footer.jsx";
//import Spin from "./Components/Spin.jsx";
import Modal from "./Modal/Modal.jsx";
//import Snake from "./Components/Snake.jsx";
function App() {
      const [show, setShow] = useState(false)

  return (
    <div className="App">
        <Header>
        </Header>
          <button  className="btn_modal" onClick={() => setShow(true)}>Sign in</button>
        <Modal onClose={() => setShow(false)} show={show}/>
        <Title/>
        <Nav/>
        <Blog/>
        <Tabs/>
        <Articles/>
        <Banner/>
        <Post/>
        <Job/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}

export default App;
