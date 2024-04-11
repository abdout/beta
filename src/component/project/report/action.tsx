"use client";
import React from "react";
import { Icon } from "@iconify/react";
import XlIcon from "@/component/atom/icon/xl";
import { usePathname } from "next/navigation";

interface ActionProps {
  projectTitle: string;
  toPDF?: () => void;
}

const Action: React.FC<ActionProps> = ({ projectTitle, toPDF }) => {
  const pathname = usePathname();
  const projectId = pathname.split("/")[2];

  let statement;
switch (true) {
  case pathname.includes(`${projectId}/report/mv/swgr/cb`):
    statement = "Circuit Breaker";
    break;
  case pathname.includes(`${projectId}/report/mv/swgr`):
    statement = "MV Switchgear";
    break;
  case pathname.includes(`${projectId}/report/mv`):
    statement = "Medium Voltage";
    break;
  case pathname.includes(`${projectId}/report`):
    statement = "Report";
    break;
  case pathname.includes(`${projectId}/mos`):
    statement = "Method of Statement";
    break;
  case pathname.includes(`${projectId}/itp`):
    statement = "Inspection and test plan";
    break;
  case pathname.includes(`${projectId}`):
    statement = "Project details";
    break;
  default:
    statement = "";
}

  return (
    <>
      <div className="flex gap-10 items-center">
        <div>
          <XlIcon src="/customer/rtcc.png" alt="RTCC" />
        </div>
        <div>
          <h1>{projectTitle}</h1>
          <h4>{statement}</h4>
          <h4>last update: 14 Feb</h4>
          <h4>7 min read</h4>
        </div>
      </div>
      <div className="flex mt-4 gap-6 border-b border-gray-400 pb-4 w-[60rem]">
        <button className="flex w-32 gap-1 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]">
          <Icon icon={"system-uicons:check"} height="24" />
          <h4>Approve</h4>
        </button>
        <button className="flex w-32 justify-center items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]">
          <Icon icon={"fluent:edit-48-regular"} height="16" />
          <h4>Edit</h4>
        </button>
        <button className="flex w-32 justify-center items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]">
          <Icon icon={"bi:send"} height="16" />
          <h4>Send</h4>
        </button>
        <button
          onClick={toPDF}
          className=" flex w-32 justify-center items-center gap-2 bg-gray-100 border border-gray-400 px-3 py-2 hover:bg-[#2a2a2a] hover:text-[#fcfcfc]"
        >
          <Icon icon={"clarity:download-line"} height="18" />
          <h4>Download</h4>
        </button>
      </div>
    </>
  );
};

export default Action;
