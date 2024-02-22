import React from "react";
import Section from "../../components/Section";
import Current from "./components/Current";
function Work() {
  return <Section>
    <div className="flex flex-col size-full p-4" >
      <Current></Current>
    </div>
  </Section>;
}

export default Work;
