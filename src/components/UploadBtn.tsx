"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import Dropzone from "react-dropzone";
import { Cloud, Divide, File } from "lucide-react";

const UploadDropZone = () => {
  return (
    <Dropzone
      multiple={false}
      onDrop={(acceptedFile) => {
        console.log(acceptedFile);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 border-dashed border-gray-300 rounded-lg m-4"
        >
          <div className="h-full w-full flex items-center justify-center">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center h-full w-full rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Cloud className="h-6 w-6 text-zinc-500 mb-2" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span className="font-semibold"> Click to upload</span> or
                  drop a file here
                </p>
                <p className="text-xs text-zinc-500">PDF (up to 4MB)</p>
              </div>
              {acceptedFiles && acceptedFiles[0] ? <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                <div className="px-3 py-2 grid place-items-center h-full">
                  <File className="h-4 w-4 text-violet-500" />
                </div>
                <div className="px-3 py-2 truncate text-sm h-full">
                  {acceptedFiles[0].name}
                </div>
              </div> : null}
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

const UploadBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpen(v);
        }
      }}
    >
      <DialogTitle />
      <DialogTrigger onClick={() => setIsOpen(true)} asChild>
        <Button> Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <UploadDropZone />
      </DialogContent>
    </Dialog>
  );
};

export default UploadBtn;
