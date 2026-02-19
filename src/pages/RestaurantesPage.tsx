import { Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import restMuseu from "@/assets/rest-museu.jpg";
import restAcoriano from "@/assets/rest-acoriano.jpg";
import restBaia from "@/assets/rest-baia.jpg";
import restPizzaria from "@/assets/rest-pizzaria.jpg";
import restBistro from "@/assets/rest-bistro.jpg";
import restLanchonete from "@/assets/rest-lanchonete.jpg";

const restaurants = [
  { name: "Restaurante do Museu", type: "Frutos do Mar", desc: "Especialidade em peixes frescos e sequência de camarão, com vista para o mar.", price: "$$", rating: 5, image: restMuseu },
  { name: "Rancho Açoriano", type: "Comida Típica", desc: "Culinária açoriana autêntica com pratos fartos e ambiente rústico acolhedor.", price: "$$", rating: 4, image: restAcoriano },
  { name: "Cantinho da Baia", type: "Frutos do Mar", desc: "Restaurante à beira-mar com ostras frescas e pratos de peixe grelhado.", price: "$$$", rating: 5, image: restBaia },
  { name: "Pizzaria da Praça", type: "Pizzaria", desc: "Pizzas artesanais com ingredientes locais. Ótima opção para jantares descontraídos.", price: "$", rating: 4, image: restPizzaria },
  { name: "Bistrô do Porto", type: "Contemporâneo", desc: "Cozinha criativa com toques catarinenses. Carta de vinhos selecionada.", price: "$$$", rating: 5, image: restBistro },
  { name: "Lanchonete da Praia", type: "Lanches", desc: "Açaí, pastéis e lanches rápidos na beira da praia. Perfeito para aquele pit stop.", price: "$", rating: 4, image: restLanchonete },
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
          {restaurants.map((r, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-44 overflow-hidden">
                <img src={r.image} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">{r.type}</span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{r.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{r.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent">{r.price}</span>
                  <div className="flex items-center gap-1 text-coral text-xs">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default RestaurantesPage;
