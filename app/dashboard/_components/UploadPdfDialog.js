import React from "react";
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
function UploadPdfDialog({ children }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Pdf File</DialogTitle>
            <DialogDescription>
              <div className="">
                <p className="mt-5 text-black">Select the file to Upload</p>
                <div className="gap-2 rounded-md border mt-1">
                  <Input type="file" accept="application/pdf" className="" />
                </div>
                <div className="mt-2">
                  <label className="text-black"> File Name:</label>
                  <Input placeholder="File Name" className="text-black" />
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
            <Button>Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UploadPdfDialog;
