"use client";
import Action from "@/component/project/layout/action";
import { useEffect, useState } from "react";
import Info from "@/component/project/detial/info";
import { domain } from "@/constant/domain";
import { useProject } from "@/provider/project";

interface Project {
  _id: string;
  title: string;
  description: string;
}

interface Params {
  id: string;
}

const Detail = ({ params }: { params: Params }) => {
  const { id } = params;
  const { project, fetchProject } = useProject();

  useEffect(() => {
    fetchProject(params.id);
  }, [params.id, fetchProject]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col space-y-4 ">
      <Action projectTitle={project?.customer} />
      <Info />
    </div>
  );
};

export default Detail;