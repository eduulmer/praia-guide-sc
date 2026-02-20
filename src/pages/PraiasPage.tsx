import { MapPin, ExternalLink, Waves, Footprints, SquareParking, Users, Shell, Sunset } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

import beachPalmas from "@/assets/beach-palmas.jpg";
import beachArmacao from "@/assets/beach-armacao.jpg";
import beachGanchos from "@/assets/beach-ganchos.jpg";
import beachAntenor from "@/assets/beach-antenor.jpg";
import beachCalheiros from "@/assets/beach-calheiros.jpg";
import beachCosteira from "@/assets/beach-marcelo.jpg";

type InfraKey = "high" | "medium" | "low";
type AccessKey = "easy" | "shortTrail" | "trail" | "stairs" | "moderate";
type SeaKey = "calm" | "moderate" | "waves";
type ParkingKey = "easy" | "limited" | "hard";
type IdealKey = "families" | "snorkel" | "sunset" | "peace";

type Beach = {
  image: string;
  estrutura: InfraKey;
  acesso: AccessKey;
  mar: SeaKey;
  estacionamento: ParkingKey;
  idealPara: IdealKey[];
  mapsQuery?: string;
};

function mapsSearchUrl(query?: string) {
  if (!query) return undefined;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function estruturaBadgeClass(level: InfraKey) {
  switch (level) {
    case "high": return "bg-emerald-500/15 text-emerald-300 border-emerald-500/25";
    case "medium": return "bg-amber-500/15 text-amber-300 border-amber-500/25";
    case "low": default: return "bg-slate-500/20 text-rose-200 border-slate-500/40";
  }
}

function chipClass() {
  return "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-semibold text-foreground";
}

function idealIcon(tag: IdealKey) {
  switch (tag) {
    case "families": return <Users className="h-3.5 w-3.5 opacity-80" />;
    case "snorkel": return <Shell className="h-3.5 w-3.5 opacity-80" />;
    case "sunset": return <Sunset className="h-3.5 w-3.5 opacity-80" />;
    case "peace": default: return null;
  }
}

const beaches: Beach[] = [
  { image: beachPalmas, estrutura: "high", acesso: "easy", mar: "calm", estacionamento: "easy", idealPara: ["families"], mapsQuery: "Praia de Palmas Governador Celso Ramos SC" },
  { image: beachArmacao, estrutura: "medium", acesso: "easy", mar: "moderate", estacionamento: "limited", idealPara: ["sunset", "families"], mapsQuery: "Praia da Armação da Piedade Governador Celso Ramos SC" },
  { image: beachGanchos, estrutura: "medium", acesso: "easy", mar: "moderate", estacionamento: "limited", idealPara: ["peace"], mapsQuery: "Praia de Ganchos de Fora Governador Celso Ramos SC" },
  { image: beachAntenor, estrutura: "low", acesso: "shortTrail", mar: "calm", estacionamento: "limited", idealPara: ["snorkel", "peace"], mapsQuery: "Praia do Antenor Governador Celso Ramos SC" },
  { image: beachCalheiros, estrutura: "low", acesso: "shortTrail", mar: "moderate", estacionamento: "limited", idealPara: ["peace", "families"], mapsQuery: "Praia de Calheiros Governador Celso Ramos SC" },
  { image: beachCosteira, estrutura: "low", acesso: "shortTrail", mar: "calm", estacionamento: "hard", idealPara: ["peace", "snorkel", "families"], mapsQuery: "Praia do Marcelo Governador Celso Ramos SC" },
];

const PraiasPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHero title={t("beaches.pageTitle")} subtitle={t("beaches.pageSubtitle")} />

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beaches.map((beach, i) => {
              const gmaps = mapsSearchUrl(beach.mapsQuery);
              const item = t(`beaches.items.${i}`, { returnObjects: true }) as { name: string; desc: string };

              return (
                <div
                  key={i}
                  className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="h-44 overflow-hidden">
                    <img src={beach.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground">{item.name}</h3>
                      <span className={["shrink-0 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold", estruturaBadgeClass(beach.estrutura)].join(" ")}>
                        {t(`beaches.infra.${beach.estrutura}`)}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={chipClass()}><Footprints className="h-3.5 w-3.5 opacity-80" />{t("beaches.access")}: {t(`beaches.accessLevel.${beach.acesso}`)}</span>
                      <span className={chipClass()}><Waves className="h-3.5 w-3.5 opacity-80" />{t("beaches.sea")}: {t(`beaches.seaProfile.${beach.mar}`)}</span>
                      <span className={chipClass()}><SquareParking className="h-3.5 w-3.5 opacity-80" />{t("beaches.parkingLabel")}: {t(`beaches.parkingLevel.${beach.estacionamento}`)}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[11px] font-semibold text-muted-foreground">{t("beaches.idealFor")}:</span>
                      {beach.idealPara.map((tag) => (
                        <span key={tag} className={chipClass()}>{idealIcon(tag)}{t(`beaches.idealTags.${tag}`)}</span>
                      ))}
                    </div>

                    {gmaps && (
                      <a href={gmaps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs hover:bg-muted transition-colors">
                        <MapPin className="h-4 w-4" />
                        {t("beaches.viewMap")}
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">{t("beaches.note")}</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default PraiasPage;
