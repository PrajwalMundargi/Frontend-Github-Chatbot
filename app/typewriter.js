'use client';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [content, setContent] = useState([]); // State to hold the displayed lines
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Track if typing is complete

  const router = useRouter(); // Correctly access Next.js router

  // Formatted paragraph as an array of lines
  const paragraph = [
    `Beginners often face challenges in navigating and understanding large code repositories, which can make contributing to open-source projects or collaborative development intimidating.`,
    `Our project aims to address this issue by providing an intuitive solution: a chatbot tailored to assist users in exploring and understanding a given repository.`,
    `We plan to offer this functionality through a command-line interface (CLI) tool called *"gogetgit"* and an accompanying web platform.`,
    `These tools will enable users to interact with the bot seamlessly, gaining insights and information without the need to manually search through extensive codebases.`,
    `Our goal is to make repositories more accessible, empowering users to contribute with confidence and ease.`,
    `Tailored Insights: Our chatbot provides instant, repository-specific insights to help users understand codebases effortlessly.`,
    `One-Stop Solution: With "gogetgit" CLI and web platform, navigate, explore, and contribute—all in one place.`,
  ];

  // Convert paragraph into a flat array of words with line breaks
  const wordsWithBreaks = paragraph.flatMap((line, idx) => [
    ...line.split(" "),
    idx < paragraph.length - 1 ? "\n" : "", // Add line break after every line except the last one
  ]);

  // Async function for word-by-word typing animation
  const typeWords = async () => {
    let currentWords = [];
    for (let i = 0; i < wordsWithBreaks.length; i++) {
      if (wordsWithBreaks[i] === "\n") {
        // Add line break when a newline is encountered
        currentWords.push("\n");
      } else {
        // Add next word
        currentWords.push(wordsWithBreaks[i]);
      }
      setContent([...currentWords]); // Update state with the current content
      await new Promise((resolve) => setTimeout(resolve, 200)); // Wait 200ms before showing the next word
    }
    setIsTypingComplete(true); // Typing complete after all words are displayed
  };

  useEffect(() => {
    typeWords(); // Start the word-by-word animation
  }, []);

  function handleSubmit() {
    router.push("/chatpage"); // Use the correct router function
  }

  return (
    <div
      style={{
        textAlign: "center", // Center align content
        fontFamily: "monospace",
        color: "black",
        margin: "20px",
      }}
    >
      {/* Display words with proper line breaks */}
      <div
        style={{
          display: "inline-block",
          textAlign: "left", // Align text to the left inside the centered block
          lineHeight: "1.8",
          fontSize: "18px",
          whiteSpace: "pre-wrap", // Preserve line breaks
        }}
      >
        {content.map((word, index) =>
          word === "\n" ? (
            <br key={index} /> // Insert line break for "\n"
          ) : (
            <span key={index}>{word} </span> // Add space after each word
          )
        )}
      </div>
      {isTypingComplete && ( // Conditionally render the button after typing completes
        <button
          style={{
            marginTop: "20px",
            padding: "10px 30px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={handleSubmit} // Define "NEXT" button functionality
        >
          NEXT &gt;
        </button>
      )}
    </div>
  );
};

export default Typewriter;
