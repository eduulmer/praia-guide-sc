import { MapPin, Instagram, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

import restRaizes from "@/assets/restauranteraizes.jpg";
import restSteak from "@/assets/restaurantesteakhouse.jpg";
import restIlla from "@/assets/restauranteilla.jpg";
import restPizzaria from "@/assets/restaurantepizza.jpg";
import restPomodori from "@/assets/restaurantepomodori.jpg";
import restEdu from "@/assets/restauranteedu.jpg";

type Restaurant = {
  image: string;
  mapsUrl?: string;
  instagram?: string;
};

function normalizeInstagramUrl(value?: string) {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  const handle = trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
  return `https://www.instagram.com/${handle}`;
}

const restaurants: Restaurant[] = [
  { image: restRaizes, mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante%20Ra%C3%ADzes%20Governador%20Celso%20Ramos%20SC", instagram: "@raizespalmas" },
  { image: restSteak, mapsUrl: "https://www.google.com/maps/search/?api=1&query=Palmas%20Steakhouse%20Governador%20Celso%20Ramos%20SC", instagram: "@palmassteakhouse" },
  { image: restIlla, mapsUrl: "https://www.google.com/maps/search/?api=1&query=Illa%20Gastrobar%20Governador%20Celso%20Ramos%20SC", instagram: "@illa.gastrobar" },
  { image: restPizzaria, mapsUrl: "https://www.google.com/maps/search/?api=1&query=La%20Bonna%20Pizza%20Governador%20Celso%20Ramos%20SC", instagram: "@pizzarialabonna" },
  { image: restPomodori, mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pomodori%20Praia%20Governador%20Celso%20Ramos%20SC", instagram: "@pomodori.praia" },
  { image: restEdu, mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante%20do%20Edu%20Governador%20Celso%20Ramos%20SC", instagram: "@restauranteedu" },
];

const RestaurantesPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHero title={t("restaurants.pageTitle")} subtitle={t("restaurants.pageSubtitle")} />

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((r, i) => {
              const ig = normalizeInstagramUrl(r.instagram);
              const item = t(`restaurants.items.${i}`, { returnObjects: true }) as { name: string; type: string; desc: string };

              return (
                <div
                  key={i}
                  className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="h-44 overflow-hidden">
                    <img src={r.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>

                  <div className="p-5">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">{item.type}</span>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.desc}</p>
                    <div className="text-xs text-muted-foreground">{t("restaurants.reviewNote")}</div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {r.mapsUrl && (
                        <a href={r.mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors">
                          <MapPin className="h-4 w-4" />
                          {t("restaurants.viewMap")}
                          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                        </a>
                      )}
                      {ig && (
                        <a href={ig} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors">
                          <Instagram className="h-4 w-4" />
                          {t("restaurants.instagram")}
                          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">{t("restaurants.tip")}</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default RestaurantesPage;
