import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            top: 3,
            left: 3,
            width: 5,
            height: 5,
            borderTop: "1.5px solid #3b82f6",
            borderLeft: "1.5px solid #3b82f6",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 3,
            right: 3,
            width: 5,
            height: 5,
            borderTop: "1.5px solid #3b82f6",
            borderRight: "1.5px solid #3b82f6",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 3,
            left: 3,
            width: 5,
            height: 5,
            borderBottom: "1.5px solid #3b82f6",
            borderLeft: "1.5px solid #3b82f6",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 3,
            right: 3,
            width: 5,
            height: 5,
            borderBottom: "1.5px solid #3b82f6",
            borderRight: "1.5px solid #3b82f6",
          }}
        />
        <span
          style={{
            color: "#fafafa",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            letterSpacing: "-0.06em",
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
