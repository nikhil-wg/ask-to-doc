" use client";
import { useEffect, useState } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  List,
  Quote,
  Sparkle,
  Sparkles,
} from "lucide-react";
import React from "react";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { chatSession } from "@/configs/AiModel";

import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function EditerExtention({ editor }) {
  const { fileId } = useParams();
  const [, setEditorState] = useState(0);
  const searchAi = useAction(api.myAction.search);
  const saveNotes = useMutation(api.notes.AddNotes);
  const { user } = useUser();
  const onAiClick = async () => {
    toast("Your answer is getting ready by AI....");
    const selectedText = editor.state.doc.textBetween(
      editor.state.selection.from,
      editor.state.selection.to,
      " "
    );
    const result = await searchAi({
      query: selectedText,
      fileId: fileId,
    });
    const UnformatedAns = JSON.parse(result);
    let AllUnformatedAns = "";
    UnformatedAns &&
      UnformatedAns.forEach((item) => {
        AllUnformatedAns = AllUnformatedAns + item.pageContent;
      });
    console.log("unformated anwer: " + AllUnformatedAns);

    const PROMPT =
      `For the question: "${selectedText}", using the given context below, write a concise answer in HTML format. ` +
      `Requirements: ` +
      `1. Limit to 4–5 sentences. ` +
      `2. Focus only on clarity and accuracy. ` +
      `3. Output ONLY one <p> tag with the answer text inside. ` +
      `4. Do NOT include JSON, quotes, keys, or any other formatting outside the <p> tag. ` +
      `Example of expected output: <p>Group 15 has three members according to the provided information. These members are Nikhil Wagh, Swaraj Gaikwad, and Yash Jejurkar. Therefore, the total count is three individuals within this group.</p> ` +
      `Context: ${AllUnformatedAns}`;

    let html = "";

    try {
      const result = await chatSession.sendMessage(PROMPT);
      const response = await result.response;
      const rawText = response.text();

      const match = rawText.match(/<p>.*?<\/p>/s);

      // If a match is found, use it. Otherwise, use the raw text for debugging.
      html = match ? match[0] : rawText;

      console.log("AI Generated HTML:", html);
    } catch (error) {
      console.error("Gemini API Error:", error);
      html = "<p>Error generating AI response.</p>";
    }

    const AllText = editor.getHTML();
    editor.commands.setContent(
      AllText + "<p><strong>Answer:</strong> " + html + "</p>"
    );

    saveNotes({
      notes: editor.getHTML(),
      fileId: fileId,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
  };
  const SaveProgress = () => {

    saveNotes({
      notes: editor.getHTML(),
      fileId: fileId,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    });
    toast("Saved the progress");
  };

  useEffect(() => {
    if (!editor) return;

    const updateListener = () => {
      setEditorState((prev) => prev + 1);
    };

    editor.on("update", updateListener);
    editor.on("selectionUpdate", updateListener);

    return () => {
      editor.off("update", updateListener);
      editor.off("selectionUpdate", updateListener);
    };
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="p-5">
      <div className="control-group">
        <div className="button-group flex gap-3">
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "text-blue-700"
                : "text-gray-900"
            }
          >
            <Heading1 />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "text-blue-700"
                : "text-gray-900"
            }
          >
            <Heading2 />
          </button>
          <button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 })
                ? "text-blue-700"
                : "text-gray-900"
            }
          >
            <Heading3 />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded ${
              editor.isActive("bold") ? "text-blue-700" : "text-gray-900"
            }`}
          >
            <Bold />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded ${
              editor.isActive("italic") ? "text-blue-700" : "text-gray-900"
            }`}
          >
            <Italic />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`p-2 rounded ${
              editor.isActive("code") ? "text-blue-700" : "text-gray-900"
            }`}
          >
            <Code />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote") ? "text-blue-700" : "text-gray-900"
            }
          >
            <Quote />
          </button>

          <button
            onClick={() =>
              editor.chain().focus().toggleHighlight({ color: "#fef08a" }).run()
            }
            className={`p-2 rounded ${
              editor.isActive("highlight", { color: "#fef08a" })
                ? "bg-yellow-300 text-black"
                : "text-gray-900"
            }`}
          >
            <Highlighter />
          </button>

          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList") ? "text-blue-700" : "text-gray-900"
            }
          >
            <List />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={
              editor.isActive({ textAlign: "left" })
                ? "text-blue-700"
                : "text-gray-900"
            }
          >
            <AlignLeft />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" })
                ? "text-blue-700"
                : "text-gray-900"
            }
          >
            <AlignCenter />
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={
              editor.isActive({ textAlign: "right" })
                ? "text-blue-700"
                : "text-gray-900"
            }
          >
            <AlignRight />
          </button>

          {/* here on clicked for serch the qurey  */}
          <button
            onClick={() => onAiClick()}
            className="text-blue-700 cursor-pointer bg-blue-200 rounded-2xl p-2 hover:bg-blue-300 "
          >
            <Sparkles size={25} />
          </button>
          <div className="flex gap-2 items-center">
            <Button onClick={() => SaveProgress()}>Save Progress</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditerExtention;
