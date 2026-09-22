import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            width: 28,
            height: 28,
            borderTop: "3px solid #3b82f6",
            borderLeft: "3px solid #3b82f6",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 28,
            height: 28,
            borderTop: "3px solid #3b82f6",
            borderRight: "3px solid #3b82f6",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            width: 28,
            height: 28,
            borderBottom: "3px solid #3b82f6",
            borderLeft: "3px solid #3b82f6",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            right: 18,
            width: 28,
            height: 28,
            borderBottom: "3px solid #3b82f6",
            borderRight: "3px solid #3b82f6",
          }}
        />
        <span
          style={{
            color: "#fafafa",
            fontSize: 72,
            fontWeight: 700,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            letterSpacing: "-0.08em",
            lineHeight: 1,
          }}
        >
          HH
        </span>
      </div>
    ),
    { ...size },
  );
}
