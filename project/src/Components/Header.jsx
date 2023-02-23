import Subs from '../img/subcription.png';
import React, {useState} from "react";
let open = document.querySelector('.subscription');
function openW() {
    let win = window.open(" ", "win", "width = 1000, height=1000, top=1000, left=1000");
    win.document.write('');

};
/*
var menuBtn = document.getElementById("menu-btn");
var menuContainer = document.getElementById("menu-container");

menuBtn.addEventListener("click", function() {
    menuContainer.classList.toggle("show");

    if (menuContainer.classList.contains("show")) {
        menuBtn.innerHTML = "Close menu";
    } else {
        menuBtn.innerHTML = "Sections";
    }
});

*/
const Header = () => {
    const [show, setShow] = useState(false)
    return (

        <section className="Header">
            <div className="container">
                <div className="wrapper__menu">
                    <div className="menu">
                        <button id="menu-btn">Sections</button>
                        <div id="menu-container">
                        <ul className="responsive_menu_burger">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Main</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Comming soon</a></li>
                        </ul>
                        </div>
                    </div>

                    <form className="search_block">
                        <input className="place_for_search" type="text" id="text-to-find" value="" placeholder="Search"
                               autoFocus/>

                    </form>
                    <div className="subscription">
                        <button className="subs_img" onClick={openW}>
                            <img src={Subs} alt="Subs"/>
                        </button>
                        <div className="price_block">
                            <p>Subscribe Now</p>
                            <p>3 month for $19</p>
                        </div>
                        <div className=""></div>
                    </div>



                </div>
            </div>

        </section>


    )
}






export default Header;