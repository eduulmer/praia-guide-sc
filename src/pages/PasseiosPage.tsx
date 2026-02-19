import { Ship, Footprints, Camera, Fish, Compass, Sunrise } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import toursThumb from "@/assets/tours-thumb.jpg";

const tours = [
  { icon: <Ship className="h-5 w-5" />, name: "Passeio de Barco à Ilha de Anhatomirim", desc: "Visite a histórica Fortaleza de Santa Cruz e aprecie golfinhos no caminho. Duração: ~3h.", type: "Barco" },
  { icon: <Fish className="h-5 w-5" />, name: "Pesca Artesanal", desc: "Viva a experiência da pesca com pescadores locais. Saídas pela manhã, inclui equipamento.", type: "Aventura" },
  { icon: <Footprints className="h-5 w-5" />, name: "Trilha da Costeira", desc: "Trilha de nível fácil com vistas panorâmicas para o mar. Aproximadamente 1h30 de caminhada.", type: "Trilha" },
  { icon: <Camera className="h-5 w-5" />, name: "Tour Fotográfico", desc: "Passeio guiado pelos melhores pontos para fotos da região, incluindo mirantes e praias secretas.", type: "Cultural" },
  { icon: <Compass className="h-5 w-5" />, name: "Stand Up Paddle e Caiaque", desc: "Aluguel de equipamentos na Praia de Palmas. Águas calmas, perfeito para iniciantes.", type: "Esporte" },
  { icon: <Sunrise className="h-5 w-5" />, name: "Nascer do Sol na Ponta dos Ganchos", desc: "Experiência inesquecível de ver o sol nascer em uma das vistas mais bonitas de Santa Catarina.", type: "Experiência" },
];

const PasseiosPage = () => (
  <PageLayout>
    <PageHero
      title="Passeios & Aventuras"
      subtitle="Experiências incríveis para tornar sua estadia ainda mais especial"
    />
    <section className="py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t, i) => (
            <div
              key={i}
              className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-44 overflow-hidden">
                <img src={toursThumb} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">{t.type}</span>
                <div className="flex items-start gap-3">
                  <div className="text-primary mt-0.5 shrink-0">{t.icon}</div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground mb-1">{t.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
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

export default PasseiosPage;
