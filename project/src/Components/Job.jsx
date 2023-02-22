import Avatar from '../img/Avatar.png';
import Wom from '../img/Wom.png';
const Job = () => {
    return (
        <section className="Job">
            <div className="container">
                <div className="job_wrapper">
                <div className="job_block">
                    <div className="job_block_img">
                        <a href="#">
                            <img src={Avatar} alt="avatar"/>
                        </a>
                        <h2>By Sarah Jenkins</h2>
                        <p>Photographer</p>
                    </div>
                    <div className="job_block_title">
                        <h2>Readers' Choice winners: Your wine country favorites</h2>
                    </div>
                    <div className="job_block_btn">
                        <a className="job_btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6V4C3 3.44772 3.44772 3 4 3H18C18.5523 3 19 3.44772 19 4V14C19 14.5523 18.5523 15 18 15H16V17C16 17.5523 15.5523 18 15 18H1C0.447715 18 0 17.5523 0 17V7C0 6.44772 0.447715 6 1 6H3ZM15 15H4C3.44772 15 3 14.5523 3 14V7H1V17H15V15ZM4 4V14H18V4H4ZM18 14H4V13L7 10L10 12L14 8L18 13V14ZM9.5 9C8.67157 9 8 8.32843 8 7.5C8 6.67157 8.67157 6 9.5 6C10.3284 6 11 6.67157 11 7.5C11 8.32843 10.3284 9 9.5 9Z" fill="white"/>
                            </svg>

                            Watch photos
                            <p>26</p>
                        </a>
                    </div>

                </div>
                    <div className="job_block_second">
                        <div className="job_woman">
                            <div className="job_woman_text">
                        <h3>Careers</h3>
                            <h2>Had a Job Interview but No Callback? Here’s What to Do</h2>
                            <p>Try to understand the culture of the company where you want to work and be authentic in your interview, experts emphasize</p>

                                <div className="read_more_wrapper">
                                    <button className="read_more">Read more

                                    </button>
                                </div>
                            </div>
                            <div className="job_woman_img">
                                <img src={Wom} alt="wom"/>
                            </div>
                        </div>
                        <div className="little_wrapper">
                        <div className="little_text">
                            <h2>Is Coffee Bad for Bones?</h2>
                            <h3>Coffee drinkers may excrete more calcium, but it doesn’t appear to weaken bones</h3>
                            <p>Oct 15</p>
                        </div>
                            <div className="little_text_2">
                                <h2>What We Manufacture</h2>
                                <h3>A global history of the factory and the modern world that all should read</h3>
                                <p>Oct 14</p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
export default Job;