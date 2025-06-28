function Step({ number, text }: { number: number; text: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow text-center">
      <div className="text-2xl font-bold text-pink-500 mb-2">Крок {number}</div>
      <p>{text}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Як це працює</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Step number={1} text="Виберіть стиль запрошення" />
        <Step number={2} text="Передайте нам деталі події" />
        <Step number={3} text="Отримайте лінк для розсилки" />
      </div>
    </section>
  );
}
