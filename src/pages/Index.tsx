import { Link } from "react-router-dom";
import { UtensilsCrossed, TreePalm, Handshake, BookOpen, SunMedium } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import heroImage from "@/assets/hero-beach.jpg";
import beachThumb from "@/assets/beach-thumb.jpg";
import restaurantThumb from "@/assets/restaurant-thumb.jpg";
import toursThumb from "@/assets/tours-thumb.jpg";

const Index = () => {
  const { t } = useTranslation();

  const sections = [
    {
      to: "/praias",
      titleKey: "home.sectionBeaches",
      descKey: "home.sectionBeachesDesc",
      image: beachThumb,
      icon: <SunMedium className="h-5 w-5" />,
    },
    {
      to: "/restaurantes",
      titleKey: "home.sectionRestaurants",
      descKey: "home.sectionRestaurantsDesc",
      image: restaurantThumb,
      icon: <UtensilsCrossed className="h-5 w-5" />,
    },
    {
      to: "/passeios",
      titleKey: "home.sectionTours",
      descKey: "home.sectionToursDesc",
      image: toursThumb,
      icon: <TreePalm className="h-5 w-5" />,
    },
  ];

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
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {t("home.heroDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/regras"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-4 w-4" />
              {t("home.btnRules")}
            </Link>
            <Link
              to="/hospedagem"
              className="inline-flex items-center gap-2 bg-card/90 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-card transition-colors"
            >
              <Handshake className="h-4 w-4" />
              {t("home.btnAccommodation")}
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 bg-sand-gradient">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-3">
            {t("home.exploreTitle")}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-lg mx-auto">
            {t("home.exploreSubtitle")}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Link key={s.to} to={s.to} className="group">
                <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-52 overflow-hidden">
                    <img
                      src={s.image}
                      alt={t(s.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <div className="text-primary">{s.icon}</div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{t(s.titleKey)}</h3>
                      <p className="text-sm text-muted-foreground">{t(s.descKey)}</p>
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
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 mx-0">
            {t("home.welcomeTitle")}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("home.welcomeDesc")}
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
