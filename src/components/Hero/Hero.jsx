import React, { useEffect } from "react";

import AOS from "aos";
import CarList from "../CarList/CarList";
import AppStoreBanner from "../AppStoreBanner/AppStoreBanner";
import Gmail from "../Gmail/Gmail";
import NLP1 from "../NLP1/NLP1";
import Ser from "../Services/ser";
import "./hero.css";
import LeadershipCoaching from "../LeadershipCoaching/LeadershipCoaching";
const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  const images = [
    "../../../src/assets/removeb.png",
    "../../../src/assets/home-student-2.png",
  ];

  const texts = [
    {
      title: "Effortless",
      subtitle: "YOU CAN DO MORE",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab",
    },
    {
      title: "company",
      subtitle: "software company",
      description:
        "Software Company Profile includes all the key information to draft a Presentation like executive summary, financial statement, work culture.",
    },
    // Add more objects for each text
  ];
  let currentIndex = 0;
  let intervalId;

  useEffect(() => {
    const sliderImage = document.getElementById("sliderImage");
    const titleElement = document.getElementById("title");
    const subtitleElement = document.getElementById("subtitle");
    const descriptionElement = document.getElementById("description");

    const changeImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      sliderImage.src = images[currentIndex];
      titleElement.textContent = texts[currentIndex].title;
      subtitleElement.textContent = texts[currentIndex].subtitle;
      descriptionElement.textContent = texts[currentIndex].description;
    };

    intervalId = setInterval(changeImage, 1500);

    return () => clearInterval(intervalId);
  }, []);
  const CarPng =
    "https://img.freepik.com/free-photo/people-working-with-documents-laptop_23-2147656651.jpg?t=st=1713175101~exp=1713178701~hmac=9dcc78998e84b140fadf95f46d4e6ff5f8624a34afc5a7488b236b82b248447b&w=1380";

  return (
    <div className="duration-300 dark:bg-black dark:text-white ">
      <div className="container min-h-[670px]  flex relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              id="sliderImage"
              src={images[currentIndex]}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[400px] ]"
            />
          </div>
          <div className="order-2 mb-5 space-y-5 sm:order-1 sm:pr-32">
            <p
              style={{ color: "#006f82" }}
              data-aos="fade-up"
              className="ml-3 text-4xl uppercase mfont-serif"
              id="title"
            >
              Effortless
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="ml-3 font-serif text-2xl font-semibold uppercase lg:text-5xl"
              id="subtitle"
            >
              YOU CAN DO MORE
            </p>
            <center>
              <p
                data-aos="fade-up "
                data-aos-delay="1000"
                id="description"
                className="text-xl text-left"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                veritatis explicabo quibusdam quae reprehenderit ab
              </p>
            </center>
            <center>
              <button
                style={{ height: "60px" }}
                data-aos="fade-up"
                data-aos-delay="1500"
                onClick={() => {
                  AOS.refreshHard();
                }}
                className="p-5 py-2 transition duration-500 rounded-md px-9 text-lime-50 buttoss"
              >
                Get Started
              </button>
            </center>
          </div>
        </div>
      </div>
      <hr
        className="m-5 centered-hr"
        style={{
          width: "1500px",
          margin: "0px auto",
          height: "10px",
          color: "rgb(6, 36, 70)",
        }}
      />

      <NLP1 />

      <div className="container mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="zoom-in-up">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="pb-6 space-y-5 sm:p-16">
              <h1
                data-aos="fade-up"
                className="font-serif text-3xl font-bold uppercase sm:text-4xl"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Let me assist you to Identify, Clarify and Create a vision for
                your future . Do you want to constructively deal with the
                changes from your personal and/or professional life? Do you want
                to reach a greater level of personal or professional attainment?
              </p>
              <p data-aos="fade-up">
                Do you want to know who you really are and how many goals you
                can achieve? Let me assist you to Identify, Clarify and Create a
                vision for your future based on your Goals, Personality and
                Vision.
              </p>

              <button
                style={{ height: "60px" }}
                data-aos="fade-up"
                data-aos-delay="1500"
                onClick={() => {
                  AOS.refreshHard();
                }}
                className="p-5 py-2 transition duration-500 rounded-md px-9 text-lime-50 buttoss"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <Ser />
      <LeadershipCoaching />

      <CarList />
      <AppStoreBanner />
      <Gmail />
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-4 mt-5">
            <div className="col-span-1"></div>
            <div className="col-span-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/Life-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center uppercase">Life Coaching</h4>
                </div>
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/NLP-Neuro-Linguistic-Programming-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center uppercase">
                    NLP (Neuro-Linguistic Programming)
                  </h4>
                </div>
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/Business-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center uppercase">
                    Career Coaching
                  </h4>
                </div>
                <div className="col-span-1">
                  <img
                    className="goss"
                    src="https://www.stothmarta.com/wp-content/uploads/2018/10/Relationship-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                    alt=""
                  />
                  <h4 className="mt-3 text-center uppercase">
                    Relationship Coaching
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
