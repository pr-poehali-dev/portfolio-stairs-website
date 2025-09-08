import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioItems = [
    {
      title: "Современная лестница с стеклом",
      image: "/img/f7d20061-bc62-457c-93f8-7493a14c094f.jpg",
      description: "Элегантная лестница со стеклянными перилами и деревянными ступенями",
      price: "от 180 000 ₽"
    },
    {
      title: "Винтовая металлическая лестница",
      image: "/img/32a0a778-acb9-45c7-a2c9-d8d97427a4bf.jpg",
      description: "Индустриальный дизайн с металлическим каркасом",
      price: "от 120 000 ₽"
    },
    {
      title: "Классическая деревянная лестница",
      image: "/img/9081833a-71e3-45f4-ae69-69530c95768b.jpg",
      description: "Традиционное мастерство с резными перилами",
      price: "от 220 000 ₽"
    }
  ];

  const materials = [
    {
      name: "Дуб премиум",
      description: "Массив дуба, высший сорт",
      price: "8 500 ₽/м²"
    },
    {
      name: "Металлический каркас",
      description: "Сталь с порошковым покрытием",
      price: "12 000 ₽/м.п."
    },
    {
      name: "Закаленное стекло",
      description: "Безопасное стекло 12мм",
      price: "3 200 ₽/м²"
    },
    {
      name: "Ясень натуральный",
      description: "Обработка маслом, антискользящее покрытие",
      price: "6 800 ₽/м²"
    }
  ];

  const services = [
    {
      icon: "Ruler",
      title: "Замер и проектирование",
      description: "Бесплатный выезд специалиста и 3D-проект"
    },
    {
      icon: "Wrench",
      title: "Изготовление",
      description: "Производство по индивидуальным размерам"
    },
    {
      icon: "Home",
      title: "Монтаж",
      description: "Профессиональная установка с гарантией"
    },
    {
      icon: "Shield",
      title: "Гарантийное обслуживание",
      description: "5 лет гарантии на все работы"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Отличная работа! Лестница получилась именно такой, как мы хотели. Спасибо за профессионализм!",
      rating: 5
    },
    {
      name: "Михаил Сидоров",
      text: "Качественные материалы, аккуратный монтаж. Рекомендую эту компанию!",
      rating: 5
    },
    {
      name: "Елена Воронова",
      text: "Современная лестница преобразила наш дом. Очень довольны результатом.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Home" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ЛестницаМастер</h1>
              <p className="text-sm text-gray-600">Изготовление лестниц премиум-класса</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#materials" className="text-gray-700 hover:text-primary transition-colors">Материалы</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Лестницы на заказ
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Создаем уникальные лестницы из премиальных материалов. 15 лет опыта, более 500 выполненных проектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 transition-all hover:scale-105">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">О нашей компании</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы специализируемся на изготовлении лестниц любой сложности — от классических деревянных до современных стеклометаллических конструкций.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Award" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">15+ лет опыта</h3>
                <p className="text-gray-600">Многолетний опыт в сфере изготовления лестниц</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">500+ проектов</h3>
                <p className="text-gray-600">Успешно реализованных проектов по всей России</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Гарантия 5 лет</h3>
                <p className="text-gray-600">Полная гарантия на все виды работ и материалы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши работы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждая лестница — это уникальный проект, созданный с учетом индивидуальных потребностей клиента.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-primary border-primary">
                      {item.price}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный цикл работ — от проектирования до финальной установки и обслуживания.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <Icon name={service.icon} size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Catalog */}
      <section id="materials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Каталог материалов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Используем только качественные материалы от проверенных поставщиков.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{material.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{material.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{material.price}</span>
                    <Button variant="outline" size="sm">
                      <Icon name="Info" size={16} className="mr-2" />
                      Узнать больше
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мнения наших клиентов — лучшая оценка качества нашей работы.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {review.name.charAt(0)}
                    </div>
                    <span className="font-semibold">{review.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@lestnicamaster.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">Москва, ул. Производственная, 12</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea placeholder="Опишите ваш проект..." rows={4} />
                </div>
                <Button className="w-full">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Home" size={28} className="text-primary" />
                <span className="text-xl font-bold">ЛестницаМастер</span>
              </div>
              <p className="text-gray-400 text-sm">
                Изготовление лестниц премиум-класса с 2009 года. Качество, надежность, индивидуальный подход.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Деревянные лестницы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Металлические лестницы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Стеклянные перила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт лестниц</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@lestnicamaster.ru</li>
                <li>Москва, ул. Производственная, 12</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 ЛестницаМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;