import React from 'react';



const Tabs = () => {
    /*
    const handleLinkClick = (event) => {
        event.preventDefault();
    }
    */
    return (
        <section className="Tabs">
            <div className="container">
                <div className="content">
                    <div className="tabs">
                        <nav className="tab_items">
                            <div className="tabs_title">RECOMENDED FOR YOU</div>
                            <a href="#tab_01" className="tabs_item" ><span>Food</span>
                                <p>For Chicken-Fried Steak, Too Much Is Just Enough</p>
                            </a>
                            <a href="#tab_02" className="tabs_item" ><span>Cars</span>
                                <p>Storm Has Car Dealers Doing Swift Business</p>
                            </a>
                            <a href="#tab_03" className="tabs_item" ><span>Movies</span>
                                <p>War Is Hell? In New Military Dramas, It’s One-Dimensional</p>
                            </a>
                            <a href="#tab_04" className="tabs_item"><span>NFL</span>
                                <p>11 surprising stat rankings for active NFL players</p>
                            </a>
                            <a href="#tab_05" className="tabs_item"><span>Tech Reviews</span>
                                <p>The bookcases you can buy online and assemble yourself</p>
                            </a>
                        </nav>
                        <div className="tabs_body">
                            <div id="tab_01" className="tabs_block">
                                <div className="text_block_one">
                                    <h2>Destinations</h2>
                                    <div className="title_block_one">In Southeast England, White Cliffs and Fish</div>
                                    <div className="btns_wrapper">
                                        <div className="read_more_wrapper">
                                            <button className="read_more">Read more

                                            </button>
                                        </div>

                                        <div className="btn_video_wrapper">
                                            <a className="btn_video" href="<div className='youtube' id='pXSGPhRDPxY'</div>">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499939 12.9231L0.499939 1.07587C0.499939 0.619484 0.88294 0.249512 1.3554 0.249512C1.51943 0.249512 1.68001 0.295069 1.81799 0.380755L11.357 6.30435C11.7544 6.55114 11.8695 7.06242 11.614 7.44632C11.5477 7.5459 11.4601 7.63056 11.357 7.69457L1.81799 13.6182C1.42057 13.865 0.891288 13.7538 0.635804 13.3699C0.547101 13.2366 0.499939 13.0815 0.499939 12.9231Z" fill="white"/>
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="btn_video_title">
                                            <p>The chalk cliff of Beachy Head</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab_02" className="tabs_block">
                                <div className="text_block_one">
                                    <h2>Cars</h2>
                                    <div className="title_block_one">Storm Has Car Dealers Doing Swift Business</div>
                                    <div className="btns_wrapper">
                                        <div className="read_more_wrapper">
                                            <button className="read_more">Read more

                                            </button>
                                        </div>

                                        <div className="btn_video_wrapper">
                                            <a className="btn_video" href="<div className='youtube' id='pXSGPhRDPxY'</div>">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499939 12.9231L0.499939 1.07587C0.499939 0.619484 0.88294 0.249512 1.3554 0.249512C1.51943 0.249512 1.68001 0.295069 1.81799 0.380755L11.357 6.30435C11.7544 6.55114 11.8695 7.06242 11.614 7.44632C11.5477 7.5459 11.4601 7.63056 11.357 7.69457L1.81799 13.6182C1.42057 13.865 0.891288 13.7538 0.635804 13.3699C0.547101 13.2366 0.499939 13.0815 0.499939 12.9231Z" fill="white"/>
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="btn_video_title">
                                            <p>The chalk cliff of Beachy Head</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab_03" className="tabs_block">
                                <div className="text_block_one">
                                    <h2>Movies</h2>
                                    <div className="title_block_one">War Is Hell? In New Military Dramas, It’s One-Dimensional</div>
                                    <div className="btns_wrapper">
                                        <div className="read_more_wrapper">
                                            <button className="read_more">Read more

                                            </button>
                                        </div>

                                        <div className="btn_video_wrapper">
                                            <a className="btn_video" href="<div className='youtube' id='pXSGPhRDPxY'</div>">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499939 12.9231L0.499939 1.07587C0.499939 0.619484 0.88294 0.249512 1.3554 0.249512C1.51943 0.249512 1.68001 0.295069 1.81799 0.380755L11.357 6.30435C11.7544 6.55114 11.8695 7.06242 11.614 7.44632C11.5477 7.5459 11.4601 7.63056 11.357 7.69457L1.81799 13.6182C1.42057 13.865 0.891288 13.7538 0.635804 13.3699C0.547101 13.2366 0.499939 13.0815 0.499939 12.9231Z" fill="white"/>
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="btn_video_title">
                                            <p>The chalk cliff of Beachy Head</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab_04" className="tabs_block">
                                <div className="text_block_one">
                                    <h2>NFL</h2>
                                    <div className="title_block_one">11 surprising stat rankings for active NFL players</div>
                                    <div className="btns_wrapper">
                                        <div className="read_more_wrapper">
                                            <button className="read_more">Read more

                                            </button>
                                        </div>

                                        <div className="btn_video_wrapper">
                                            <a className="btn_video" href="<div className='youtube' id='pXSGPhRDPxY'</div>">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499939 12.9231L0.499939 1.07587C0.499939 0.619484 0.88294 0.249512 1.3554 0.249512C1.51943 0.249512 1.68001 0.295069 1.81799 0.380755L11.357 6.30435C11.7544 6.55114 11.8695 7.06242 11.614 7.44632C11.5477 7.5459 11.4601 7.63056 11.357 7.69457L1.81799 13.6182C1.42057 13.865 0.891288 13.7538 0.635804 13.3699C0.547101 13.2366 0.499939 13.0815 0.499939 12.9231Z" fill="white"/>
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="btn_video_title">
                                            <p>The chalk cliff of Beachy Head</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab_05" className="tabs_block">

                                <div className="text_block_one">
                                    <h2>Tech Reviews</h2>
                                    <div className="title_block_one">The bookcases you can buy online and assemble yourself</div>
                                    <div className="btns_wrapper">
                                        <div className="read_more_wrapper">
                                            <button className="read_more">Read more

                                            </button>
                                        </div>

                                        <div className="btn_video_wrapper">
                                            <a className="btn_video" href="<div className='youtube' id='pXSGPhRDPxY'</div>">
                                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499939 12.9231L0.499939 1.07587C0.499939 0.619484 0.88294 0.249512 1.3554 0.249512C1.51943 0.249512 1.68001 0.295069 1.81799 0.380755L11.357 6.30435C11.7544 6.55114 11.8695 7.06242 11.614 7.44632C11.5477 7.5459 11.4601 7.63056 11.357 7.69457L1.81799 13.6182C1.42057 13.865 0.891288 13.7538 0.635804 13.3699C0.547101 13.2366 0.499939 13.0815 0.499939 12.9231Z" fill="white"/>
                                                </svg>
                                            </a>

                                        </div>
                                        <div className="btn_video_title">
                                            <p>The chalk cliff of Beachy Head</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};


/* function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        // Поддержка IE8
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        // Находим постер для видео, зная ID нашего видео
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';
        // Размещаем над постером кнопку Play, чтобы создать эффект плеера
        var play = document.createElement("div");
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            // Создаем iFrame и сразу начинаем проигрывать видео, т.е. атрибут autoplay у видео в значении 1
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            // Высота и ширина iFrame будет как у элемента-родителя
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            // Заменяем начальное изображение (постер) на iFrame
            this.parentNode.replaceChild(iframe, this);
        }
    }
}); */



export default Tabs;