import { ImageResponse } from "next/og";

export const alt = "Ked.ss Dev — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          padding: "72px 80px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          border: "24px solid #0a0a0a",
          boxShadow: "inset 0 0 0 1px rgba(163,163,163,0.35)",
        }}
      >
        <div style={{ display: "flex", color: "#3b82f6", fontSize: 24, marginBottom: 28 }}>
          {"//"} hastherish.com
        </div>
        <div
          style={{
            display: "flex",
            color: "#fafafa",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Ked.ss Dev
        </div>
        <div style={{ display: "flex", color: "#a3a3a3", fontSize: 28, marginBottom: 56 }}>
          Full Stack Developer · Toronto · York University
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#737373",
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Web · Mobile · Desktop · FiveM · RedM</div>
          <div style={{ display: "flex" }}>@ked.ss</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
