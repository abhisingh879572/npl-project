import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import logo from "../../assets/IMG-20240311-WA0000 (1).png";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className=" dark:bg-dark mt-14 rounded-t-3xl"
      style={{ backgroundColor: "#062446", color: "white" }}
    >
      <section className="container">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8 ">
            <img
              src={logo}
              alt="Logo"
              className=" h-[90px] w-[200px]  mt-3"
              onClick={scrollToTop}
            />

            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>3 Shanti Niketan , New Hyderabad</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91-7355010622</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <MdMarkEmailUnread />
              <p>akshatverma0522@gmail.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify uppercase sm:text-xl sm:text-left">
                  Important Links
                </h1>
                <Link to="/services" onClick={scrollToTop}>
                  <p>Business-Coaching</p>
                </Link>
                <Link to="/lifeLisbon" onClick={scrollToTop}>
                  <p>LifeLisbon</p>
                </Link>
                <Link to="/nlp" onClick={scrollToTop}>
                  <p>NLP-Neuro-Linguistic-Programming</p>
                </Link>
                <Link to="/organizational" onClick={scrollToTop}>
                  {" "}
                  <p>Organizational-Development</p>
                </Link>
                <Link to="/relationship">
                  <p>Relationship-and-family-Mediation</p>{" "}
                </Link>

                <Link to="/nlphypnosis" onClick={scrollToTop}>
                  {" "}
                  <p>NLP Hypnosis</p>
                </Link>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify uppercase sm:text-xl sm:text-left">
                  Links
                </h1>
                <Link to="/testimonial" onClick={scrollToTop}>
                  <p>Career</p>
                </Link>
                <Link to="/executive" onClick={scrollToTop}>
                  {" "}
                  <p>Executive-Coaching</p>
                </Link>
                <Link to="/business" onClick={scrollToTop}>
                  {" "}
                  <p>BUSINESS MEDIATION</p>
                </Link>
                <Link to="/timenllp" onClick={scrollToTop}>
                  <p>NLP TIME LINE THERAPY</p>
                </Link>
                <Link to="/coursemalta" onClick={scrollToTop}>
                  <p>Life-coach-course-malta</p>
                </Link>
                <Link to="/dataprocessing" onClick={scrollToTop}>
                  {" "}
                  <p>Data Processing Policy – GDPR </p>{" "}
                </Link>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-xl font-bold text-justify uppercase sm:text-xl sm:text-left">
                  Location
                </h1>
                <Link to="/" onClick={scrollToTop}>
                  <p>Home</p>
                </Link>
                <Link to="/about" onClick={scrollToTop}>
                  <p>About</p>
                </Link>

                <Link to="/nlp1" onClick={scrollToTop}>
                  <p>NLP (Neuro-Linguistic Programming)</p>
                </Link>
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/">
                    <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="https://www.facebook.com/">
                    <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="https://www.linkedin.com/feed/">
                    <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                  </a>
                </div>
                <ul className="flex flex-col gap-3"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
