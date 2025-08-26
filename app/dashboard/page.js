"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UploadPdfDialog from "./_components/UploadPdfDialog";
import { Button } from "@/components/ui/button";

function Dashboard() {
  const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });
  console.log("file list:", fileList);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Dashboard</h2>
        <UploadPdfDialog isMaxFile={fileList?.length >= 5 ? true : false}>
          <Button >+ Upload PDF</Button>
        </UploadPdfDialog>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 m-10">
        {fileList
          ? fileList.map((file, index) => (
              <Link key={file.fileId} href={`/workspace/${file.fileId}`}>
                <div
                  key={index}
                  className="flex p-5 shadow-md rounded-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-transform"
                >
                  <Image
                    src={"/pdfImg.png"}
                    alt="file logo"
                    width={70}
                    height={70}
                  />
                  <h2 className=" font-medium text-lg align-middle">
                    {file?.fileName}
                  </h2>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 rounded-md h-[180px] animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
