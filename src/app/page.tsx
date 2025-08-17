"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#00e0cf]">{appName}</h1>
      <p className="text-sm mb-4 text-gray-400">API: {apiUrl}</p>

      <nav className="flex gap-6 mb-6">
        <Link href="/about" className="hover:text-[#00e0cf]">About</Link>
        <Link href="/contact" className="hover:text-[#00e0cf]">Contact</Link>
      </nav>

      <p className="text-xl mb-4">Count: {count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded-2xl bg-[#00e0cf] text-black shadow"
        >
          Increment
        </button>
        <button
          onClick={() => setCount((c) => c - 1)}
          className="px-4 py-2 rounded-2xl bg-red-500 text-white shadow"
        >
          Decrement
        </button>
      </div>
    </main>
  );
}
