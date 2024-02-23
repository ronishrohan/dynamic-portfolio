import React from "react";
import Section from "../../components/Section";
import Title from "./components/Title";
import Button from "./components/Button";

function Home() {
  return (
    <Section>
      <div className="w-full  p-4 grid gap-4 grid-cols-[1fr_1fr]">
        <div className="flex flex-col justify-between h-full z-20">
          <div>
            <Title>Hello!</Title>
            <div className="text-white mt-8 text-6xl font-bold flex flex-col">
              <span>I'm Ronish Rohan,</span>
              <span>a web developer</span>
              <span>specializing in frontend</span>
            </div>
          </div>
          <div className="h-20 w-full grid grid-cols-[2fr_1fr] gap-4">
            <Button link="/work">My work</Button>
            <Button link="https://github.com/ronishrohan">Github</Button>
          </div>
        </div>
        <div className="size-full grid place-items-center overflow-hidden">
          <img
          title="banan"
            src="/images/banan.png"
            className="max-h-[70vh] w-[100%] object-cover absolute sm:relative z-10"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
}

export default Home;
