const Subscribe = () => {
    return (
        <section className="Subscribe">
            <div className="container">
                <div className="subs_title">
                    <h2>Subscribe now and get 20% off</h2>
                    <div className="email_block">
                        <form>
                            <input type="email" name="email" placeholder="Enter your email" />
                        </form>

                        <button className="subs_btn">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe;