import React, { useState } from "react";

import { FaBusinessTime } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const NLP1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "WHY NLP?",
      answer:
        "Simply because it’s proven to work. If you want to have more choices about your behavior and emotion, to improve your relationships and the way you communicate, and create better results through becoming a greater thinker, then NLP can provide you with a step-by-step framework for achieving all this and more. Not just in the short term, but lasting transformation, which will stay with you for your entire life. The thousands that have learned the secrets of NLP have been so successful because they have applied NLP to their daily lives. It’s the same technology Oprah Winfrey, Tiger Woods, Anthony Robbins and Bill Gates (and hundreds of thousands of others) use to achieve consistent results most of us can only dream of.",
    },
    {
      question: "WHAT DOES NLP TREAT?      ",

      answer:
        "How useful would it be to have a manual for the brain? A users guide? According to William James one of the founders of American Psychology, the average person uses only 10% of their brains full potential. NLP allows you to better understand your mind and enables you to access the excellence you already inherently have NLP will allow you to create new neurological pathways, this will create behaviors that better serve you for your life and eliminate old destructive patterns of behavior. In a nut shell, NLP can help anything that you do in life that requires thought, either conscious or unconscious.",
    },
    {
      question: "HOW NLP CAN HELP ME?",
      answer:
        "I can assist you to develop and maintain a high level of motivation for achieving your goals, and can help convert barriers and obstacles into doorways to success. NLP can be used to learn the characteristics of top achievers and to create a blueprint for unlimited success. Through the simple yet profound techniques that make NLP so powerful, I can help you to eliminate unwanted habits, transform negative emotions into positive feelings, improve the way you see yourself, enhance your self-esteem and become the person you want to be.",
    },
    {
      question: "How does NLP work?",
      answer:
        "Think about this… was a moment in your life when you decided you would change a dysfunctional behavior and do something different only to find you  Have you ever wondered why you repeat the old behavior?   Negative emotions and limiting behaviors tend to be stronger than your logical conscious mind and as habits / patterns are generated and stored by the uncnscious mind the change needs to occur at the unconscious level!   If it were as easy as saying ‘I will give that up right now’ then we would all be our own therapists.       Unwanted behaviours and beliefs have been learned and stored at an unconscious level, and these may no longer serve you. For example, as a child you may have ‘learnt’ to become afraid of spiders, this may have been because the first time you saw a spider the adults in the room showed you how to ‘behave’ by running away from the spider. This is then stored at an unconscious level and every time you now see a spider you react automatically in the same way. It becomes an automatic unconscious response which you are unable to change consciously, this is the same for phobias and fears and they can only be changed at the unconscious level",
    },
  ];

  return (
    <>
      <span id="about"></span>

      <div className="dark:bg-black dark:text-white py-2 sm:min-h-[100px] sm:grid sm:place-items-center">
        <p
          data-aos="fade-up"
          className="mt-6 font-serif text-3xl font-semibold text-center uppercase sm:text-3xl"
        >
          <h2 className="" style={{ color: "#006f82" }}>
            NLP (Neuro-Linguistic Programming)
          </h2>{" "}
          <hr className="mt-3" />
        </p>

        <div className="container p-5 text-justify">
          <h5>
            <span style={{ color: "#006f82" }}>
              {" "}
              <b>NLP</b>{" "}
            </span>{" "}
            stands for{" "}
            <span style={{ color: "#006f82" }}>
              {" "}
              <b className="uppercase">Neuro-Linguistic Programming</b>{" "}
            </span>
            , a name that encompasses the three most influential components
            involved in producing human experience:{" "}
            <span style={{ color: "#006f82" }}>
              {" "}
              <b className="uppercase">Neuro-Linguistic Programming</b>{" "}
            </span>
            . The neurological system regulates how our bodies function,
            language determines how we interface and communicate with other
            people and our programming determines the kinds of models of the
            world we create. Neuro-Linguistic Programming describes the
            fundamental dynamics between mind (neuro) and language (linguistic)
            and how their interplay affects our body and behavior (programming).
          </h5>
          <h5>
            <span style={{ color: "#006f82" }}>
              {" "}
              <b>NLP</b>{" "}
            </span>{" "}
            is a pragmatic school of thought – an ‘epistemology’ – that
            addresses the many levels involved in being human.{" "}
            <span style={{ color: "#e74c3c" }}>
              <br /> <b>NLP</b>{" "}
            </span>
            is a multi-dimensional process that involves the development of
            behavioral competence and flexibility, but also involves strategic
            thinking and an understanding of the mental and cognitive processes
            behind behavior.
          </h5>
          <br />
          <h5>
            <span style={{ color: "#006f82" }}>
              {" "}
              <b>NLP</b>{" "}
            </span>{" "}
            provides tools and skills for the development of states of
            individual excellence, but it also establishes a system of
            empowering beliefs and presuppositions about what human beings are,
            what communication is and what the process of change is all about.
            At another level, NLP is about self-discovery, exploring identity
            and mission. It also provides a framework for understanding and
            relating to the ‘spiritual’ part of human experience that reaches
            beyond us as individuals to our family, community and global
            systems.
            <br />
            <br />
            <span style={{ color: "#006f82" }}>
              {" "}
              <b>NLP</b>{" "}
            </span>{" "}
            is not only about competence and excellence, it is about wisdom and
            vision.
          </h5>

          <div className="mx-auto mt-7 w-1/1">
            <h3
              className="py-2 mb-4 font-bold text-center text-white "
              style={{ backgroundColor: "#006f82" }}
            >
              NLP (NEURO-LINGUISTIC PROGRAMMING)
            </h3>
            <ul className="border border-gray-300 w-300">
              {faqData.map((item, index) => (
                <li key={index} className="w-full border-t border-gray-300">
                  <button
                    className={`flex justify-between w-full px-4 py-2 font-bold text-lg ${
                      activeIndex === index ? "border-b border-gray-300" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    <span>{activeIndex === index ? "-" : "+"}</span>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 x-4" data-aos="fade-up">
                      {item.answer}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto ">
            <p
              data-aos="fade-up"
              className="mt-6 font-serif text-3xl font-semibold text-center uppercase sm:text-3xl"
            >
              <h2 className="" style={{ color: "#006f82" }}>
                NLP Advantages
              </h2>{" "}
              <hr className="mt-3" />
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <div className="mt-6 text-center">
                  <h5
                    className="font-serif text-3xl font-semibold uppercase"
                    style={{ color: "#006f82" }}
                  >
                    <FaBusinessTime className="inline-block mr-2 text-ml" />
                    In Business
                  </h5>
                  <hr className="w-20 mx-auto mt-2" />
                </div>
                <p
                  className="mt-4 text-justify"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <b>In Business</b> If you have ever wanted to make your team
                  more effective, get better communication between members of
                  staff and departments, “get through” to staff and customers
                  more powerfully, have your ability to make sales, negotiate
                  and persuade boosted, make better presentations, motivate and
                  share vision while overcoming objections and obstacles, then
                  it’s time you considered Neuro-Linguistic Programming (NLP) to
                  enhance your business. •{" "}
                  <strong> Get an edge over your competition</strong> in
                  business and safely increase your profits <br />• Get what you
                  want by <strong>effectively managing your internal</strong>
                  mindset and influencing others to happily work with you to
                  achieve your dreams <br />
                  • Overcome the hurdles which prevent you from taking your
                  business or career to the next level <br />• Learn how to{" "}
                  <strong>motivate yourself and others </strong> <br />
                  • Learn to use language with greater precision and elegance so
                  that you and others can get what you want <br />•{" "}
                  <strong>
                    Think better, think more clearly and make better decisions{" "}
                  </strong>{" "}
                  <br />I • Increase <strong>Inter-staff Communication</strong>{" "}
                  <br />• <strong>Leadership is also enhanced </strong> by
                  enabling you to properly work out and communicate your vision
                  for the business and its staff. This positively affects morale
                  and productivity. <br />• <strong>Presentations</strong> – For
                  example, one aspect of NLP teaches you how to reduce stress
                  levels when speaking in public. Fear of public speaking is the
                  world’s most common phobia, and people with massive talents
                  and much to give often find public speaking to be a stumbling
                  block. <br />
                  • Improving personal effectiveness <br />
                </p>

                <p className="p-5">
                  – Master your emotions – Calmly collate relevant information
                  under pressure.
                  <br />
                  – Remain calm, focused and thorough at all times .<br />
                  – Instant confidence and motivation – Maximise your presence
                  in business situations. Remain self assured during critical
                  negotiations .<br />
                  – Use language with greater precision – Clearly articulate
                  your views and ideas with pinpoint focus. Create compelling
                  and persuasive arguments .<br />
                  – Change unwanted behavior in yourself and others – Manage
                  teams more effectively. Motivate and inspire staff every day.
                  .<br />
                </p>
              </div>
              <div className="sm:col-span-1">
                <div className="mt-6 text-center">
                  <h6
                    className="font-serif text-3xl font-semibold uppercase"
                    style={{ color: "#006f82" }}
                  >
                    <FaHome className="inline-block mr-2 text-ml" />
                    Personal Life
                  </h6>
                  <hr className="w-20 mx-auto mt-2" />
                </div>

                <p
                  className="mt-4"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  • Quickly identify and blast through the limitations that are
                  holding you back in business and in life… Once you break
                  through these, your business and personal life will never be
                  the same again.
                  <br />
                  • Master your subconscious mind so that you can learn more
                  quickly than traditional teaching methods could ever allow
                  <br />
                  • Learn things about yourself that you didn’t know before
                  <br />
                  • Master your own emotions so that you handle all
                  eventualities easily
                  <br />
                  • Understood your Core Beliefs (Rules of success) that are
                  driving failures and successful in your life, and redefined
                  your success criteria to live a happy and meaningful life
                  <br />
                  • Gain that vital edge that makes you a far more effective and
                  powerful communicator
                  <br />
                  • Enhance your personal relationships
                  <br />
                  • Develop instant confidence
                  <br />
                  • Increased their earnings
                  <br />
                  • Eliminated Limiting beliefs, and set powerful beliefs
                  <br />
                  • Learn how to create instant rapport with others
                  <br />
                  • Improved their Public Speaking skills
                  <br />
                  • Changed unwanted behavior
                  <br />
                </p>

                <p className="mt-4">
                  • <strong> Sales, Negotiation and Persuasion.</strong> Most
                  people don’t recognize that there is a particular structure to
                  the way that positive negotiations work. The “inoculation” of
                  clients against doubt, the reframing of objections, sharing of
                  a vision, the setting out of a positive course of action and
                  enthusing people to follow that course are all included in the
                  techniques taught in NLP training.
                </p>
              </div>
            </div>
          </div>

          <p
            data-aos="fade-up"
            className="font-semibold text-left uppercase ont-serif m text-1xl sm:text-2xl mt-7"
          >
            <h4 style={{ color: "#006f82", textAlign: "center" }}>
              It’s Your Life! Live It!{" "}
            </h4>
          </p>
        </div>
      </div>
    </>
  );
};

export default NLP1;
