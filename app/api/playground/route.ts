import { NextResponse } from "next/server";

const playgroundUrl =
  process.env.GOB_API_URL ?? "https://api.gob.hadrawi.com/api/playground/run";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const code = typeof body.code === "string" ? body.code.trim() : "";

    if (!code) {
      return NextResponse.json(
        { error: "Fadlan qor code aad orodsiiso." },
        { status: 400 },
      );
    }

    const response = await fetch(playgroundUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
      cache: "no-store",
    });

    const data = await response.json().catch(() => null);
    if (!response.ok) {
      return NextResponse.json(
        { error: data?.message ?? data?.error ?? "Code-ku ma socon." },
        { status: response.status },
      );
    }

    const errors = Array.isArray(data?.errors)
      ? data.errors.map((error: unknown) => String(error))
      : [];

    return NextResponse.json({
      result: data?.result ?? "",
      errors,
    });
  } catch {
    return NextResponse.json(
      { error: "Playground-ka lama xiriiri karo. Mar kale isku day." },
      { status: 502 },
    );
  }
}
