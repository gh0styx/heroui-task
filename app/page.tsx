"use client";
import { useState, useEffect } from "react";

import EditMemeModal from "@/components/EditModal";
import MemeTable from "@/components/MemeTable";
import { initialMemes, Meme } from "@/data/memes";

export default function Home() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const stored = localStorage.getItem("memes");

    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      setMemes(initialMemes);
    }
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    localStorage.setItem("memes", JSON.stringify(memes));
  }, [memes, isClient]);

  const handleEdit = (meme: Meme) => setCurrentMeme(meme);

  const handleSave = (updatedMeme: Meme) => {
    setMemes((prev) =>
      prev.map((m) => (m.id === updatedMeme.id ? updatedMeme : m)),
    );
    setCurrentMeme(null);
  };

  if (!isClient) return null;

  return (
    <>
      <MemeTable memes={memes} onEdit={handleEdit} />
      <EditMemeModal
        isOpen={currentMeme !== null}
        meme={currentMeme || initialMemes[0]}
        onClose={() => setCurrentMeme(null)}
        onSave={handleSave}
      />
    </>
  );
}
