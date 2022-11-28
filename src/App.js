// Boilerplate
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faEye } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";
// URLs
const testIcon = "https://upload.wikimedia.org/wikipedia/commons/0/02/CD_icon_test.svg"
const githubURL = "https://github.com/eldarlrd";
// Preview Text
export default function App() {
  const placeholder =
`# This is an H1 Header Element.

## This is an H2 Subheader Element.
---
[This is a Link.](. "Reload")

\`This is Inline Code.\`

~~~js
// Code Block
var i = "test";
console.log(i);
~~~

| Table | Header |
| ----- | ------ |
| First | Second |
| Third | Fourth |

![Test Icon](${testIcon})

> "A Block Quote,  
it's multiline."
---
- [X] Checked Item
- [ ] Unchecked Item

1. Ordered Item
2. Ordered Item

- Unordered Item
  - Indented Item
---
*Italic Text.*

**Bold Text.**

~Strikethrough Text.~

Emoji :+1:

Text with a Footnote.[^1]

[^1]: This is the Footnote.`
// Text Setter
  const [ text, setText ] = useState(placeholder)
  const handleChange = (content) => setText(content.target.value);
// Render
  return (
    <div id="container">
      <div id="topBar">
        Markdown Previewer by <a
                                target="_blank"
                                rel="noreferrer"
                                href={githubURL}>
                                eldarlrd</a>
      </div>
      <div id="editorBar">
        <FontAwesomeIcon icon={faPenNib} /> Editor
      </div>
      <textarea
        id="editor"
        cols={35}
        rows={20}
        value={text}
        onChange={handleChange}
      />
      <div id="previewBar">
        <FontAwesomeIcon icon={faEye} /> Preview
      </div>
      <div id="preview">
      <ReactMarkdown
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
      </div>
    </div>
  );
};