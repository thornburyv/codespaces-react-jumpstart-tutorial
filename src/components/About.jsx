import React from "react";
import headshot from '../images/VT.png'
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Vera!
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a Junior Software Engineer in MyPGS and my pronouns are She/Her. I've worked at P&G for 2 years, focused on fullstack,
          cloud-based development with an emphasis on frontend and user experience. I live in Cincinnati 
          with my partner, Patrick, and our 5 year old cat, Noodles. 
          </p>
          <p>
          I enjoy cooking, photography, reading and Yoga, among other things. I graduated from the
          Art Academy of Cincinnati with a Bachelors of Fine Arts in Photography and have worked in a variety of
          industries over the years. Everything from restaurants, small government and pottery production. 
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={headshot}
          />
        </div>
      </div>
    </section>
  );
}