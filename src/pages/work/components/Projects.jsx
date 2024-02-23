import React, { useEffect, useState } from "react";
import Project from "./Project";
import getProjects from "../../../util/helpers/getProjects";

function Projects({ data }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
      <>
        {data.slice(1).map((repo, index) => {
          return <Project key={index} repo={repo}></Project>;
        })}
      </>
    </div>
  );
}

export default Projects;
