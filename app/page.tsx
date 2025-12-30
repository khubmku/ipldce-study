import Image from "next/image";

export default function Home() {
  const studyCards = [
    {
      title: "Paper I Notes",
      description: "Complete notes for LDCE IPO Paper-I preparation.",
      link: "/study/paper1",
      color: "bg-blue-500",
    },
    {
      title: "PPF Rules Summary",
      description: "Hindi-English mixed short notes for PPF rules.",
      link: "/study/ppf",
      color: "bg-green-500",
    },
    {
      title: "Children Education Allowance",
      description: "50 Q&A on CEA for CG employees.",
      link: "/study/cea",
      color: "bg-purple-500",
    },
    {
      title: "Annual Report Notes",
      description: "Important points from Department of Posts Annual Report.",
      link: "/study/annual-report",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans py-16 px-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-2">
          IPLDCE Study Dashboard
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Access your study materials and notes quickly
        </p>
      </header>

      <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studyCards.map((card) => (
          <a
            key={card.title}
            href={card.link}
            className={`${card.color} group relative block rounded-xl p-6 shadow-lg transition-transform hover:scale-105`}
          >
            <h2 className="text-xl font-semibold text-white mb-2">{card.title}</h2>
            <p className="text-white/90">{card.description}</p>
            <span className="absolute right-4 bottom-4 text-white text-sm opacity-70 group-hover:underline">
              Go →
            </span>
          </a>
        ))}
      </main>

      <footer className="mt-16 text-center text-zinc-500 dark:text-zinc-400">
        &copy; 2025 IPLDCE Study Dashboard
      </footer>
    </div>
  );
}
