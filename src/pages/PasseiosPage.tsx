import { Ship, Footprints, MapPin, Instagram, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

type PerfilKey = "boat" | "trail";
type ModalidadeKey = "shared" | "private" | "free";
type IdealKey = "families" | "history" | "photos" | "nature" | "snorkel" | "peace" | "dolphins";

type Tour = {
  icon: React.ReactNode;
  image: string;
  perfil: PerfilKey;
  duracao: string;
  modalidade: ModalidadeKey;
  idealPara: IdealKey[];
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
  { icon: <Ship className="h-5 w-5" />, image: "tour-anhatomirim.jpg", perfil: "boat", duracao: "Meio período", modalidade: "shared", idealPara: ["history", "photos", "nature"], instagram: "@penaaguapasseios" },
  { icon: <Ship className="h-5 w-5" />, image: "tour-barco-pirata.jpg", perfil: "boat", duracao: "3h a 4h", modalidade: "shared", idealPara: ["families", "photos", "nature"], instagram: "@penaaguapasseios" },
  { icon: <Ship className="h-5 w-5" />, image: "tour-golfinhos.jpg", perfil: "boat", duracao: "1h30 a meio período", modalidade: "shared", idealPara: ["dolphins", "nature", "photos"], instagram: "@penaaguapasseios" },
  { icon: <Footprints className="h-5 w-5" />, image: "trilha-praia-fora.jpg", perfil: "trail", duracao: "1h a 2h", modalidade: "free", idealPara: ["nature", "photos", "peace"], mapsUrl: "https://www.google.com/maps/place/Trilha+Praia+de+Fora/@-27.3024557,-48.5609758,15z" },
  { icon: <Footprints className="h-5 w-5" />, image: "trilha-sissial.jpg", perfil: "trail", duracao: "2h a 3h", modalidade: "free", idealPara: ["nature", "peace", "photos"], mapsQuery: "Praia do Sissial Governador Celso Ramos SC" },
  { icon: <Footprints className="h-5 w-5" />, image: "trilha-conchas.jpg", perfil: "trail", duracao: "2h a 3h", modalidade: "free", idealPara: ["photos", "nature", "peace"], mapsQuery: "Praia das Conchas Governador Celso Ramos SC" },
];

const PasseiosPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHero title={t("tours.pageTitle")} subtitle={t("tours.pageSubtitle")} />

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour, i) => {
              const gmaps = tour.mapsUrl || (tour.mapsQuery ? mapsSearchUrl(tour.mapsQuery) : undefined);
              const igUrl = tour.instagram
                ? tour.instagram.startsWith("http") ? tour.instagram : `https://www.instagram.com/${tour.instagram.replace("@", "")}`
                : undefined;
              const item = t(`tours.items.${i}`, { returnObjects: true }) as { name: string; desc: string };

              return (
                <div
                  key={i}
                  className="group bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={new URL(`/src/assets/${tour.image}`, import.meta.url).href}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="text-primary mt-0.5 shrink-0">{tour.icon}</div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className={chipClass()}>{t("tours.profile")}: {t(`tours.profileTypes.${tour.perfil}`)}</span>
                      <span className={chipClass()}>{t("tours.duration")}: {tour.duracao}</span>
                      <span className={chipClass()}>{t(`tours.modalityTypes.${tour.modalidade}`)}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-[11px] font-semibold text-muted-foreground">{t("tours.idealFor")}:</span>
                      {tour.idealPara.map((tag) => (
                        <span key={tag} className={chipClass()}>{t(`tours.idealTags.${tag}`)}</span>
                      ))}
                    </div>

                    {(gmaps || igUrl) && (
                      <div className="mt-4 pt-3 border-t border-border flex gap-2">
                        {gmaps && (
                          <a href={gmaps} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            <MapPin className="h-4 w-4" />{t("tours.viewMap")}<ExternalLink className="h-3.5 w-3.5 opacity-70" />
                          </a>
                        )}
                        {igUrl && (
                          <a href={igUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                            <Instagram className="h-4 w-4" />{t("tours.instagram")}<ExternalLink className="h-3.5 w-3.5 opacity-70" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">{t("tours.tip")}</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default PasseiosPage;
