import { MapPin, Star } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import beachPalmas from "@/assets/beach-palmas.jpg";
import beachArmacao from "@/assets/beach-armacao.jpg";
import beachGanchos from "@/assets/beach-ganchos.jpg";
import beachAntenor from "@/assets/beach-antenor.jpg";
import beachCalheiros from "@/assets/beach-calheiros.jpg";
import beachCosteira from "@/assets/beach-costeira.jpg";

const beaches = [
  { name: "Praia de Palmas", desc: "A mais popular da região, com águas calmas e boa infraestrutura de quiosques e restaurantes. Ideal para famílias.", distance: "5 min", rating: 5, image: beachPalmas },
  { name: "Praia da Armação da Piedade", desc: "Charmosa praia de pescadores com vista para a Ilha de Anhatomirim. Ótima para fotos e pôr do sol.", distance: "10 min", rating: 5, image: beachArmacao },
  { name: "Praia de Ganchos de Fora", desc: "Praia tranquila com águas cristalinas, perfeita para quem busca sossego e contato com a natureza.", distance: "8 min", rating: 4, image: beachGanchos },
  { name: "Praia do Antenor", desc: "Pequena e reservada, ideal para mergulho com snorkel e apreciar a vida marinha local.", distance: "12 min", rating: 4, image: beachAntenor },
  { name: "Praia de Calheiros", desc: "Praia preservada com visual incrível. Acesso por trilha curta, vale cada passo!", distance: "15 min", rating: 5, image: beachCalheiros },
  { name: "Praia da Costeira", desc: "Mar calmo e areia fofa. Boa opção para crianças e dias de sol com toda a família.", distance: "7 min", rating: 4, image: beachCosteira },
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
                <img src={beach.image} alt={beach.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
