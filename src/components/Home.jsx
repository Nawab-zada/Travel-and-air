import React, { useRef } from "react";
import "./Home.css";

import emailjs from "@emailjs/browser";
import image1 from "../assests/Z_slider_image.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const form = useRef();

  const images = [
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
    image1,
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm("service_id", "templata_id", form.current, {
        publicKey: "Public_key",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="main-div">
        <div className="NavbarSection">
          <div className="logoSection">
            Destination <br /> travel&Tours
          </div>
          <div className="buttonSection">
            <button>Login</button>
            <button>Create Account</button>
          </div>
        </div>
        <div className="manu-button">
          <button>Home</button>
          <button>About Us</button>
          <button>Services</button>
          <button>Contect</button>
        </div>
        <p className="paragraph">
          Delivering World-Class Travel Experiences Since 1973.
        </p>
        <form className="Fly-form" ref={form} onSubmit={handleSubmit}>
          <div className="formSection">
            <label htmlFor="from">From</label>
            <select name="from">
              <option value="">Country, City, Airport</option>
              <option value="new_york">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="to">To</label>
            <select name="to">
              <option value="">Country, City, Airport</option>
              <option value="new_york">New York</option>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="tokyo">Tokyo</option>
            </select>
          </div>
          <div className="formSection">
            <label htmlFor="departure">Departure</label>
            <input
              type="date"
              name="departure"
              placeholder="ADD date"
            />
          </div>
          <div className="formSection">
            <label htmlFor="return">Return</label>
            <input
              type="date"
              name="return"
              placeholder="ADD date"
            />
          </div>
          <div className="formSection">
            <label htmlFor="travelers">Travelers & Cabin Class</label>
            <select name="travelers">
              <option value="">1 Adult, Economy</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <button type="submit">Send Query</button>
        </form>
        <div className="firstSection-checkBox">
          <input type="checkbox" />
          <p>Show direct flight only.</p>
          <input type="checkbox" />
          <p>Add Nearby Airpors</p>
        </div>
        <div className="secondSection-checkBox">
          <input type="checkbox" />
          <p>Show direct flight only.</p>
        </div>
      </div>

      <div className="ExperienceSection">
        <div className="experianceTag">Experience</div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
