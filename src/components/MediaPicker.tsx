"use client";

import { ChangeEvent, useState } from "react";

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);

    setPreview(previewURL);
  }
  return (
    <div className="flex flex-col">
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        className="invisible h-0 w-0"
        id="media"
      />

      <div className="flex flexcol">
        {preview && (
          // eslint-disable-next-line
          <img
            src={preview}
            alt=""
            className="w-full aspect-video rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
}
