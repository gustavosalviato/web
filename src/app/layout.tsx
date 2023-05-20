import { Profile } from "@/components/Profile";
import "./globals.css";
import { SignIn } from "@/components/SignIn";
import { Hero } from "@/components/Hero";
import { Copyright } from "@/components/Copyright";
import { cookies } from "next/headers";

export const metadata = {
  title: "space time",
  description: "a time capsule",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("token");
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100">
        <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

            <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />
            {isAuthenticated ? <Profile /> : <SignIn />}
            <Hero />
            <Copyright />
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
