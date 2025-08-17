import { NextResponse } from "next/server";

// Lambda functions
const greet = (name: string) => `Hello, ${name}! Welcome to the backend 🚀`;
const square = (n: number) => n * n;
const getAppInfo = () => ({
  app: process.env.NEXT_PUBLIC_APP_NAME || "My App",
  api: process.env.NEXT_PUBLIC_API_URL || "No API URL found",
});

// GET request
export async function GET() {
  return NextResponse.json({
    message: greet("Sachin"),
    squareOf5: square(5),
    appInfo: getAppInfo(),
  });
}

// POST request
export async function POST(req: Request) {
  const body = await req.json();
  const { number } = body;

  return NextResponse.json({
    input: number,
    squared: square(number),
  });
}
