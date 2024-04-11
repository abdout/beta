"use client";
import { useProject } from "@/provider/project";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Action from "@/component/project/report/action";

interface Params {
  id: string;
}

interface Option {
  label: string;
  value: string;
}

const Swgr = ({ params }: { params: Params }) => {
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  if (!project || !project.voltages.MV) {
    return null; // Don't render anything if the project data is not loaded yet or EV is not selected
  }

  const selectedOptions = project.mvOptions.mvSwgr;

  return (
    <div className="flex flex-col space-y-1 ">
      <Action projectTitle={project?.customer || ""}  />
      {selectedOptions.map((option: Option) => (
        <Link
          href={`/project/${
            params.id
          }/report/mv/swgr/${option.label.toLowerCase()}`}
          key={option.value}
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50"
        >
          <Icon icon={"ph:folder-simple-thin"} height="36" />
          <h2 className="mt-1">{option.label}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Swgr;