import Logo from "../img/woman.svg";



const weatherBlock = document.querySelector('#weather');
async function loadWeather(e) {

    const server = 'https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=e8edc5fb2220c88bf1580426c77cf86b&units=metric';
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    }else {
        weatherBlock.innerHTML = responseResult.message;
    }
}
function  getWeather(data) {
    const location = data.name;
    const temp = Math.round(data.main.temp);
    const weatherIcon = data.weather[0].icon;
    const template = `<div class="weather_header">
                <div class="weather_main">
                    <div class="weather_icon">
                    <img src=""
                    </div>
                    <div class="weather_city">${location}
                    <div class="weather_temp">${temp}</div>
                    </div>
                </div>
            </div>`;

    weatherBlock.innerHTML = template;
}

if (weatherBlock) {
    loadWeather();
}

let dateblock = new Date().toDateString();
document.querySelector('.date_block').innerHTML = dateblock;





const Title = () => {
    return (
        <section className="Title">
            <div className="container">
                <div className="wrapper_logo">
                    <a href="/" className="logo_img">
                        <img src={Logo} alt="logo"/>
                    </a>
                    <div className="logo_text">
                        <h2>Boston and New York Bear Brunt</h2>
                    </div>
                    <div className="logo_title">
                        <h1><strong>Universal</strong></h1>
                    </div>
                    <div className="date_block">
                        <div id="timer"></div>
                    </div>
                    <div id="weather" className="weather"></div>
                </div>
            </div>



        </section>

    )

};








export default Title;
