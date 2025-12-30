import Image from "next/image";

export default function Home() {
  const studyCards = [
    {
      title: "Paper I Notes",
      description: "Complete notes for LDCE IPO Paper-I preparation.",
      link: "/study/paper1",
      color: "from-blue-500 to-blue-600",
      icon: "📄",
    },
    {
      title: "PPF Rules Summary",
      description: "Hindi-English mixed short notes for PPF rules.",
      link: "/study/ppf",
      color: "from-green-500 to-green-600",
      icon: "💰",
    },
    {
      title: "Children Education Allowance",
      description: "50 Q&A on CEA for CG employees.",
      link: "/study/cea",
      color: "from-purple-500 to-purple-600",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Annual Report Notes",
      description: "Important points from Department of Posts Annual Report.",
      link: "/study/annual-report",
      color: "from-orange-500 to-orange-600",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 font-sans py-16 px-6">
      <header className="mb-12 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="http://www.indiapost.gov.in/images/logo.jpg"
            alt="India Post Logo"
            width={120}
            height={120}
            className="mb-4 rounded-full shadow-lg"
            priority
          />
          <h1 className="text-5xl font-bold text-black dark:text-zinc-50 mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-zinc-50 dark:to-zinc-200 bg-clip-text text-transparent">
            IPLDCE Study Dashboard
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            Access your study materials and notes quickly for Inspector Posts LDCE preparation.
          </p>
        </div>
      </header>

      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {studyCards.map((card, index) => (
          <a
            key={card.title}
            href={card.link}
            className={`group relative block rounded-2xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${card.color} text-white overflow-hidden`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">{card.icon}</span>
            <h2 className="text-2xl font-bold mb-3 relative z-10">{card.title}</h2>
            <p className="relative z-10 text-white/95 mb-6">{card.description}</p>
            <span className="absolute right-4 bottom-4 text-white text-lg font-medium opacity-80 group-hover:translate-x-1 transition-transform relative z-10">
              Explore →
            </span>
          </a>
        ))}
      </main>

      <footer className="mt-20 text-center text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <p>&copy; 2025 IPLDCE Study Dashboard | Powered by India Post Department of Posts</p>
      </footer>
    </div>
  );
}