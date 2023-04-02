

// React Components
import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import { Link } from "react-router-dom";



const MyNav = () => {

  const [query, setQuery] = useState()

  const handleChange = (d) => {
    console.log(d.target.value);
    setQuery(d.target.value);
  };

  // Create the value in State - Applies to both
  const [darkMode, setDarkMode] = useState(false)

  const [name, setName] = useState('')


  useEffect(() => {
    // Looking for darkMode Value, loading into darkModeValue variable
    let darkModeValue = localStorage.getItem("darkMode")
    // IF a Dark Mode value is present
    if (darkModeValue === "true") {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
    let name = localStorage.getItem("name")
    if (name) {
      setName(name)
    }
  }, [])

  // Allows us to 'grab' the input, and see it within the Console
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  // Saving the name to LocalStorage
  const handleSaveName = (e) => {
    if (name !== "") {
      localStorage.setItem("name", name)
    } else {
      console.log("Do Not Enter Numbers")
    }
  }

  // Clikcing on this changes darkMode to False, save to Local Storage
  const handleWhite = (e) => {
    setDarkMode(false)
    localStorage.setItem("darkMode", "false")
  }

  // Clicking on this changes darkMode to True, save to Local Storage
  const handleBlack = (e) => {
    setDarkMode(true)
    localStorage.setItem("darkMode", "true")
  }


  return (

    <Navbar query={query} onChange={handleChange} expand="lg" variant="light" className="navbar" >

      {/* Linking the two stylesheets css, Condition: If not darkMode, load Lightmode CSS, ELSE Load the darkMode css */}
      <link rel="stylesheet" type='text/css' href={!darkMode ? '/light.css' : '/dark.css'}></link>
      <Container>

        <Navbar.Brand className="Logo" href="#"><strong>GAME 4 YOU</strong></Navbar.Brand>

        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item className="navItem">
            <Link to="/" className='navLink'>Home</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="./products" className='navLink'>Products</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="./requests" className='navLink'>Requests</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="./contact" className='navLink'>Contact</Link>
          </Nav.Item>
        </Nav>
        <div className="input-group mb-3 w-25 mt-2 name-area">
          <input onChange={(e) => handleNameChange(e)} type="text" className="form-control" placeholder="Enter a Username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button onClick={handleSaveName()} className="btn btn-outline-info" type="button" id="button-addon2">Sign-Up</button>
          <div className="name-spot">
            <p id="welcome" className='p-1'>Welcome, {name && name}</p>
          </div>
        </div>

        <div id="theme">
          {/* Using the two Functions we made to switch between true and false */}
          <button onClick={handleWhite} type="button" className="btn btn-light btn-sm">Light</button>
          <button onClick={handleBlack} type="button" className="btn btn-dark btn-sm">Dark</button>

        </div>
      </Container>
    </Navbar>



  );
}
export default MyNav;

