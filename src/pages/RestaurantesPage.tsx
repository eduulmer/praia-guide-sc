import { Star, MapPin, Instagram } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

import restRaizes from "@/assets/restauranteraizes.jpg";
import restSteak from "@/assets/restaurantesteakhouse.jpg";
import restIlla from "@/assets/restauranteilla.jpg";
import restPizzaria from "@/assets/restaurantepizza.jpg";
import restPomodori from "@/assets/restaurantepomodori.jpg";
import restEdu from "@/assets/restauranteedu.jpg";

type Restaurant = {
  name: string;
  type: string;
  desc: string;
  price: "$" | "$$" | "$$$" | string;
  rating: 1 | 2 | 3 | 4 | 5;
  image: string;

  // Novo: para abrir no Google Maps (sem API)
  mapsQuery?: string;

  // Novo: link completo do Instagram (recomendado) OU só o @usuario
  instagram?: string;
};

function normalizeInstagramUrl(value?: string) {
  if (!value) return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  // Se já veio como URL
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;

  // Se veio como @usuario ou usuario
  const handle = trimmed.startsWith("@") ? trimmed.slice(1) : trimmed;
  return `https://www.instagram.com/${handle}`;
}

function mapsUrl(query?: string) {
  if (!query) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const restaurants: Restaurant[] = [
  {
    name: "Restaurante Raízes",
    type: "Frutos do Mar",
    desc: "Especialidade: comida caseira e açoriana (peixes e frutos do mar)",
    price: "$$",
    rating: 5,
    image: restRaizes,
    mapsQuery: "Restaurante Raízes Governador Celso Ramos SC",
    instagram: "@raizespalmas", // ex: "@restauranteraizes" ou "https://www.instagram.com/..."
  },
  {
    name: "Palmas Steakhouse",
    type: "Churrascaria, sul-americana",
    desc: "Churrasco de qualidade e carnes bem preparadas, vista e ambiente confortável — ideal para noites especiais.",
    price: "$$",
    rating: 4,
    image: restSteak,
    mapsQuery: "Palmas Steakhouse Governador Celso Ramos SC",
    instagram: "@palmassteakhouse",
  },
  {
    name: "Illa Gastrobar",
    type: "Bar, café, contemporâneo",
    desc: "Vista imperdível — fácil de acessar do centro, cardápio variado e coquetéis bem feitos.",
    price: "$$$",
    rating: 5,
    image: restIlla,
    mapsQuery: "Illa Gastrobar Governador Celso Ramos SC",
    instagram: "@illa.gastrobar",
  },
  {
    name: "La Bonna Pizza",
    type: "Pizzaria",
    desc: "Rodízio de pizza — bem gostoso e com bom custo-benefício, ótima opção para famílias e grupos.",
    price: "$",
    rating: 4,
    image: restPizzaria,
    mapsQuery: "La Bonna Pizza Governador Celso Ramos SC",
    instagram: "@pizzarialabonna",
  },
  {
    name: "Pomodori Praia",
    type: "Italiana, brasileira",
    desc: "Localização privilegiada na Praia Grande — pé na rua principal, cardápio: massas, pizzas e pratos brasileiros.",
    price: "$$$",
    rating: 5,
    image: restPomodori,
    mapsQuery: "Pomodori Praia Governador Celso Ramos SC",
    instagram: "@pomodori.praia",
  },
  {
    name: "Restaurante do Edu",
    type: "Frutos do mar, brasileira",
    desc: "Mesas pé na areia (ambiente aberto) + área climatizada, mar calmo ideal para brincar; cães permitidos na área externa.",
    price: "$",
    rating: 4,
    image: restEdu,
    mapsQuery: "Restaurante do Edu Governador Celso Ramos SC",
    instagram: "@restauranteedu",
  },
];

const RestaurantesPage = () => (
  <PageLayout>
    <PageHero
      title="Onde Comer"
      subtitle="Os melhores restaurantes e sabores de Governador Celso Ramos"
    />

    <section className="py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((r, i) => {
            const gmaps = mapsUrl(r.mapsQuery);
            const ig = normalizeInstagramUrl(r.instagram);

            return (
              <div
                key={i}
                className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {r.type}
                  </span>

                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {r.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {r.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-accent">{r.price}</span>

                    <div className="flex items-center gap-1 text-coral text-xs">
                      {Array.from({ length: r.rating }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  {(gmaps || ig) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {gmaps && (
                        <a
                          href={gmaps}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors"
                          aria-label={`Abrir ${r.name} no Google Maps`}
                        >
                          <MapPin className="h-4 w-4" />
                          Ver no mapa
                        </a>
                      )}

                      {ig && (
                        <a
                          href={ig}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors"
                          aria-label={`Abrir Instagram de ${r.name}`}
                        >
                          <Instagram className="h-4 w-4" />
                          Instagram
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Dica: toque em “Ver no mapa” para abrir o local no Google Maps. (Você pode melhorar a precisão
          usando o endereço completo no campo <code>mapsQuery</code>.)
        </p>
      </div>
    </section>
  </PageLayout>
);

export default RestaurantesPage;
