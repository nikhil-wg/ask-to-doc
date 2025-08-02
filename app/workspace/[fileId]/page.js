"use client";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import PdfViewer from "../_components/PdfViewer";
import {  useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


function Workspace() {
  const { fileId } = useParams();
  const fileInfo = useQuery(api.fileStorage.GetFileRecord, {
    fileId: fileId,
  });
  useEffect(() => {
    console.log(fileInfo);
  }, [fileInfo]);
  return (
    <div>
      <WorkspaceHeader />
      <div>
        <div>{/* text editer */}</div>
        <div>
          {/* pdf viewer*/}
          <PdfViewer />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
