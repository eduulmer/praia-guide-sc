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
  { name: "Restaurante Raízes", type: "Frutos do Mar", desc: "Especialidade: comida caseira e açoriana (peixes e frutos do mar)", price: "$$", rating: 5, image: restMuseu },
  { name: "Palmas Steakhouse", type: "Churrascaria, sul-americana", desc: "Churrasco de qualidade e carnes bem preparadas, vista e ambiente confortável — ideal para noites especiais.", price: "$$", rating: 4, image: restAcoriano },
  { name: "Illa Gastrobar", type: "Bar, café, contemporâneo", desc: "Vista imperdível — fácil de acessar do centro, cardápio variado e coquetéis bem feitos.", price: "$$$", rating: 5, image: restBaia },
  { name: "La Bonna Pizza", type: "Pizzaria", desc: "Rodízio de pizza — bem gostoso e com bom custo-benefício, ótima opção para famílias e grupos.", price: "$", rating: 4, image: restPizzaria },
  { name: "Pomodori Praia", type: "Italiana, brasileira", desc: "Localização privilegiada na Praia Grande — pé na rua principal, cardápio: massas, pizzas e pratos brasileiros.", price: "$$$", rating: 5, image: restBistro },
  { name: "Restaurante do Edu", type: "Frutos do mar, brasileira", desc: "Mesas pé na areia (ambiente aberto) + área climatizada, mar calmo ideal para brincar; cães permitidos na área externa.", price: "$", rating: 4, image: restLanchonete },
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
