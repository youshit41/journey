"use client";
import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = supabaseBrowser();
    await supabase.auth.signUp({ email, password });
    router.push("/login");
  };
  return <form onSubmit={register} className="min-h-screen grid place-items-center p-6"><div className="glass p-8 rounded-2xl w-full max-w-md space-y-4"><h1 className="font-serif text-3xl">Register</h1><input className="w-full bg-black/40 p-3 rounded" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><input type="password" className="w-full bg-black/40 p-3 rounded" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} /><button className="w-full bg-rosegold text-black p-3 rounded">Create Account</button></div></form>;
}
