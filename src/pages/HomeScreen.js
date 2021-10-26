import React from "react";
// { useState }
// import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

function HomeScreen() {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  const config = {
    // dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    {
      img: "https://i.postimg.cc/0QhTz8W7/Whats-App-Image-2021-10-22-at-11-26-07-PM.jpg",
      title: "1",
      text: "",
    },
    {
      img: "https://i.postimg.cc/Fzc2c288/Whats-App-Image-2021-10-22-at-11-26-08-PM.jpg",
      title: "2",
      text: "",
    },
    {
      img: "https://i.postimg.cc/sfkzXJqb/Whats-App-Image-2021-10-22-at-11-26-06-PM.jpg",
      title: "3",
      text: "",
    },
    {
      img: "https://i.postimg.cc/CKrTVCbP/Whats-App-Image-2021-10-22-at-11-26-10-PM.jpg",
      title: "4",
      text: "",
    },
    {
      img: "https://i.postimg.cc/rmd6ydJ8/Whats-App-Image-2021-10-22-at-11-26-09-PM.jpg",
      title: "5",
      text: "",
    },
  ];

  return (
    <div className=" w-full">
      <section className="space-y-6 mb-6 w-full">
        <Slider {...config}>
          {products.map((x, i) => {
            return (
              <div key="{i}">
                <img
                  className="object-cover h-96 w-full"
                  src={x.img}
                  alt={x.title}
                />
              </div>
            );
          })}
        </Slider>
      </section>

      <section className="space-y-6 mb-6 container mx-auto w-4/5">
        <div className="text-center font-bold text-lg">Our Mission</div>
        <div className="text-center">
          "To inspire moments of Happiness, to create value, to build a strong and profitable service that makes a difference on how customers are treated"
        </div>
         <div className="text-center font-bold text-lg">Our Vision</div>
        <div className="text-center">
          "To be earths most customer-centric company where we serve the needs of our customers wherever they are and make them happy."
        </div>
      </section>
    </div>
  );
}
export default HomeScreen;
