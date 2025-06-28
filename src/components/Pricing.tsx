export function Pricing() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Ціни</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Базовий шаблон</h3>
          <p className="text-2xl font-bold mb-4">від 200 грн</p>
          <p>Обираєте з готових шаблонів</p>
        </div>
        <div className="border rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Індивідуальний дизайн</h3>
          <p className="text-2xl font-bold mb-4">від 500 грн</p>
          <p>Повністю кастомне запрошення</p>
        </div>
      </div>
    </section>
  );
}
