import { LoaderIcon } from "lucide-react";
import React from "react";

function PdfViewer({ fileUrl }) {
  console.log(fileUrl);
  return fileUrl==null?<LoaderIcon height="90vh" width="5%" className="animate-spin"/>: (
    <div>
      
      <iframe src={fileUrl+"#toolbar=0"} height="90vh" width="100%" className="h-[90vh]" />
    </div>
  );
}

export default PdfViewer;
