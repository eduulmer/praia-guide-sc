import { MapPin, Instagram, ExternalLink } from "lucide-react";
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
  image: string;

  // Preferir URL direta do "Compartilhar" do Google Maps (mais certeiro que query)
  mapsUrl?: string;

  // Link completo do Instagram OU @usuario
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
  {
    name: "Restaurante Raízes",
    type: "Frutos do Mar",
    desc: "Especialidade: comida caseira e açoriana (peixes e frutos do mar)",
    image: restRaizes,
    // Cole aqui o link do Google Maps (Compartilhar → Copiar link)
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante%20Ra%C3%ADzes%20Governador%20Celso%20Ramos%20SC",
    instagram: "@raizespalmas",
  },
  {
    name: "Palmas Steakhouse",
    type: "Churrascaria, sul-americana",
    desc: "Churrasco de qualidade e carnes bem preparadas, vista e ambiente confortável — ideal para noites especiais.",
    image: restSteak,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Palmas%20Steakhouse%20Governador%20Celso%20Ramos%20SC",
    instagram: "@palmassteakhouse",
  },
  {
    name: "Illa Gastrobar",
    type: "Bar, café, contemporâneo",
    desc: "Vista imperdível — fácil de acessar do centro, cardápio variado e coquetéis bem feitos.",
    image: restIlla,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Illa%20Gastrobar%20Governador%20Celso%20Ramos%20SC",
    instagram: "@illa.gastrobar",
  },
  {
    name: "La Bonna Pizza",
    type: "Pizzaria",
    desc: "Rodízio de pizza — bem gostoso e com bom custo-benefício, ótima opção para famílias e grupos.",
    image: restPizzaria,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=La%20Bonna%20Pizza%20Governador%20Celso%20Ramos%20SC",
    instagram: "@pizzarialabonna",
  },
  {
    name: "Pomodori Praia",
    type: "Italiana, brasileira",
    desc: "Localização privilegiada na Praia Grande — pé na rua principal, cardápio: massas, pizzas e pratos brasileiros.",
    image: restPomodori,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pomodori%20Praia%20Governador%20Celso%20Ramos%20SC",
    instagram: "@pomodori.praia",
  },
  {
    name: "Restaurante do Edu",
    type: "Frutos do mar, brasileira",
    desc: "Mesas pé na areia (ambiente aberto) + área climatizada, mar calmo ideal para brincar; cães permitidos na área externa.",
    image: restEdu,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante%20do%20Edu%20Governador%20Celso%20Ramos%20SC",
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

                  <div className="text-xs text-muted-foreground">
                    Avaliações e faixa de preço: consulte no Google Maps.
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.mapsUrl && (
                      <a
                        href={r.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors"
                        aria-label={`Abrir ${r.name} no Google Maps`}
                      >
                        <MapPin className="h-4 w-4" />
                        Ver no mapa
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
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
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Dica: para ver nota, comentários e faixa de preço atualizada, use “Ver no mapa”.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default RestaurantesPage;
