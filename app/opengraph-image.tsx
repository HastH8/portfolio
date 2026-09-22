import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: 56,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          position: "relative",
        }}
      >
        {/* dashed frame */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1.5px dashed rgba(163,163,163,0.35)",
          }}
        />

        {/* corner brackets */}
        <div style={{ position: "absolute", top: 40, left: 40, width: 18, height: 18, borderTop: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6" }} />
        <div style={{ position: "absolute", top: 40, right: 40, width: 18, height: 18, borderTop: "2px solid #3b82f6", borderRight: "2px solid #3b82f6" }} />
        <div style={{ position: "absolute", bottom: 40, left: 40, width: 18, height: 18, borderBottom: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 18, height: 18, borderBottom: "2px solid #3b82f6", borderRight: "2px solid #3b82f6" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 48, marginLeft: 36 }}>
          <div style={{ color: "#3b82f6", fontSize: 22, letterSpacing: "0.08em" }}>
            {"//"} hastherish.com
          </div>
          <div style={{ color: "#fafafa", fontSize: 84, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            Ked.ss Dev
          </div>
          <div style={{ color: "#a3a3a3", fontSize: 28, letterSpacing: "0.02em" }}>
            Full Stack Developer · Toronto · York University
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginLeft: 36,
            marginRight: 36,
            marginBottom: 36,
            color: "#737373",
            fontSize: 20,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span>Web · Mobile · Desktop · FiveM · RedM</span>
          <span>@ked.ss</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
