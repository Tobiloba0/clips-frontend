import Image from "next/image";
import Link from "next/link";

type PlatformItem = {
  label: string;
  href: string;
};

type LegalItem = {
  label: string;
  href: string;
};

const PLATFORM_ITEMS: PlatformItem[] = [
  { label: "YOUTUBE", href: "#" },
  { label: "TWITCH", href: "#" },
  { label: "TIKTOK", href: "#" },
  { label: "INSTA", href: "#" },
];

const LEGAL_ITEMS: LegalItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Settings", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer
      className={[
        "w-full border-t border-white/[0.07]",
        "bg-[#0A0A0ACC] backdrop-blur-xl",
        "px-4 md:px-6 py-4",
      ].join(" ")}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="ClipCash logo"
            height={100}
            width={400}
            className="object-cover w-28 h-auto"
          />
          <span className="text-white/30 text-xs">
            © 2024 ClipCash AI. All rights reserved.
          </span>
        </div>

        <nav
          aria-label="Partner platforms"
          className="flex items-center gap-6"
        >
          {PLATFORM_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "text-xs font-semibold tracking-widest",
                "text-white/30 hover:text-[#00C27C]",
                "transition-colors duration-200",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {LEGAL_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "text-xs text-white/30",
                "hover:text-white/70",
                "transition-colors duration-150",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </div>

      </div>
    </footer>
  );
}