"use client";
import { useState, useEffect } from "react";

interface TypingTextProps {
  textList: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  delayAfterTypingMs?: number;
  loop?: boolean;
  cursor?: {
    visible: boolean,
    character: string,
    blinkSpeedMs: number,
  };
  containerClasses?: string;
  textClasses?: string;
  highlightWord?: boolean;
  highlightClasses?: string;
}

export default function TypingText({
  textList,
  typingSpeedMs = 90,
  deletingSpeedMs = 60,
  delayAfterTypingMs = 1200,
  loop = true,
  cursor = { visible: true, character: "|", blinkSpeedMs: 500 },
  containerClasses = "",
  textClasses = "",
  highlightWord = false,
  highlightClasses = "",
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textList[index % textList.length];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (loop ? prev + 1 : prev));
        }
      }, deletingSpeedMs);
    } else {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeedMs);
      } else {
        timer = setTimeout(() => setIsDeleting(true), delayAfterTypingMs);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    index,
    textList,
    typingSpeedMs,
    deletingSpeedMs,
    delayAfterTypingMs,
    loop,
  ]);

  return (
    <div className={containerClasses} aria-live="polite">
      <span className={textClasses}>
        {highlightWord ? (
          <span className={highlightClasses}>{displayText}</span>
        ) : (
          displayText
        )}
        {cursor.visible && (
          <span
            style={{
              animation: `blink ${cursor.blinkSpeedMs}ms step-end infinite`,
            }}
          >
            {cursor.character}
          </span>
        )}
      </span>
      <style jsx>{`
        @keyframes blink {
          from,
          to {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
