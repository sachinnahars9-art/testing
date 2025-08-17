export default function AboutPage() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold text-[#00e0cf]">About {appName}</h1>
      <p className="mt-2 max-w-md text-center">
        This application is built with Next.js and demonstrates routes, state management,
        and environment variables.
      </p>
    </main>
  );
}
