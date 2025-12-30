import Image from "next/image";

export default function Home() {
  const studyCards = [
    {
      title: "Paper-I",
      description: "Notes, rules & MCQs for LDCE IPO Paper-I.",
      // link: "/study/paper1",
      link: "/paper-1",

      color: "from-blue-500 to-blue-600",
      icon: "📘",
    },
    {
      title: "Paper-II",
      description: "Postal manuals, accounts & procedures.",
      link: "/study/paper2",
      color: "from-green-500 to-green-600",
      icon: "📗",
    },
     {
      title: "Paper-III",
      description: "Postal manuals, accounts & procedures.",
      link: "/study/paper3",
      color: "from-orange-400 to-orange-600",
      icon: "📗",
    },
    {
      title: "Syllabus",
      description: "Updated LDCE IPO syllabus with weightage.",
      link: "/study/syllabus",
      color: "from-purple-500 to-purple-600",
      icon: "📝",
    },
    {
      title: "Other Resources",
      description: "CEA, PPF, Annual Report & misc notes.",
      link: "/study/others",
      color: "from-orange-500 to-orange-600",
      icon: "📂",
    },
     {
      title: "Previous Years' Question Papers",
      description: "A collection of Previous Years' Question Papers.",
      link: "/study/PreviousQuestion",
      color: "from-green-500 to-green-600",
      icon: "📗",
    },
     {
      title: "G.K. and Current Affairs",
      description: "Sets of Questions from G.K. and Current Affairs",
      link: "/study/CurrentAffairs",
      color: "from-purple-500 to-purple-600",
      icon: "📝",
    },
    {
      title: "Vacancy ,Notification and Other Details ",
      description: "Vacancy ,Notification and Other Details",
      link: "/study/paper1",
      color: "from-blue-500 to-blue-600",
      icon: "📘",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900 py-14 px-6">
      
      {/* Header */}
      <header className="mb-10 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="App Logo"
            width={100}
            height={100}
            className="mb-3 rounded-full shadow-md"
            priority
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-zinc-50 dark:to-zinc-200 bg-clip-text text-transparent">
            Study Dashboard
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            LDCE IPO preparation – quick access study material
          </p>
        </div>
      </header>

      {/* Cards */}
      <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {studyCards.map((card) => (
          <a
            key={card.title}
            href={card.link}
            className={`group relative block rounded-xl p-5 shadow-lg transition-all duration-300 hover:scale-[1.03] bg-gradient-to-br ${card.color} text-white`}
          >
            <span className="text-3xl block mb-3">{card.icon}</span>
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-white/90">{card.description}</p>

            <span className="absolute right-4 bottom-3 text-sm opacity-80 group-hover:translate-x-1 transition-transform">
              Open →
            </span>
          </a>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-6">
        © 2025 Study Dashboard |PANKH CLASSES
      </footer>
    </div>
  );
}
