function Skeleton({
  width = "100%",
  height = "20px",
  borderRadius = "10px",
  style = {}
}) {

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: -500px 0;
          }

          100% {
            background-position: 500px 0;
          }
        }
      `}</style>

      <div
        style={{
          width,
          height,
          borderRadius,
          background:
            "linear-gradient(90deg,#e2e8f0 25%,#f8fafc 50%,#e2e8f0 75%)",
          backgroundSize: "400px 100%",
          animation: "shimmer 1.5s infinite linear",
          ...style
        }}
      />
    </>
  );
}

export default Skeleton;