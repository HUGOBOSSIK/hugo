import PicOne from '../img/img1.png';
import PicTwo from '../img/img2.png';
import PicThree from '../img/img3.png';
import PicFour from '../img/img4.png';

const Blog = () => {
    return (
        <section className="Blog">
            <div className="container">
                <div className="box_baner_firt">
                    <div className="block_text">
                        <p>25 Songs That Tell Us Where Music Is Going</p>
                        <a href="#">
                            <img src={PicOne} alt="img1"/>
                        </a>
                    </div>
                    <div className="block_text">
                        <p>These Ancient Assassins Eat Their Own Kind</p>
                        <a href="#">
                            <img src={PicTwo} alt="img2"/>
                        </a>
                    </div>
                    <div className="block_text">
                        <p>How Do You Teach People to Love Difficult Music?</p>
                        <a href="#">
                            <img src={PicThree} alt="img3"/>
                        </a>
                    </div>
                    <div className="block_text">
                        <p>International Soccer’s Man of Mystery</p>
                        <a href="#">
                            <img src={PicFour} alt="img4"/>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Blog;