"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"; // Import the Alert component

import { convertFileToUrl } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const imageTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"];
    const isValid = acceptedFiles.every(file => imageTypes.includes(file.type));

    if (isValid) {
      setError(null);
      onChange(acceptedFiles);
    } else {
      setError("Only image files (SVG, PNG, JPG, GIF) are allowed.");
    }
  }, [onChange]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
<>
{error && (
  <Alert variant="destructive" className="text-red-500 border-red-500">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      {error}
    </AlertDescription>
  </Alert>
)}
<div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />

      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt="uploaded image"
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            width={40}
            height={40}
            alt="upload"
          />
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-12-regular">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
</>
    
  );
};