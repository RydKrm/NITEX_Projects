import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  return (
       <div className="slider">
            <Carousel >
        <div className="header">
             <img className='slider-image' src="https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/rev_sliderhome1.jpg" alt="Banner Image" />
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
            </div>
        </div>
        <div className="header">
             <img className="h-full" src="https://demo2.wpopal.com/unity/wp-content/uploads/2019/08/rev_sliderhome2.jpg" alt="Banner Image" />
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
          </div>
        </div>
            </Carousel>
        </div>

  )
}
