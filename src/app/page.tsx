"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  // ✅ Safe access with explicit typing
  const appName: string | undefined = process.env.NEXT_PUBLIC_APP_NAME;
  const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

  console.log("APP NAME:", appName);
  console.log("API URL:", apiUrl);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">{appName}</h1>
      <p className="mb-2">API URL: {apiUrl}</p>
      <p className="mb-4 text-xl">Count: {count}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded-full bg-teal-400 text-black"
        >
          Increment
        </button>
        <button
          onClick={() => setCount((c) => c - 1)}
          className="px-4 py-2 rounded-full bg-red-500 text-white"
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
