import React from "react";
import Section from "../../components/Section";
import Current from "./components/Current";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import getProjects from "../../util/helpers/getProjects";
function Work() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const repos = await getProjects();
      setData(repos);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <Section>
      <div className="flex flex-col size-full p-4 gap-4">
        {loading ? (
          <div className="h-screen w-full grid place-items-center">loading</div>
        ) : (
          <>
            <Current repo={data[0]}></Current>
            <Projects data={data}></Projects>
          </>
        )}
      </div>
    </Section>
  );
}

export default Work;
