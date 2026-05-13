import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const form = await req.formData();
  const file = form.get("file") as File;
  const title = String(form.get("title") || "Untitled");
  const description = String(form.get("description") || "");
  const filePath = `memories/${Date.now()}-${file.name}`;
  const { error } = await supabase.storage.from("memories").upload(filePath, file);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  const { data: pub } = supabase.storage.from("memories").getPublicUrl(filePath);
  await supabase.from("memories").insert({ title, description, image_url: pub.publicUrl });
  return NextResponse.json({ url: pub.publicUrl });
}
