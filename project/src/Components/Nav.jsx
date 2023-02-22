
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';

import React, { useState } from "react";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
        return (
            <section className="Nav">
                <div className="container">
                    <div className="main_nav">
                        <ul className="nav_menu">
                            <li className="sub_menu">
                                <a className="item_menu" href="/">News</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="/NewsPage">Opinions</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Science</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Life</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Travel</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Moneys</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Art & Design</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Sports</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">People</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Health</a>
                            </li>
                            <li className="sub_menu">
                                <a className="item_menu" href="#">Education</a>
                            </li>
                        </ul>
                    </div>
                    <div className="responsive_menu_bar">
                        <button className="responsive_btn" onClick={toggleMenu} >
                            {openMenu ? (
                                <div>
                                    <ul className="nav_menu">
                                        <li className="sub_menu">
                                            <a className="item_menu" href="https://www.youtube.com">News</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Opinion</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Science</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Life</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Travel</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Moneys</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Art & Design</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Sports</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">People</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Health</a>
                                        </li>
                                        <li className="sub_menu">
                                            <a className="item_menu" href="#">Education</a>
                                        </li>
                                    </ul>
                                </div>
                            ) : null}
                            <FontAwesomeIcon icon={faCaretDown} />
                        </button>
                    </div>

                </div>
            </section>
        )
    }


export default Nav;



