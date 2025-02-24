import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import '../App.css';

function Codereview() {
  const [code, setCode] = useState(`console.log("Hello, world!");`);
  const [review, setReview] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setIsLoading(true);
    setReview('');
    try {
      const response = await axios.post('https://codereview-lyart.vercel.app/codereview/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error reviewing code:", error);
      setReview("An error occurred while reviewing the code.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <div className="left">
        <h3>Code Editor 🧑‍💻</h3>
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              backgroundColor: "#020617",
              color: "#ffffff",
              border: "0.5px solid #374151",
              boxShadow: "none",
              width: "100%",
              height: "100vh",
              overflow: "auto",
              whiteSpace: "pre-wrap",
              outline: "none",
            }}
          />
        </div>
        <div
          onClick={reviewCode}
          className={`review ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Loading...' : 'Review Code'}
        </div>
      </div>
      <div className="right">
        <h3>Ai review 🚀</h3>
        {isLoading ? (
          <div className="ai-rocket">🚀</div>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}
      </div>
    </main>
  );
}

export default Codereview;
