"use client";

import { CloudUpload } from "lucide-react";

const DUMMY_USER = {
  name: "Alex",
};

export default function DashboardHeader() {
  const userName = DUMMY_USER.name;

  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl px-4 sm:px-6 py-5">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
          Welcome back, {userName}
        </h1>
        <p className="mt-1 text-sm sm:text-base text-zinc-400">
          Your AI is currently processing 3 new viral clips from your last
          stream.
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-xl bg-[#00E68A] px-4 sm:px-5 py-2.5 sm:py-3 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(0,230,138,0.35)] transition hover:brightness-95 w-full sm:w-auto justify-center"
      >
        <CloudUpload className="h-4 w-4" aria-hidden="true" />
        Quick Upload
      </button>
    </header>
  );
}
