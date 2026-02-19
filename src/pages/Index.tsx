import { Link } from "react-router-dom";
import { Waves, UtensilsCrossed, TreePalm, Handshake, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-beach.jpg";
import beachThumb from "@/assets/beach-thumb.jpg";
import restaurantThumb from "@/assets/restaurant-thumb.jpg";
import toursThumb from "@/assets/tours-thumb.jpg";

const sections = [
  {
    to: "/praias",
    title: "Melhores Praias",
    desc: "Descubra as praias mais bonitas da região",
    image: beachThumb,
    icon: <Waves className="h-5 w-5" />,
  },
  {
    to: "/restaurantes",
    title: "Onde Comer",
    desc: "Restaurantes e frutos do mar imperdíveis",
    image: restaurantThumb,
    icon: <UtensilsCrossed className="h-5 w-5" />,
  },
  {
    to: "/passeios",
    title: "Passeios",
    desc: "Aventuras e experiências na região",
    image: toursThumb,
    icon: <TreePalm className="h-5 w-5" />,
  },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Vista aérea de praia em Governador Celso Ramos"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-lg animate-fade-in-up">
            Guia do Hóspede
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Tudo que você precisa para aproveitar Governador Celso Ramos ao máximo
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/regras"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-4 w-4" />
              Regras da Casa
            </Link>
            <Link
              to="/parceiros"
              className="inline-flex items-center gap-2 bg-card/90 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-card transition-colors"
            >
              <Handshake className="h-4 w-4" />
              Parceiros Locais
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-sand-gradient">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-3">
            Explore a Região
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            Selecionamos os melhores lugares e experiências para sua estadia
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="group">
                <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <div className="text-primary">{s.icon}</div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome message */}
      <section className="py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Bem-vindo à nossa casa! 🏖️
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Preparamos este guia com carinho para que você tenha a melhor experiência possível
            em Governador Celso Ramos. Aqui você encontra dicas de praias, restaurantes, passeios
            e tudo que precisa saber para aproveitar ao máximo sua estadia conosco.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
