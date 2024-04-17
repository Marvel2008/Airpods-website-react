import "./header.css"
import buttons from "../resourses/resourses"
import logo from "../../assets/Logo.svg"
function Header({active}) {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__top">
                        <a href="#" className="logo">
                            <img src={logo} alt="" />
                        </a>
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <a className="menu__link">Info</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link">Product</a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link">Contacts</a>
                                </li>
                                <li className="menu__item menu__item-btn">
                                    <button className="menu__btn">BUY</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__content">
                        <h1 className="title">
                            <span className="title--air">Air</span><span className="title--pod">Pod</span><span className="title--s">S</span><span className="title--m">M</span><span className="title--ax">AX</span>
                        </h1>
                        <div className="header__content-images">
                            { buttons.map((elem, index)=>(
                                <img key={index} className={`content-item ${elem.data_button} ${active===elem.data_button ? "content-item__active" : ""} `} src={elem.header_img}/>              
                            ))}                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;