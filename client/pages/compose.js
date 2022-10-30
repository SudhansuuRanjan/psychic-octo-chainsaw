import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false
});

export default function Compose() {
  const [content, setContent] = useState("");
  return (
    <div>
      <SunEditor
        // width="80%"
        
        name="content"
        defaultValue={content}
        onChange={(text) => setContent(text)}
        setOptions={{
          height: 200,
          buttonList: [
            [
              "formatBlock",
              "font",
              "fontSize",
              "fontColor",
              "align",
              "paragraphStyle",
              "blockquote"
            ],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript"
            ],
            ["removeFormat"],
            ["outdent", "indent"],
            ["table", "list"],
            ["link", "image", "video"]
          ]
        }}
      />
      <div>{content}</div>
    </div>
  );
}













// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const compose = () => {
//   const [value, setValue] = useState("");


//   return (
//     <>
//       <div>Hello from compose</div>
//       <ReactQuill theme="snow" value={value} onChange={setValue} />
//     </>
//   );
// };

// export default compose;
