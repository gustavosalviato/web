import Image from "next/image";
import NLWLogo from "../../assets/logo.svg";
export function Hero() {
  return (
    <div>
      <Image src={NLWLogo} alt="NLW SpaceTime" />

      <div className="mt-5">
        <h1 className="font-bold text-4xl leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>

        <p className="text-lg text-gray-100 leading-relaxed mt-1 max-w-[500px]">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>

        <a
          href=""
          className="mt-5 block px-5 py-3 uppercase bg-green-500 rounded-full w-fit text-sm text-black font-bold font  transition-colors duration-300 hover:bg-green-500/60"
        >
          CADASTRAR LEMBRAÇA
        </a>
      </div>
    </div>
  );
}
