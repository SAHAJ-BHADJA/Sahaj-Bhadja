"use client";

import Error from "next/error";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Basic client-side logging; replace with your preferred error tracker.
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-black-100 text-white flex min-h-screen items-center justify-center px-4">
        <main className="max-w-lg text-center space-y-4">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="text-white-100">
            An unexpected error occurred while loading this page. You can try
            again, or return to the homepage.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90"
            >
              Reload page
            </button>
            <Link
              href="/"
              className="rounded-md border border-white-100 px-4 py-2 text-sm font-medium text-white hover:bg-white-100/10"
            >
              Go home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
