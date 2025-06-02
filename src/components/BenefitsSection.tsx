import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Pickaxe",
      title: "Уникальные инструменты",
      description: "Получай доступ к эксклюзивным инструментам и оружию",
    },
    {
      icon: "Home",
      title: "Приватные территории",
      description: "Защищай свои постройки от других игроков",
    },
    {
      icon: "Gem",
      title: "Особые ресурсы",
      description: "Добывай редкие блоки и материалы быстрее",
    },
    {
      icon: "Palette",
      title: "Кастомизация",
      description: "Уникальные скины, эффекты и косметические предметы",
    },
    {
      icon: "MessageCircle",
      title: "VIP чат",
      description: "Доступ к приватным каналам и цветному чату",
    },
    {
      icon: "Rocket",
      title: "Быстрые перемещения",
      description: "Телепорты, полёты и другие способности перемещения",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Что даёт донат?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый донат открывает новые возможности в игре и помогает
            поддерживать сервер
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Icon
                  name={benefit.icon as any}
                  size={24}
                  className="text-green-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
