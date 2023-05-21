import Link from "next/link";
export function EmptyMemories() {
  return (
    <div className="flex flex-col p-16">
      <div className="flex flex-1 justify-center items-center">
        <p className="text-center leading-relaxed w-[360px]">
          Você ainda não registrou nenhuma lembrança, comece a{" "}
          <Link
            href="/memories/new"
            className="underline duration-300 transition-colors hover:underline hover:text-gray-50"
          >
            criar agora!
          </Link>
        </p>
      </div>
    </div>
  );
}
