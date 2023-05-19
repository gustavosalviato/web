import { User } from "lucide-react";

export function SignIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      className="flex items-center justify-center gap-3 text-left hover:text-gray-300"
    >
      <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-400">
        <User size={20} className="text-gray-500" />
      </div>

      <p className="text-sm leading-snug max-w-[200px]">
        <span className="underline transition-colors duration-300">
          Crie sua conta
        </span>{" "}
        e salve usas memórias
      </p>
    </a>
  );
}
