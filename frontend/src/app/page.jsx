"use client";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <main className="flex flex-col items-center justify-center mt-20 text-center flex-grow">
        <h1 className="text-2xl md:text-3xl font-semibold text-blue-400 flex items-center gap-2">
          Current Products <span>🚀</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base">
          No products found <span>🥺</span>{" "}
          <Link href="/Create" className="text-blue-400 hover:underline hover:text-blue-500">
            Create a product
          </Link>
        </p>
      </main>
    </div>
  );
}
