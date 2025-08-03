"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function TextEditer() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
    editorProps:{
        attributes:{
            class:'focus:outline-none h-screen p-5'
        }
    },
    immediatelyRender: false,
  });
  return (
    <div>
      {" "}
      <EditorContent editor={editor} />
    </div>
  );
}

export default TextEditer;
