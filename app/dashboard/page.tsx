"use client";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase";

type Note = { id: string; message: string; created_at: string };

export default function DashboardPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const supabase = supabaseBrowser();
    supabase.from("notes").select("*").order("created_at", { ascending: false }).then(({ data }) => setNotes((data as Note[]) || []));
    const channel = supabase.channel("notes-live").on("postgres_changes", { event: "*", schema: "public", table: "notes" }, (payload) => {
      if (payload.eventType === "INSERT") setNotes((n) => [payload.new as Note, ...n]);
    }).subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const save = async () => {
    const supabase = supabaseBrowser();
    await supabase.from("notes").insert({ message });
    setMessage("");
  };

  return <main className="min-h-screen p-8"><h1 className="font-serif text-5xl">Private Salon</h1><div className="mt-8 glass p-6 rounded-2xl"><textarea value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full bg-black/30 p-3 rounded" placeholder="Write a love note..." /><button onClick={save} className="mt-3 px-5 py-2 bg-rosegold text-black rounded">Send</button></div><ul className="mt-8 space-y-3">{notes.map((n)=><li key={n.id} className="glass p-4 rounded">{n.message}</li>)}</ul></main>;
}
