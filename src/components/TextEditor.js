import React, { useMemo, useEffect, useState } from "react";
import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
// import { Container } from './styles';

export default function TextEditor() {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable onKeyDown={event=>{
          if(event.key==='&'){
              event.preventDefault();
              editor.insertText("and")
          }
      }}/>
    </Slate>
  );
}
