import Image from "next/image";

const avatars = [
  {
    id: 1,
    src: "/images/Avatar.png",
    alt: "Creator avatar 1",
  },
  {
    id: 2,
    src: "/images/Avatar2.png",
    alt: "Creator avatar 2",
  },
  {
    id: 3,
    src: "/images/Avatar.png",
    alt: "Creator avatar 3",
  },
  
];

interface CreatorBadgeProps {
  count?: string;
  label?: string;
}

export default function CreatorBadge({
  count = "2,500+",
  label = "top creators this month.",
}: CreatorBadgeProps) {
  return (
   
    <div className="hidden sm:flex items-center gap-3 select-none">
 
      <div className="flex -space-x-3">
        {avatars.map((avatar, i) => (
          <div
            key={avatar.id}
            className="
              relative h-9 w-9 rounded-full overflow-hidden shrink-0
              ring ring-[#1a2a35]         
              shadow-[0_0_0_1px_rgba(255,255,255,0.08)]  
              transition-transform duration-200
              hover:translate-y-0.75 hover:z-10
            "
            style={{ zIndex: avatars.length - i }}
          >
          
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

     
      <p className="text-sm leading-snug text-[#8fa8b8] whitespace-nowrap">
        Joined by{" "}
        <span className="font-semibold text-white tracking-tight">{count}</span>{" "}
        {label}
      </p>
    </div>
  );
}