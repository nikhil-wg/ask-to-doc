"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extensions";
import EditerExtention from "./EditerExtention";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

function TextEditer({ fileId }) {
  const notes = useQuery(api.notes.GetNotes, {
    fileId: fileId,
  });
  console.log(notes);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Ask your document anything here..",
      }),
    ],

    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-5",
      },
    },
    immediatelyRender: false,
  });

  useEffect(() => {
  editor && editor.commands.setContent(notes);
}, [editor && notes]);
  return (
    <div>
      <div>
        <EditerExtention editor={editor} />
      </div>
      <div className="overflow-scroll h-[88vh] border-1">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TextEditer;
