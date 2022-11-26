// Boilerplate
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./App.scss";

export default function App() {
// Preview Text
  const placeholder =
`# This is an H1 Header Element.

## This is an H2 Subheader Element.

[This is a Link.](https://www.github.com "GitHub")

\`This is Inline Code.\`

~~~js
  const s = "ds";
  alert(s);
~~~

~strike~

:+1:`
// Text Setter
  const [ text, setText ] = useState(placeholder)
  const handleChange = (content) => setText(content.target.value);
// Render
  return (
    <>
      <textarea
        id="editor"
        cols={30}
        rows={25}
        value={text}
        onChange={handleChange}
        />
      <ReactMarkdown
        id="preview"
        children={text}
        remarkPlugins={[remarkGfm, emoji]}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || "")
            return !inline && match ?
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={coldarkCold}
                PreTag="div"
                {...props}
              /> :
              <code className={className} {...props}>
                {children}
              </code>
          }
        }}
      />
    </>
  );
};