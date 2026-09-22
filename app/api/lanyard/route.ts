import { LANYARD_API_URL } from "@/lib/seo";

export async function GET() {
  try {
    const res = await fetch(LANYARD_API_URL, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json({ error: "Upstream request failed", status: res.status }, { status: 502 });
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return Response.json({ error: "Upstream returned non-JSON response" }, { status: 502 });
    }

    const data = await res.json();
    if (!data?.success || !data?.data?.discord_user?.id) {
      return Response.json({ error: "Invalid lanyard payload", data }, { status: 502 });
    }

    return Response.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch lanyard data", detail: error instanceof Error ? error.message : "unknown" },
      { status: 502 },
    );
  }
}
