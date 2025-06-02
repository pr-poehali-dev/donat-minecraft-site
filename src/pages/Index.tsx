import HeroSection from "@/components/HeroSection";
import DonationCard from "@/components/DonationCard";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const donationPackages = [
    {
      title: "VIP",
      price: 199,
      originalPrice: 299,
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
      icon: "Crown",
      features: [
        "Префикс [VIP] в чате",
        "Цветной ник и сообщения",
        "Доступ к VIP зонам",
        "Увеличенный инвентарь",
        "3 дома вместо 1",
        "Команда /feed",
      ],
    },
    {
      title: "PREMIUM",
      price: 399,
      originalPrice: 599,
      color: "bg-gradient-to-br from-purple-600 to-pink-600",
      icon: "Gem",
      popular: true,
      features: [
        "Все возможности VIP",
        "Префикс [PREMIUM]",
        "Полёт в мирном мире",
        "Приватные сундуки",
        "5 домов",
        "Команды /heal, /repair",
        "Доступ к аукциону",
      ],
    },
    {
      title: "ULTIMATE",
      price: 799,
      originalPrice: 1199,
      color: "bg-gradient-to-br from-red-600 to-rose-700",
      icon: "Rocket",
      features: [
        "Все возможности PREMIUM",
        "Префикс [ULTIMATE]",
        "Полёт везде",
        "Креативный инвентарь",
        "Неограниченные дома",
        "WorldEdit команды",
        "Приоритет в очереди",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Выбери свой донат-пакет
            </h2>
            <p className="text-lg text-gray-600">
              Поддержи сервер и получи уникальные привилегии
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationPackages.map((pkg, index) => (
              <DonationCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </div>

      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Index;
