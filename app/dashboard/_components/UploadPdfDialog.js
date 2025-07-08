"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2Icon } from "lucide-react";
import uuid4 from "iuuid4";
import { useUser } from "@clerk/nextjs";
function UploadPdfDialog({ children }) {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const {user} = useUser()
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const addFileEntry = useMutation(api.fileStorage.AddFileEnteryToDb);
  const onFileSelect = (event) => {
    setFile(event.target.files[0]);
  };
  const onUpload = async () => {
    setLoading(true);
    // Step 1: Get a short-lived upload URL

    const postUrl = await generateUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    console.log("Storage:", storageId);
    // Step 3: Save the newly allocated storage id to the database
    const fileId = uuid4();
    setLoading(false);
  };
  
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Pdf File</DialogTitle>
            <DialogDescription asChild>
              <div className="">
                <div>
                  <p className="mt-5 text-black">Select the file to Upload</p>
                </div>
                <div className="gap-2 rounded-md border mt-1">
                  <Input
                    type="file"
                    accept="application/pdf"
                    className=""
                    onChange={(event) => {
                      onFileSelect(event);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <label className="text-black"> File Name:</label>
                  <Input
                    placeholder="File Name"
                    className="text-black"
                    onChange={(event) => onFileSelect(event)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="ml-1">
                Close
              </Button>
            </DialogClose>
            <Button onClick={onUpload}>
              {loading ? <Loader2Icon className="animate-spin" /> : "Upload"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UploadPdfDialog;
