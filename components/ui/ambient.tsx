"use client";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mv = (e: MouseEvent) => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mv);
    return () => window.removeEventListener("mousemove", mv);
  }, []);
  return <div className="fixed z-50 w-8 h-8 rounded-full pointer-events-none bg-rosegold/30 blur-md" style={{ left: p.x - 16, top: p.y - 16 }} />;
}

export function MusicPlayer() {
  return (
    <audio controls className="fixed bottom-6 right-6 z-40 opacity-80">
      <source src="https://cdn.pixabay.com/audio/2023/12/11/audio_aa98c24b0c.mp3" type="audio/mpeg" />
    </audio>
  );
}
