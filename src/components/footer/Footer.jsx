import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer className="footer">
      <div className="footer__container container">
      <h1 className="footer__title">Prakhar</h1>

      <ul className="footer__list">
       
       <li>
        <a href='#about' className="footer__link">About
        </a>
       </li>
       <li>
        <a href='#skills' className="footer__link">Skills
        </a>
       </li>

       <li>
        <a href='#projects' className="footer__link">Projects
        </a>
       </li>

      </ul>
       

    <div  className="footer__link" >

            <a href="https://www.instagram.com/artistic_prakhar/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/prakhar-singh-150622208/" className="footer-icon" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/prakharsingh123" className="footer-icon" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github"></i>
            </a>
                </div>

     </div>



      </footer>
    </div>
  )
}

export default Footer
