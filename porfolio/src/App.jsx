import React from "react";
import "./Styles/App.css";
import Header from "./Component/Header.jsx";
import About from "./Component/About.jsx";
import Skill from "./Component/Skill.jsx";
import Project from "./Component/Project.jsx";
import Education from "./Component/Education.jsx";
import Internship from "./Component/Internship.jsx";
import Achievements from "./Component/Achivement.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Fotter.jsx";

function App () {
  return (
    <>
    <div style={{
  background: 'linear-gradient(to bottom, #f0f8ff, #e6e6fa)', // AliceBlue to Lavender

  color: '#000'
}}>

    <Header />,
    <About />,
    <Skill />,
    <Project />,
    <Education />,
    <Internship />,
    <Achievements />,
    <Contact />,
    <Footer />
    </div>
    </>
  )
}
export default App;