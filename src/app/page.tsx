import { Bars2Icon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between bg-slate-100 
      p-24 
      dark:bg-purple-950"
    >
      <nav>
        <Bars2Icon className="h-6 w-6" />
      </nav>
    </main>
  );
}
