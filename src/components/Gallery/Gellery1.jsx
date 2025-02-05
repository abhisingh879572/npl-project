import React from "react";
import "./gallery.css";
function Gellery1() {
  return (
    <div className="container-fluid">
      <p
        data-aos="fade-up"
        className="mt-4 font-serif text-3xl font-semibold text-center underline uppercase sm:text-4xl"
      >
        BUSINESS DEVELOPMENT
      </p>
      <br />
      <div className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/Business-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase ">Life Coaching</h4>
            </div>
            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/NLP-Neuro-Linguistic-Programming-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-400x269.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase ">
                NLP (Neuro-Linguistic Programming)
              </h4>
            </div>
            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/Organizational-Development-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase">Career Coaching</h4>
            </div>
            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/Executive-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase">
                Relationship Coaching
              </h4>
            </div>

            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/NLP-Time-Line-Therapy-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase text-light">
                NLP Time Line Therapy
              </h4>
            </div>
            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/Mediation-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-600x403.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase text-light">
                Business Mediation
              </h4>
            </div>
            <div className="col-span-1">
              <img
                className="goss"
                src="https://www.stothmarta.com/wp-content/uploads/2018/10/Leadership-Coaching-Marta-S-Toth-Life-Business-Coach-Accredited-NLP-Trainer-Business-Trainer-Coaching-NLP-Courses-1-600x403.jpg"
                alt=""
              />
              <h4 className="mt-3 text-center uppercase text-light">
                Leadership Coaching
              </h4>
            </div>
            <div className="col-span-1">
              <img
                className="goss"
                src="https://img.freepik.com/free-photo/group-young-people-enjoying-working-together_23-2148499877.jpg?t=st=1714030996~exp=1714034596~hmac=2968649cb471d454b34668c571b8f182c31b9ebd6a2c82c79ff9413e5624f6e0&w=1380"
                alt="dd"
              />
              <h4 className="mt-3 text-center uppercase text-light">
                Leadership Coaching
              </h4>
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Gellery1;
