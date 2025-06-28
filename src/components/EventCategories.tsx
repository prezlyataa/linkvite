export function EventCategories() {
  const categories = [
    {
      name: "Весілля",
      emoji: "👰",
      description: "Ніжні шаблони для вашого особливого дня",
    },
    {
      name: "Хрестини",
      emoji: "👶",
      description: "Запрошення для перших свят малюка",
    },
    {
      name: "День народження",
      emoji: "🎂",
      description: "Яскраві запрошення для дітей і дорослих",
    },
    {
      name: "Ювілей",
      emoji: "🎉",
      description: "Важлива дата — гідне запрошення",
    },
    {
      name: "Вечірка",
      emoji: "🍾",
      description: "Стильні варіанти на будь-який смак",
    },
  ];

  return (
    <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((cat, i) => (
        <div
          key={i}
          className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-2">{cat.emoji}</div>
          <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </section>
  );
}
