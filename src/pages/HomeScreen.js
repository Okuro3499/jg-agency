import React from "react";
// { useState }
// import Carousel from "react-bootstrap/Carousel";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
    <div className=" w-full font-sans">
      <section className=" mb-6 w-full">
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

      <section className=" mb-4 container mx-auto bg-gray-100 w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-10 md:my-10">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-4 pb-4 px-6">
            <p className="uppercase tracking-loose font-bold mb-4 text-xl md:text-4xl underline">
              About Us
            </p>

            <p className="leading-normal mb-4">
              We retain customers and extract more value from them by providing
              top-notch customer service, businesses recoup customer acquisition
              costs and cultivate a loyal following that refers to customer
              service and provides testimonials and reviews by providing
              customized service solutions to a wide variety of industries,
              providing multi-channel support services...
            </p>
            <Link to="/about" className="text-black no-underline">
              <button className="bg-transparent hover:bg-gray-900 text-gray-900 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-gray-900 hover:border-transparent">
                View More
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 lg:py-6 text-center">
            <img
              src="https://i.postimg.cc/rm02KfLG/lumensoft-technologies-Wa-GMKm-J2-F0-Y-unsplash.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto" id="service">
        <div className="text-center font-bold text-xl md:text-4xl mb-4 underline">
          What we do
        </div>
        <div className="w-11/12 text-center px-16">
          With our fully trained agents we make sure they have knowledge
          required to give consumers what they want, we are empowered with the
          right technologies and have the ability to handle complex
          interactions, encourage new transactions, resolve issues quickly and
          win customers loyalty.We offer a superior customer experience based on
          a personalised service delivery
        </div>

        <div className="flex flex-wrap justify-between pt-12 -mx-6">
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <img
                src="https://i.postimg.cc/NM2hBXLP/technical-support-1.png"
                className="h-24 w-full rounded-t pb-6 object-contain"
                alt=""
              />
              <div className="text-center font-medium">24/7 Online support</div>
              <p className="text-gray-800 text-center text-base px-6 mb-2">
                We provide outsourced customer contact services that specialise
                in the operation of outbound and inbound.
              </p>

              {/* <div className="text-center underline mb-2">Learn more</div> */}
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <img
                src="https://i.postimg.cc/wjKTR6Dr/megaphone.png"
                className="h-24 w-full rounded-t pb-6 object-contain"
                alt=""
              />
              <div className="text-center font-medium">Tele Marketing</div>
              <p className="text-gray-800 text-center text-base px-6 mb-2">
                We welcome and help new customers understand the product or
                services you provide.
              </p>
              {/* <div className="text-center underline mb-2">Learn more</div> */}
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <img
                src="https://i.postimg.cc/8PsVHsR5/strategy.png"
                className="h-24 w-full rounded-t pb-6 object-contain"
                alt=""
              />
              <div className="text-center font-medium">
                Strategy & Consulting
              </div>
              <p className="text-gray-800 text-center text-base px-6 mb-2">
                We support your customers after they buy and use your products
                or services which will help them have an easy and enjoyable
                experience with you.
              </p>
              {/* <div className="text-center underline mb-2">Learn more</div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 mb-4" id="contact">
        <div className="text-center font-bold mb-4 text-xl md:text-4xl underline">
          Get in touch
        </div>

        <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Lets talk about everything!
              </h2>
              <div className="text-gray-700 mt-8 mb-3">
                Send us an <span className="underline">email</span>
              </div>
            </div>
            <img
              className="h-64 w-full rounded-t pb-6 object-contain"
              src="https://i.postimg.cc/zvBjRyLZ/email.png"
              alt=""
            />
          </div>
          <div className="">
            <form
              action="https://formsubmit.co/gideonollonde@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://jg-agency.netlify.app/Thanks"
              />
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder=""
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="message"
                  required
                />
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default HomeScreen;
