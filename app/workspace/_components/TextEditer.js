"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extensions";
import EditerExtention from "./EditerExtention";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from '@tiptap/extension-text-align'



function TextEditer() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
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
  return (
    <div>
      <div>
        <EditerExtention editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

export default TextEditer;
