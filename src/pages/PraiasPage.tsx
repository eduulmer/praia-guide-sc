import { MapPin, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import beachThumb from "@/assets/beach-thumb.jpg";

const beaches = [
  { name: "Praia de Palmas", desc: "A mais popular da região, com águas calmas e boa infraestrutura de quiosques e restaurantes. Ideal para famílias.", distance: "5 min", rating: 5 },
  { name: "Praia da Armação da Piedade", desc: "Charmosa praia de pescadores com vista para a Ilha de Anhatomirim. Ótima para fotos e pôr do sol.", distance: "10 min", rating: 5 },
  { name: "Praia de Ganchos de Fora", desc: "Praia tranquila com águas cristalinas, perfeita para quem busca sossego e contato com a natureza.", distance: "8 min", rating: 4 },
  { name: "Praia do Antenor", desc: "Pequena e reservada, ideal para mergulho com snorkel e apreciar a vida marinha local.", distance: "12 min", rating: 4 },
  { name: "Praia de Calheiros", desc: "Praia preservada com visual incrível. Acesso por trilha curta, vale cada passo!", distance: "15 min", rating: 5 },
  { name: "Praia da Costeira", desc: "Mar calmo e areia fofa. Boa opção para crianças e dias de sol com toda a família.", distance: "7 min", rating: 4 },
];

const PraiasPage = () => (
  <PageLayout>
    <PageHero
      title="Melhores Praias"
      subtitle="Governador Celso Ramos é cercada por praias incríveis. Confira nossas recomendações!"
    />
    <section className="py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beaches.map((beach, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-44 overflow-hidden">
                <img src={beachThumb} alt={beach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{beach.name}</h3>
                  <div className="flex items-center gap-1 text-coral text-xs">
                    {Array.from({ length: beach.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{beach.desc}</p>
                <div className="flex items-center gap-1 text-xs text-primary font-medium">
                  <MapPin className="h-3.5 w-3.5" />
                  ~{beach.distance} de carro
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PraiasPage;
