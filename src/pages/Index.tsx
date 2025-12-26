import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const features = [
    {
      icon: 'Users',
      title: 'Управление клиентами',
      description: 'Полная база клиентов с историей взаимодействий всегда под рукой'
    },
    {
      icon: 'LineChart',
      title: 'Аналитика продаж',
      description: 'Отслеживайте воронку продаж и прогнозируйте выручку в реальном времени'
    },
    {
      icon: 'Calendar',
      title: 'Планирование встреч',
      description: 'Синхронизация календаря и напоминания о важных событиях'
    },
    {
      icon: 'FileText',
      title: 'Документооборот',
      description: 'Создавайте и отправляйте договоры и счета прямо из приложения'
    },
    {
      icon: 'Zap',
      title: 'Автоматизация',
      description: 'Настройте автоматические действия и сэкономьте время команды'
    },
    {
      icon: 'Shield',
      title: 'Безопасность данных',
      description: 'Шифрование и резервное копирование данных на облачных серверах'
    }
  ];

  const faqItems = [
    {
      question: 'Какие платформы поддерживает CRMP Mobile?',
      answer: 'Наше приложение доступно на iOS и Android. Также есть веб-версия для доступа с любого устройства.'
    },
    {
      question: 'Можно ли интегрировать CRMP с другими сервисами?',
      answer: 'Да, мы поддерживаем интеграцию с популярными сервисами: 1C, Битрикс24, почтовые клиенты, мессенджеры и облачные хранилища.'
    },
    {
      question: 'Сколько стоит подписка на CRMP Mobile?',
      answer: 'Стоимость зависит от количества пользователей и функционала. Базовый тариф начинается от 990₽/мес. Первые 14 дней бесплатно.'
    },
    {
      question: 'Как защищены мои данные?',
      answer: 'Мы используем шифрование данных, регулярное резервное копирование и соответствуем стандартам безопасности GDPR и 152-ФЗ.'
    },
    {
      question: 'Можно ли работать офлайн?',
      answer: 'Да, приложение сохраняет данные локально и синхронизирует их при подключении к интернету.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Smartphone" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CRMP Mobile
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#app" className="text-sm font-medium hover:text-primary transition-colors">Приложение</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90">
            Попробовать бесплатно
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Управляйте бизнесом{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  из любой точки мира
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                CRMP Mobile — мобильная CRM система нового поколения. Продавайте больше, 
                управляйте командой и анализируйте результаты прямо со смартфона.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 text-lg px-8">
                  Начать работу
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-secondary">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг в App Store</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div>
                  <div className="text-3xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm border border-border">
                  <div className="aspect-[9/16] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden">
                    <img 
                      src="https://cdn.poehali.dev/projects/aca6ff3b-04a2-41f2-97d2-d8a216788cda/files/dc1cb5cc-17af-4716-b05a-a0b9797c5760.jpg" 
                      alt="CRMP Mobile App Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">
              Всё для эффективных{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                продаж
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мощные инструменты для автоматизации продаж и управления клиентской базой
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="app" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 backdrop-blur-sm border border-border">
                    <Icon name="TrendingUp" className="text-primary mb-4" size={32} />
                    <div className="text-2xl font-bold mb-1">+127%</div>
                    <div className="text-sm text-muted-foreground">Рост продаж</div>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 backdrop-blur-sm border border-border">
                    <Icon name="Clock" className="text-secondary mb-4" size={32} />
                    <div className="text-2xl font-bold mb-1">-40%</div>
                    <div className="text-sm text-muted-foreground">Время на задачи</div>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 backdrop-blur-sm border border-border col-span-2">
                    <Icon name="Star" className="text-accent mb-4" size={32} />
                    <div className="text-2xl font-bold mb-1">Удобный интерфейс</div>
                    <div className="text-sm text-muted-foreground">Интуитивно понятное управление без обучения</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <h2 className="text-5xl font-bold mb-6">
                Приложение для{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  iOS и Android
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Скачайте CRMP Mobile и получите доступ ко всем функциям CRM на своём смартфоне. 
                Работайте из любой точки мира, даже без интернета.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-primary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Нативные приложения</div>
                    <div className="text-muted-foreground">Быстрая работа и плавная анимация на iOS и Android</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-secondary" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Push-уведомления</div>
                    <div className="text-muted-foreground">Не пропускайте важные события и задачи</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-accent" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Офлайн режим</div>
                    <div className="text-muted-foreground">Работайте без интернета, данные синхронизируются автоматически</div>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-black/90">
                  <Icon name="Apple" className="mr-2" size={20} />
                  App Store
                </Button>
                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                  <Icon name="Play" className="mr-2" size={20} />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold mb-4">
              Часто задаваемые{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                вопросы
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о CRMP Mobile
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border-2 rounded-xl px-6 data-[state=open]:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
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
                Свяжитесь{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  с нами
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Остались вопросы? Напишите нам, и мы свяжемся с вами в течение 24 часов.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@crmpmobile.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@crmpmobile.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+78001234567" className="text-muted-foreground hover:text-secondary transition-colors">
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">
                      г. Москва, ул. Тверская, д. 1, офис 100
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-2 animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите, чем мы можем помочь..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
                  >
                    Отправить сообщение
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" className="text-white" size={18} />
                </div>
                <span className="text-xl font-bold">CRMP Mobile</span>
              </div>
              <p className="text-gray-400 text-sm">
                Мобильная CRM система нового поколения для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Возможности</a></li>
                <li><a href="#app" className="hover:text-white transition-colors">Приложение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Интеграции</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Статус системы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 CRMP Mobile. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;