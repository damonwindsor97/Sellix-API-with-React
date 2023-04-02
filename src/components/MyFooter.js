import React from 'react'


export default function MyFooter() {



  
  return (
    <div>
      <footer className="myFooter">
        <p className="footerCopyright">&copy; Developed by Damon Windsor using the Sellix API <br></br> Some images from Unsplash</p>
        <a href="https://discord.gg/wCTCR5FN4Q"><img className="discordLogo" src={require("../images/Discord-colour.png")} alt="Discord" /></a>

      </footer>
    </div>

  )
}