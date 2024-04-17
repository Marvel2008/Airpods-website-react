import "./footer.css"
import logowhite from "../../assets/Logo-white.svg"
function Footer() {
    return(
        <>
        <footer className="footer">
                <div className="container">
                    <a href="" className="footer__link">
                        Find a retailer near you
                    </a>
                    <p className="footer__text">
                        Or call <a href="tel:800 207 758">800 207 758</a>
                    </p>
                    <a href="#" className="logo">
                        <img src={logowhite} alt=""/>
                    </a>
                    <ul className="footer__list">
                        <li className="footer__item">Copyright © 2023 Apple Inc. </li>
                        <li className="footer__item">All rights reserved.</li>
                        <li className="footer__item"><a href="#">Legal Notices</a></li>
                        <li className="footer__item"><a href="#">Site Map</a></li>
                        <li className="footer__item"><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
        </footer>
        
        </>
    )
}

export default Footer;