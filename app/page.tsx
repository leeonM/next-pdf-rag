import { Chat } from "@/components/shared/Chat";
import Image from "next/image";

export default function Home() {

  return (
      <main className="relative flex min-h-screen flex-col px-10">
        <div className="p-4 flex h-14 items-center justify-between 
        sticky top-0 z-50 w-full">
          <div className="mt-2">
          <Image src={"/logo.png"} width={80} height={80} alt="logo" />
          </div>
        </div>
        <div className="flex flex-1 py-4">
          <div className="w-full">
            <Chat />
          </div>
        </div>
      </main>
      );
}
