import { User } from "lucide-react";
import Image from "next/image";
import NLWLogo from "../../assets/logo.svg";
export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 opacity-50 -translate-y-1/2 translate-x-1/2 rounded-full blur-full" />

        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />

        <a
          href=""
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

        {/* Hero */}
        <div>
          <Image src={NLWLogo} alt="NLW SpaceTime" />

          <div className="mt-5">
            <h1 className="font-bold text-4xl leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed mt-1 max-w-[500px]">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>

            <a
              href=""
              className="mt-5 block px-5 py-3 uppercase bg-green-500 rounded-full w-fit text-sm text-black font-bold font  transition-colors duration-300 hover:bg-green-500/60"
            >
              CADASTRAR LEMBRAÇA
            </a>
          </div>
        </div>

        <div className="text-sm text-gray-200">
          Feito com 💜 {" "}

          <a
            href="https://github.com/gustavosalviato"
            target="_blank"
            rel="noreferrer"
            className="underline duration-300 transition-colors hover:text-gray-50"
          >
            gustavosalviato
          </a>
        </div>
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
