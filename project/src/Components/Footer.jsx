
import Log2 from '../img/logo_footer.png';




const Footer = () => {
    return (

        <footer className="Footer">
            <div className="container">
                <div className="footer_menu">
                    <div className="footer_block">
                        <h2>News</h2>
                        <ul className="sub_footer_menu">
                            <li className="item_menu">
                                <a href="#" onClick="" className="footer_btn">Nation</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">World</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Politics</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Solar Eclipse</a>
                            </li>

                        </ul>

                    </div>
                    <div className="footer_block">
                        <h2>Arts</h2>
                        <ul className="sub_footer_menu">
                            <li className="item_menu">
                                <a href="#">Art & Design</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Movies</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">People</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Video: Arts</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Theater</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer_block">
                        <h2>Travel</h2>
                        <ul className="sub_footer_menu">
                            <li className="item_menu">
                                <a href="#">Destinations</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Flights</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Business Travel</a>
                            </li>


                        </ul>
                    </div>
                    <div className="footer_block">
                        <h2>Sports</h2>
                        <ul className="sub_footer_menu">
                            <li className="item_menu">
                                <a href="#">Olympics</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Motor Sports</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Volleyball</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">MMA</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Cycling</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer_block">
                        <h2>Tech</h2>
                        <ul className="sub_footer_menu">
                            <li className="item_menu">
                                <a href="#">Tech</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Tech Columnists</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Tech Reviews</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Talking Tech</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer_block">
                        <h2>Money</h2>
                        <ul className="sub_footer_menu">
                            <li className="item_menu">
                                <a href="#">Markets</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Business</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Personal Finance</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Retirement</a>
                            </li>
                            <li className="item_menu">
                                <a href="#">Careers</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="footer_second_block">

                    <div className="contacts">
                        <a href="#">
                            <img src={Log2} alt="logo_footer"/>
                        </a>
                        <a href="#">Contact Us</a>
                        <a href="#">Work with Us</a>
                        <a href="#">Advertise</a>
                        <a href="#">Your Ad Choise</a>

                    </div>

                    <div className="social_icons">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path   d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#4267B2"/>
                            <path   d="M24.6234 11.0037L22.2249 11C19.5302 11 17.7888 12.7387 17.7888 15.4298V17.4723H15.3771C15.1688 17.4723 15 17.6367 15 17.8395V20.7988C15 21.0016 15.1689 21.1658 15.3771 21.1658H17.7888V28.633C17.7888 28.8358 17.9575 29 18.1659 29H21.3124C21.5208 29 21.6896 28.8356 21.6896 28.633V21.1658H24.5093C24.7177 21.1658 24.8865 21.0016 24.8865 20.7988L24.8876 17.8395C24.8876 17.7421 24.8478 17.6489 24.7772 17.5799C24.7066 17.511 24.6103 17.4723 24.5103 17.4723H21.6896V15.7409C21.6896 14.9087 21.8933 14.4862 23.0073 14.4862L24.623 14.4857C24.8312 14.4857 25 14.3212 25 14.1186V11.3708C25 11.1683 24.8314 11.0041 24.6234 11.0037Z" fill="white"/>
                        </svg>

                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#1DA1F2"/>
                            <path  d="M28.979 14.3629C28.9532 14.3322 28.9106 14.3217 28.8743 14.3385C28.3361 14.5795 27.77 14.7527 27.1869 14.8551C27.8059 14.385 28.2672 13.7341 28.5037 12.9876C28.5151 12.9519 28.5033 12.9128 28.4744 12.8896C28.4453 12.8663 28.4049 12.8633 28.373 12.8825C27.6758 13.2999 26.9206 13.5941 26.1276 13.7573C25.4248 13.0211 24.4435 12.6 23.4278 12.6C21.3623 12.6 19.6821 14.2961 19.6821 16.3809C19.6821 16.633 19.7063 16.8828 19.7542 17.1252C16.8934 16.947 14.2184 15.5606 12.3995 13.3086C12.3809 13.2856 12.3527 13.2727 12.3232 13.2757C12.2939 13.2779 12.2677 13.2947 12.2529 13.3202C11.9211 13.8948 11.7458 14.5523 11.7458 15.2211C11.7458 16.3803 12.2675 17.4641 13.1559 18.1793C12.6985 18.1238 12.2518 17.9785 11.849 17.7527C11.8219 17.7373 11.7882 17.7375 11.7611 17.7533C11.734 17.7689 11.7168 17.798 11.7161 17.8296L11.7157 17.878C11.7157 19.5428 12.8025 21.0045 14.3487 21.4899C13.9415 21.5561 13.5189 21.5517 13.1036 21.4716C13.073 21.4659 13.0409 21.4765 13.0199 21.5003C12.999 21.5241 12.992 21.5574 13.0016 21.5876C13.4653 23.0484 14.7535 24.0728 16.2531 24.2005C15.0022 25.1256 13.5237 25.613 11.9615 25.613C11.6737 25.613 11.3839 25.5956 11.1 25.562C11.0594 25.5573 11.0192 25.5817 11.0052 25.621C10.9912 25.6606 11.0061 25.7049 11.0412 25.7274C12.7317 26.8218 14.6864 27.4 16.6943 27.4C23.2619 27.4 27.1865 22.0148 27.1865 16.8087C27.1865 16.6637 27.1837 16.5195 27.178 16.3757C27.8865 15.8525 28.4947 15.2122 28.9851 14.471C29.007 14.4379 29.0046 14.3938 28.979 14.3629Z" fill="white"/>
                        </svg>


                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#FF0000"/>
                            <path  d="M20 12.8C17.102 12.8 13.3406 13.5294 13.3406 13.5294L13.3311 13.5402C12.0112 13.7522 11 14.8915 11 16.277V23.7217C11.0027 25.0899 11.9937 26.2523 13.3379 26.4652L13.3406 26.4693C13.3406 26.4693 17.102 27.2 20 27.2C22.898 27.2 26.6594 26.4693 26.6594 26.4693C28.0065 26.2555 28.9986 25.0914 29 23.723V16.277C28.998 14.9096 28.0068 13.7464 26.6621 13.5334C26.6594 13.5294 22.898 12.8 20 12.8ZM18.2 16.85L23.6 20L18.2 23.15V16.85Z" fill="white"/>
                        </svg>


                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z" fill="#262626"/>
                            <path  d="M20 11.5C22.3085 11.5 22.5979 11.5098 23.5045 11.5512C24.4093 11.5924 25.0272 11.7361 25.5678 11.9463C26.1268 12.1634 26.6008 12.4541 27.0734 12.9266C27.5459 13.3992 27.8366 13.8732 28.0538 14.4322C28.2639 14.9728 28.4076 15.5907 28.4488 16.4955C28.4902 17.4021 28.5 17.6915 28.5 20C28.5 22.3085 28.4902 22.5979 28.4488 23.5045C28.4076 24.4093 28.2639 25.0272 28.0538 25.5678C27.8366 26.1268 27.5459 26.6008 27.0734 27.0734C26.6008 27.5459 26.1268 27.8366 25.5678 28.0538C25.0272 28.2639 24.4093 28.4076 23.5045 28.4488C22.5979 28.4902 22.3085 28.5 20 28.5C17.6915 28.5 17.4021 28.4902 16.4955 28.4488C15.5907 28.4076 14.9728 28.2639 14.4322 28.0538C13.8732 27.8366 13.3992 27.5459 12.9266 27.0734C12.4541 26.6008 12.1634 26.1268 11.9463 25.5678C11.7361 25.0272 11.5924 24.4093 11.5512 23.5045C11.5098 22.5979 11.5 22.3085 11.5 20C11.5 17.6915 11.5098 17.4021 11.5512 16.4955C11.5924 15.5907 11.7361 14.9728 11.9463 14.4322C12.1634 13.8732 12.4541 13.3992 12.9266 12.9266C13.3992 12.4541 13.8732 12.1634 14.4322 11.9463C14.9728 11.7361 15.5907 11.5924 16.4955 11.5512C17.4021 11.5098 17.6915 11.5 20 11.5ZM19.9973 22.8298C21.5616 22.8298 22.8298 21.5616 22.8298 19.9973C22.8298 18.433 21.5616 17.1649 19.9973 17.1649C18.433 17.1649 17.1649 18.433 17.1649 19.9973C17.1649 21.5616 18.433 22.8298 19.9973 22.8298ZM19.9973 15.6338C22.4072 15.6338 24.3608 17.5874 24.3608 19.9973C24.3608 22.4072 22.4072 24.3608 19.9973 24.3608C17.5874 24.3608 15.6338 22.4072 15.6338 19.9973C15.6338 17.5874 17.5874 15.6338 19.9973 15.6338ZM25.8556 15.3722C25.8556 15.946 25.3904 16.4111 24.8166 16.4111C24.2429 16.4111 23.7778 15.946 23.7778 15.3722C23.7778 14.7985 24.2429 14.3333 24.8166 14.3333C25.3904 14.3333 25.8556 14.7985 25.8556 15.3722Z" fill="white"/>
                        </svg>


                    </div>

                </div>

                <div className="rights">
                    <div className="container">
                    <div className="rights_text">
                        <p>Universal???s business concept is to offer fashion and quality at the best price in a sustainable way. Universal has since it was founded in 2015 grown into one of the world's leading fashion companies.</p>

                    </div>
                    <div className="rights_year">
                        <p>?? 2019 Universal UI Kit</p>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;