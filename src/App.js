// Boilerplate
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./App.scss";

export default function App() {
// Render
  return (
    <>
      <ReactMarkdown remarkPlugins={remarkGfm}>
      </ReactMarkdown>
    </>
  );
};