import { useUser } from "@/hooks/useUser";
import { User } from "lucide-react";
import Image from "next/image";

export function Profile() {
  const { avatarUrl, name } = useUser();
  return (
    <div className="flex items-center justify-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="w-10 h-10 rounded-full"
      />

      <p className="text-sm leading-snug max-w-[200px]">
        {name}

        <a href="/api/auth/logout" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  );
}
