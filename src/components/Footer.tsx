import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🎮 MineWorld</h3>
            <p className="text-gray-400 mb-4">
              Лучший Minecraft сервер с уникальными возможностями и дружелюбным
              сообществом.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Подключение</h4>
            <ul className="space-y-2 text-gray-400">
              <li>IP: play.mineworld.ru</li>
              <li>Порт: 25565</li>
              <li>Версия: 1.19.4+</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила сервера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                admin@mineworld.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MessageCircle" size={16} />
                Telegram: @mineworld
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Users" size={16} />
                Discord: MineWorld
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MineWorld Server. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
