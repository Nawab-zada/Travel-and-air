import React from "react";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] ">
            <div className="w-full md:w-[350px] h-[500px] mb-6 md:mb-0 mx-0">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="contact.png"
                alt="Man using laptop"
              />
            </div>
            <div className="w-full md:w-[600px] p-6">
              <h2 className="text-2xl font-semibold mb-6 text-center py-4">
                Know More About Travel Air International
              </h2>
              <div className="border-2 rounded p-4 border-custom-blue">
                <form className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border border-gray-300 p-3 rounded-md flex-1 border-solid border-custom-blue"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border border-gray-300 p-3 rounded-md flex-1 border-custom-blue mt-4 md:mt-0"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="border border-gray-300 p-3 rounded-md flex-1 border-custom-blue"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border border-gray-300 p-3 rounded-md flex-1 border-custom-blue mt-4 md:mt-0"
                    />
                  </div>
                  <textarea
                    placeholder="Comments"
                    className="border border-gray-300 p-3 rounded-md w-full h-40  border-custom-blue"
                  ></textarea>
                </form>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className=" text-white px-8 py-1 rounded-lg"
                  style={{ backgroundColor: "#292E5E" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
