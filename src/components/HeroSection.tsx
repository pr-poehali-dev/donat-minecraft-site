import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 font-montserrat">
            🎮 MineWorld Server
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Поддержи наш сервер и получи уникальные привилегии! Каждый донат
            помогает развивать проект и добавлять новый контент.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-gray-100 font-semibold"
          >
            <Icon name="Crown" size={20} />
            Выбрать донат
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-700"
          >
            <Icon name="Users" size={20} />
            Онлайн: 247 игроков
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Zap"
              size={32}
              className="mx-auto mb-3 text-yellow-400"
            />
            <h3 className="text-lg font-semibold mb-2">Мгновенно</h3>
            <p className="text-sm opacity-80">
              Привилегии активируются автоматически после оплаты
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Shield"
              size={32}
              className="mx-auto mb-3 text-blue-400"
            />
            <h3 className="text-lg font-semibold mb-2">Безопасно</h3>
            <p className="text-sm opacity-80">
              Защищённые платежи через проверенные системы
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon
              name="Heart"
              size={32}
              className="mx-auto mb-3 text-red-400"
            />
            <h3 className="text-lg font-semibold mb-2">Поддержка</h3>
            <p className="text-sm opacity-80">
              Помогаешь развитию сервера и добавлению контента
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
