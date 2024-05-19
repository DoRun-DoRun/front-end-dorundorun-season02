import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-52 border w-full">
      <h2 className="font-bold">Main</h2>
      <div>
        <a href="/login">login</a>
      </div>
    </main>
  );
}
