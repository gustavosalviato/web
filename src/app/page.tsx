import { cookies } from "next/headers";
import { SignIn } from "@/components/SignIn";
import { Copyright } from "@/components/Copyright";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";

export default function Home() {
  const isAuthenticated = cookies().has("token");
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />
        {isAuthenticated ?  <Profile /> : <SignIn />}
        <Hero />
        <Copyright />
      </div>

      <div className="flex flex-col p-16">
        <div className="flex flex-1 justify-center items-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a
              href="#"
              className="underline duration-300 transition-colors hover:underline hover:text-gray-50"
            >
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
