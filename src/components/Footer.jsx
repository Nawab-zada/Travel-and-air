import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#292E5E" }} className="mx-[50px] my-[0px]">
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white mx-auto p-6 lg:pt-[40px]">
        <div className="flex flex-col justify-between mb-6 md:mb-0 md:pr-4 lg:pr-8">
          <p className="text-bold mb-4">Follow us here</p>
          <div className="flex space-x-4 mb-4">
            <i className="fa-brands fa-linkedin text-2xl"></i>
            <i className="fa-brands fa-square-whatsapp text-2xl"></i>
            <i className="fa-brands fa-square-instagram text-2xl"></i>
            <i className="fa-brands fa-square-facebook text-2xl"></i>
          </div>
          <p className="mb-1">
            Address <br />
            Address Office No.10, Block 51 Chaudhry Plaza, Jinnah Avenue, Blue
            Area Islamabad.
          </p>
          <p className="mb-4">Phone: 051-2274080 / 2274341</p>
          <div className="w-full h-[200px] mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.417924882525!2d73.0819637!3d33.7240077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf81873bd0d1%3A0xc4db2246f35913dd!2s5%20Jinnah%20Ave%2C%20F-6%2F4%20F%206%2F4%20Blue%20Area%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory!5e0!3m2!1sen!2s!4v1723950270211!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mb-6 md:mb-0 md:px-4 lg:px-8">
          <p className="text-bold mb-5">Services</p>
          <ol className="list-disc mb-4">
            <li>Airline Reservations</li>
            <li>Ticketing of all the major airlines.</li>
            <li> Worldwide Hotel accommodations</li>
            <li>Tour packages & Car rentals</li>
            <li> Visa assistance</li>
            <li> Travel Insurance</li>
          </ol>
        </div>

        <div className="flex flex-col justify-between py-[70px] px-5 mb-6 md:mb-0 md:px-4 lg:px-8">
          <div>
            <ol className="list-disc mb-4">
              <li>Ticket delivery at door step</li>
              <li>24 hours answering capability</li>
              <li>Visa/ Master Card acceptance</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col justify-end mb-6 md:mb-0 md:pl-2 lg:pl-4 ml-[40px]">
          <p>
            Drop us a line <br />
            sales@travelairintl.com
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center ">
        <p className="text-center text-white mb-5">
          Powered by Structures Ltd. @20245
        </p>
      </div>
    </div>
  );
};

export default Footer;
