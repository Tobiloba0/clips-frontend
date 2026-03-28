"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, User } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Connections", href: "/connections" },
  { label: "Clips", href: "/clips" },
  { label: "Analytics", href: "/analytics" },
];

export default function Header() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-full items-center justify-between px-6">
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = item.label === "Connections"; // Hardcode Connections as active
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#00FF9D] border-b-2 border-[#00FF9D] pb-1"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side: Notifications and Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-300 hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 text-zinc-300 hover:text-white transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}