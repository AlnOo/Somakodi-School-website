// src/app/api/upload-resume/route.js
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Create Supabase client with service role key (server only)
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Convert File to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    // Create a safe unique filename
    const safeName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    // Upload to the configured bucket
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(safeName, buffer, {
        contentType: file.type,
      });

    if (uploadError) {
      console.error("Supabase upload error:", uploadError);
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }

    // Create a signed URL (1 year)
    const { data: urlData, error: urlError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .createSignedUrl(safeName, 60 * 60 * 24 * 365);

    if (urlError) {
      console.error("Supabase signed URL error:", urlError);
      return NextResponse.json({ error: "Failed to create signed URL" }, { status: 500 });
    }

    return NextResponse.json({ url: urlData.signedUrl });
  } catch (err) {
    console.error("Upload-resume route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
