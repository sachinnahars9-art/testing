"use client";
import { useEffect, useState } from "react";

type AboutResponse = {
  message: string;
  squareOf5: number;
  appInfo: {
    app: string;
    api: string;
  };
};

export default function AboutPage() {
  const [data, setData] = useState<AboutResponse | null>(null);

  // Call backend API
  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((json: AboutResponse) => setData(json));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-[#00e0cf]">About (Backend)</h1>

      {data ? (
        <div className="mt-4 bg-gray-900 p-4 rounded-xl shadow-md">
          <p>👉 Message: {data.message}</p>
          <p>👉 Square of 5: {data.squareOf5}</p>
          <p>👉 App Name: {data.appInfo.app}</p>
          <p>👉 API URL: {data.appInfo.api}</p>
        </div>
      ) : (
        <p className="text-gray-400 mt-4">Loading...</p>
      )}
    </main>
  );
}
