import { MapPin, ExternalLink, Waves, Footprints, SquareParking, Users, Shell, Sunset } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

import beachPalmas from "@/assets/beach-palmas.jpg";
import beachArmacao from "@/assets/beach-armacao.jpg";
import beachGanchos from "@/assets/beach-ganchos.jpg";
import beachAntenor from "@/assets/beach-antenor.jpg";
import beachCalheiros from "@/assets/beach-calheiros.jpg";
import beachCosteira from "@/assets/beach-marcelo.jpg";

type InfraLevel = "Pouca estrutura" | "Média estrutura" | "Bastante estrutura";
type AccessLevel = "Fácil" | "Trilha curta" | "Trilha" | "Escadas" | "Moderado";
type SeaProfile = "Calmo" | "Moderado" | "Ondas";
type ParkingLevel = "Fácil" | "Limitado" | "Difícil";
type IdealFor = "Famílias" | "Snorkel" | "Pôr do sol" | "Sossego";

type Beach = {
  name: string;
  desc: string;
  image: string;

  estrutura: InfraLevel;
  acesso: AccessLevel;
  mar: SeaProfile;

  estacionamento: ParkingLevel;
  idealPara: IdealFor[];

  mapsUrl?: string;
  mapsQuery?: string;
};

function mapsSearchUrl(query?: string) {
  if (!query) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function estruturaBadgeClass(level: InfraLevel) {
  switch (level) {
    case "Bastante estrutura":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-500/25";
    case "Média estrutura":
      return "bg-amber-500/15 text-amber-300 border-amber-500/25";
    case "Pouca estrutura":
    default:
      return "bg-slate-500/15 text-slate-200 border-slate-500/25";
  }
}

function chipClass() {
  return "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-semibold text-foreground";
}

function idealIcon(tag: IdealFor) {
  switch (tag) {
    case "Famílias":
      return <Users className="h-3.5 w-3.5 opacity-80" />;
    case "Snorkel":
      return <Shell className="h-3.5 w-3.5 opacity-80" />;
    case "Pôr do sol":
      return <Sunset className="h-3.5 w-3.5 opacity-80" />;
    case "Sossego":
    default:
      return null;
  }
}

const beaches: Beach[] = [
  {
    name: "Praia de Palmas",
    desc: "A mais popular da região, com águas calmas e boa infraestrutura de quiosques e restaurantes. Ideal para famílias.",
    image: beachPalmas,
    estrutura: "Bastante estrutura",
    acesso: "Fácil",
    mar: "Calmo",
    estacionamento: "Fácil",
    idealPara: ["Famílias"],
    mapsQuery: "Praia de Palmas Governador Celso Ramos SC",
  },
  {
    name: "Praia da Armação da Piedade",
    desc: "Charmosa praia de pescadores com vista para a Ilha de Anhatomirim. Ótima para fotos e pôr do sol.",
    image: beachArmacao,
    estrutura: "Média estrutura",
    acesso: "Fácil",
    mar: "Moderado",
    estacionamento: "Limitado",
    idealPara: ["Pôr do sol", "Famílias"],
    mapsQuery: "Praia da Armação da Piedade Governador Celso Ramos SC",
  },
  {
    name: "Praia de Ganchos de Fora",
    desc: "Praia tranquila com águas cristalinas, perfeita para quem busca sossego e contato com a natureza.",
    image: beachGanchos,
    estrutura: "Média estrutura",
    acesso: "Fácil",
    mar: "Moderado",
    estacionamento: "Limitado",
    idealPara: ["Sossego"],
    mapsQuery: "Praia de Ganchos de Fora Governador Celso Ramos SC",
  },
  {
    name: "Praia do Antenor",
    desc: "Pequena e reservada, ideal para mergulho com snorkel e apreciar a vida marinha local.",
    image: beachAntenor,
    estrutura: "Pouca estrutura",
    acesso: "Trilha curta",
    mar: "Calmo",
    estacionamento: "Limitado",
    idealPara: ["Snorkel", "Sossego"],
    mapsQuery: "Praia do Antenor Governador Celso Ramos SC",
  },
  {
    name: "Praia de Calheiros",
    desc: "Praia preservada com visual incrível. Acesso por trilha curta, vale cada passo!",
    image: beachCalheiros,
    estrutura: "Pouca estrutura",
    acesso: "Trilha curta",
    mar: "Moderado",
    estacionamento: "Limitado",
    idealPara: ["Sossego"],
    mapsQuery: "Praia de Calheiros Governador Celso Ramos SC",
  },
  {
    name: "Praia do Marcelo (ou Praia do Funil)",
    desc: "Prainha pequena e bem “cantinho escondido” em Canto dos Ganchos; você pode ver os dois nomes para o mesmo lugar.",
    image: beachCosteira,
    estrutura: "Pouca estrutura",
    acesso: "Trilha curta",
    mar: "Calmo",
    estacionamento: "Difícil",
    idealPara: ["Sossego", "Snorkel"],
    mapsQuery: "Praia do Marcelo Governador Celso Ramos SC",
  },
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
          {beaches.map((beach, i) => {
            const gmaps = beach.mapsUrl || mapsSearchUrl(beach.mapsQuery);

            return (
              <div
                key={i}
                className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={beach.image}
                    alt={beach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {beach.name}
                    </h3>

                    <span
                      className={[
                        "shrink-0 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                        estruturaBadgeClass(beach.estrutura),
                      ].join(" ")}
                      title="Estrutura (quiosques, comércio, banheiros por perto)"
                    >
                      {beach.estrutura}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {beach.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={chipClass()} title="Tipo de acesso">
                      <Footprints className="h-3.5 w-3.5 opacity-80" />
                      Acesso: {beach.acesso}
                    </span>

                    <span className={chipClass()} title="Perfil do mar (geralmente)">
                      <Waves className="h-3.5 w-3.5 opacity-80" />
                      Mar: {beach.mar}
                    </span>

                    <span className={chipClass()} title="Como costuma ser para estacionar">
                      <SquareParking className="h-3.5 w-3.5 opacity-80" />
                      Estac.: {beach.estacionamento}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      Ideal para:
                    </span>
                    {beach.idealPara.map((tag) => (
                      <span key={tag} className={chipClass()}>
                        {idealIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>

                  {gmaps && (
                    <a
                      href={gmaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors"
                      aria-label={`Abrir ${beach.name} no Google Maps`}
                    >
                      <MapPin className="h-4 w-4" />
                      Ver no mapa
                      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Observação: “Mar”, “Acesso” e “Estacionamento” são um guia geral e podem variar conforme maré, vento e temporada.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default PraiasPage;
