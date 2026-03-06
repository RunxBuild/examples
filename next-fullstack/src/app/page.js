"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData({ message: "API error" }));
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>RunxBuild Next.js Fullstack App</h1>

      <p>This page is rendered by Next.js frontend.</p>

      <div style={{ marginTop: "20px" }}>
        <strong>Backend Response:</strong>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  );
}
