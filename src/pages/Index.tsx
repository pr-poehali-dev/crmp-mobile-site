import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', discord: '', message: '' });

  const features = [
    {
      icon: 'Users',
      title: 'Фракции и банды',
      description: 'Присоединяйся к легальным организациям или криминальным группировкам'
    },
    {
      icon: 'Briefcase',
      title: 'Работы и бизнес',
      description: 'Развивай свой бизнес или работай водителем, фермером, полицейским'
    },
    {
      icon: 'Car',
      title: 'Транспорт',
      description: 'Более 200 уникальных транспортных средств с кастомизацией'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Покупай дома, квартиры и гаражи. Создавай своё пространство'
    },
    {
      icon: 'DollarSign',
      title: 'Экономика',
      description: 'Реалистичная игровая экономика с банками и биржей'
    },
    {
      icon: 'Gamepad2',
      title: 'Развлечения',
      description: 'Казино, гонки, ивенты и уникальные мини-игры'
    }
  ];

  const faqItems = [
    {
      question: 'Как начать играть на сервере?',
      answer: 'Скачай клиент CRMP, запусти игру и добавь наш сервер в избранное. IP: 185.169.134.4:7777. После подключения пройди простую регистрацию.'
    },
    {
      question: 'Сервер платный или бесплатный?',
      answer: 'Игра полностью бесплатна! Есть донат для ускорения прогресса, но все возможности доступны без вложений.'
    },
    {
      question: 'Какой онлайн на сервере?',
      answer: 'Средний онлайн — 200-300 игроков. В выходные достигает 500+ человек одновременно.'
    },
    {
      question: 'Есть ли правила RolePlay?',
      answer: 'Да, у нас строгие RP правила. Нельзя NonRP поведение, DM без причины, MG и прочее. Читай правила в Discord.'
    },
    {
      question: 'Можно ли играть с телефона?',
      answer: 'Да! Есть версия для Android. Скачай CRMP для мобильных устройств и играй где угодно.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Скоро свяжемся с тобой в Discord.');
    setFormData({ name: '', discord: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/IMG_2589.png" 
              alt="BRP Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-primary tracking-wider">
              Brigada RP
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Особенности</a>
            <a href="#start" className="text-sm font-medium hover:text-primary transition-colors">Как начать</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Связь</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-black font-bold">
            Играть сейчас
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in">
            <div className="mb-8 flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/IMG_2589.png" 
                alt="Brigada RolePlay Logo" 
                className="w-48 h-48 object-contain drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]"
              />
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-tight mb-6 tracking-tight">
              <span className="text-primary">Brigada</span>
              <br />
              <span className="text-foreground">RolePlay</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Топовый CRMP сервер с ламповой атмосферой
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Реалистичная ролевая игра • Активное комьюнити • Честная администрация
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-10 py-7">
                <Icon name="Gamepad2" className="mr-2" size={24} />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-primary/30 hover:bg-primary/10">
                <Icon name="MessageCircle" className="mr-2" size={24} />
                Discord
              </Button>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div>
                <div className="text-4xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Игроков онлайн</div>
              </div>
              <div className="h-12 w-px bg-primary/30"></div>
              <div>
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Сервер работает</div>
              </div>
              <div className="h-12 w-px bg-primary/30"></div>
              <div>
                <div className="text-4xl font-bold text-primary">0.3.7</div>
                <div className="text-sm text-muted-foreground">Версия SAMP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">
              Что тебя ждёт на{' '}
              <span className="text-primary">сервере</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полноценная ролевая игра с огромными возможностями
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 border border-primary/30">
                    <Icon name={feature.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">
              Как начать{' '}
              <span className="text-primary">играть</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Всего 3 простых шага до старта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-all">01</div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                  <Icon name="Download" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Скачай клиент</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Установи CRMP 0.3.7 на ПК или мобильное устройство
                </p>
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                  Скачать CRMP
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-all">02</div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                  <Icon name="Server" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Подключись</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Добавь сервер в избранное и подключайся
                </p>
                <div className="bg-secondary/30 border border-primary/30 rounded-lg p-3 font-mono text-primary text-center">
                  185.169.134.4:7777
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-all">03</div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/30">
                  <Icon name="Play" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Начни играть</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Создай персонажа и погрузись в мир RolePlay
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold">
                  Поехали!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">
              Частые{' '}
              <span className="text-primary">вопросы</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё что нужно знать новичку
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-xl px-6 data-[state=open]:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">
                Остались{' '}
                <span className="text-primary">вопросы?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Пиши нам в Discord или VK. Ответим быстро!
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Discord</div>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      discord.gg/brigadarp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Icon name="Send" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">VK</div>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      vk.com/brigadarp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <Icon name="Youtube" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">YouTube</div>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      youtube.com/@brigadarp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Связаться с нами</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Твоё имя</label>
                    <Input
                      placeholder="Александр"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Discord / VK</label>
                    <Input
                      placeholder="@username"
                      value={formData.discord}
                      onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                      required
                      className="h-12 bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Напиши свой вопрос..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="resize-none bg-background/50 border-primary/30"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
                  >
                    Отправить
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/30 border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/IMG_2589.png" 
                  alt="BRP Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold text-primary">Brigada RP</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Лучший CRMP RolePlay сервер с ламповой атмосферой
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Сервер</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Особенности</a></li>
                <li><a href="#start" className="hover:text-primary transition-colors">Как начать</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Донат</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Комьюнити</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">VK</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Помощь</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#contact" className="hover:text-primary transition-colors">Связаться</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Репорты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Баны</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Brigada RolePlay. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
