import { Ship, Footprints, MapPin, Instagram, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

// Importe aqui as imagens que você vai adicionar (ou deixe comentado por enquanto)
// import tourAnhatomirim from "@/assets/tour-anhatomirim.jpg";
// import tourBarcopirata from "@/assets/tour-barco-pirata.jpg";
// import tourGolfinhos from "@/assets/tour-golfinhos.jpg";
// import trilhaFora from "@/assets/trilha-praia-fora.jpg";
// import trilhaSissial from "@/assets/trilha-sissial.jpg";
// import trilhaConchas from "@/assets/trilha-conchas.jpg";

type Perfil = "Barco" | "Trilha";
type Modalidade = "Compartilhado" | "Privativo" | "Livre (sem guia)";
type IdealFor = "Famílias" | "História" | "Fotos" | "Natureza" | "Snorkel" | "Sossego" | "Golfinhos";

type Tour = {
  icon: React.ReactNode;
  name: string;
  desc: string;
  image: string; // Novo: path da imagem

  perfil: Perfil;
  duracao: string;
  modalidade: Modalidade;
  idealPara: IdealFor[];

  mapsQuery?: string;
  mapsUrl?: string;
  instagram?: string;
};

function mapsSearchUrl(query?: string) {
  if (!query) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function chipClass() {
  return "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-semibold text-foreground";
}

const tours: Tour[] = [
  {
    icon: <Ship className="h-5 w-5" />,
    name: "Tour Ilha de Anhatomirim (Fortaleza)",
    desc: "Passeio de barco com visita à Fortaleza de Santa Cruz e navegação por áreas lindas da baía.",
    image: "tour-anhatomirim.jpg", // Nome que você vai usar
    perfil: "Barco",
    duracao: "Meio período (varia por roteiro)",
    modalidade: "Compartilhado",
    idealPara: ["História", "Fotos", "Natureza"],
    instagram: "@penaaguapasseios",
  },
  {
    icon: <Ship className="h-5 w-5" />,
    name: "Passeio Barco Pirata",
    desc: "Passeio temático, divertido para ir com família/grupo; normalmente passa por pontos da região e pode incluir parada para banho (conforme roteiro do dia).",
    image: "tour-barco-pirata.jpg", // Nome que você vai usar
    perfil: "Barco",
    duracao: "3h a 4h (varia por roteiro)",
    modalidade: "Compartilhado",
    idealPara: ["Famílias", "Fotos", "Natureza"],
    instagram: "@penaaguapasseios",
  },
  {
    icon: <Ship className="h-5 w-5" />,
    name: "Passeio Baía dos Golfinhos",
    desc: "Navegação pela baía com chance de avistamento; combine com Anhatomirim para um roteiro completo.",
    image: "tour-golfinhos.jpg", // Nome que você vai usar
    perfil: "Barco",
    duracao: "1h30 a meio período (varia por roteiro)",
    modalidade: "Compartilhado",
    idealPara: ["Golfinhos", "Natureza", "Fotos"],
    instagram: "@penaaguapasseios",
  },

  // Trilhas
  {
    icon: <Footprints className="h-5 w-5" />,
    name: "Trilha para a Praia de Fora",
    desc: "Trilha com visual bonito e praia mais preservada; leve água e vá com calçado adequado.",
    image: "trilha-praia-fora.jpg", // Nome que você vai usar
    perfil: "Trilha",
    duracao: "1h a 2h (ida e volta, varia no ritmo)",
    modalidade: "Livre (sem guia)",
    idealPara: ["Natureza", "Fotos", "Sossego"],
    mapsUrl: "https://www.google.com/maps/place/Trilha+Praia+de+Fora/@-27.3024557,-48.5609758,15z/data=!4m10!1m2!2m1!1sPraia+de+Fora+Governador+Celso+Ramos+SC!3m6!1s0x9527599da9eff5e3:0x404db5906a4c60a0!8m2!3d-27.3024563!4d-48.5419204!15sCidQcmFpYSBkZSBGb3JhIEdvdmVybmFkb3IgQ2Vsc28gUmFtb3MgU0NaKSIncHJhaWEgZGUgZm9yYSBnb3Zlcm5hZG9yIGNlbHNvIHJhbW9zIHNjkgELaGlraW5nX2FyZWGaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnBhTkZaWVZYZFVNVlpSVkVaUmVWSnJaRTVUYTNSVVUyeEdUVkZYWXhBQuABAPoBBAhEEEc!16s%2Fg%2F11fj5nw7y2?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: <Footprints className="h-5 w-5" />,
    name: "Trilha para a Praia do Sissial",
    desc: 'Praia preservada e cercada de mata, acessada por trilha; ótima para quem quer um lugar mais "raiz".',
    image: "trilha-sissial.jpg", // Nome que você vai usar
    perfil: "Trilha",
    duracao: "2h a 3h (ida e volta, varia no ritmo)",
    modalidade: "Livre (sem guia)",
    idealPara: ["Natureza", "Sossego", "Fotos"],
    mapsQuery: "Praia do Sissial Governador Celso Ramos SC",
  },
  {
    icon: <Footprints className="h-5 w-5" />,
    name: "Trilha para a Praia das Conchas",
    desc: "Trilha famosa por levar a uma praia diferente, com muitas conchas; caminho passa por trechos de costão e pequenas prainhas.",
    image: "trilha-conchas.jpg", // Nome que você vai usar
    perfil: "Trilha",
    duracao: "2h a 3h (ida e volta, varia no ritmo)",
    modalidade: "Livre (sem guia)",
    idealPara: ["Fotos", "Natureza", "Sossego"],
    mapsQuery: "Praia das Conchas Governador Celso Ramos SC",
  },
];

const PasseiosPage = () => (
  <PageLayout>
    <PageHero
      title="Passeios & Trilhas"
      subtitle="Ideias de passeios para aproveitar Governador Celso Ramos — escolha o seu estilo."
    />

    <section className="py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((t, i) => {
            const gmaps = t.mapsUrl || (t.mapsQuery ? mapsSearchUrl(t.mapsQuery) : undefined);
            const igUrl = t.instagram
              ? t.instagram.startsWith("http")
                ? t.instagram
                : `https://www.instagram.com/${t.instagram.replace("@", "")}`
              : undefined;

            return (
              <div
                key={i}
                className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={new URL(`/src/assets/${t.image}`, import.meta.url).href}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="text-primary mt-0.5 shrink-0">{t.icon}</div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-foreground mb-1">
                        {t.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className={chipClass()}>Perfil: {t.perfil}</span>
                    <span className={chipClass()}>Duração: {t.duracao}</span>
                    <span className={chipClass()}>{t.modalidade}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      Ideal para:
                    </span>
                    {t.idealPara.map((tag) => (
                      <span key={tag} className={chipClass()}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(gmaps || igUrl) && (
                    <div className="mt-4 pt-3 border-t border-border flex gap-2">
                      {gmaps && (
                        <a
                          href={gmaps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                          aria-label={`Abrir ${t.name} no Google Maps`}
                        >
                          <MapPin className="h-4 w-4" />
                          Ver no mapa
                          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                        </a>
                      )}

                      {igUrl && (
                        <a
                          href={igUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                          aria-label={`Abrir Instagram do ${t.name}`}
                        >
                          <Instagram className="h-4 w-4" />
                          Instagram
                          <ExternalLink className="h-3.5 w-3.5 opacity-70" />
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
          Dica: em trilhas, leve água, use calçado fechado e evite ir sozinho. Em passeios de barco, confirme o roteiro do dia e condições do mar.
        </p>
      </div>
    </section>
  </PageLayout>
);

export default PasseiosPage;
