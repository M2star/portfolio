"use client";
import React, { useEffect, useState } from "react";

const Messenger = ({ messages }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentLength, setCurrentLength] = useState(0);
  const [fadeBuffer, setFadeBuffer] = useState(false);
  const codeLetters = "&#*+%?£@§$";
  const [message, setMessage] = useState("");

  useEffect(() => {
    const animateIn = () => {
      if (currentLength < messages[messageIndex].length) {
        setCurrentLength(currentLength + 2);
        if (currentLength > messages[messageIndex].length) {
          setCurrentLength(messages[messageIndex].length);
        }
        let message = generateRandomString(currentLength);
        setMessage(message);
        setTimeout(animateIn, 20);
      } else {
        setTimeout(animateFadeBuffer, 20);
      }
    };

    const animateFadeBuffer = () => {
      if (fadeBuffer === false) {
        setFadeBuffer([]);
        for (let i = 0; i < messages[messageIndex].length; i++) {
          let fader = fadeBuffer;
          if (!fader) fader = [];
          fader.push({
            c: Math.floor(Math.random() * 12) + 1,
            l: messages[messageIndex].charAt(i),
          });
        }
      }

      let doCycles = false;
      let message = "";

      fadeBuffer.forEach((fader) => {
        if (fader.c > 0) {
          doCycles = true;
          fader.c--;
          message += codeLetters.charAt(
            Math.floor(Math.random() * codeLetters.length)
          );
        } else {
          message += fader.l;
        }
      });

      setMessage(message);

      if (doCycles === true) {
        setTimeout(animateFadeBuffer, 50);
      } else {
        setTimeout(cycleText, 2000);
      }
    };

    const cycleText = () => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
      setCurrentLength(0);
      setFadeBuffer(false);
      setMessage("");
      setTimeout(animateIn, 200);
    };

    const generateRandomString = (length) => {
      let randomText = "";
      while (randomText.length < length) {
        randomText += codeLetters.charAt(
          Math.floor(Math.random() * codeLetters.length)
        );
      }
      return randomText;
    };

    const initialAnimation = setTimeout(animateIn, 100);

    return () => {
      clearTimeout(initialAnimation);
    };
  }, [messageIndex, currentLength, fadeBuffer, codeLetters, messages]);

  return (
    <div id="messenger">
      <p>Random Text: {message}</p>
    </div>
  );
};

export default Messenger;
