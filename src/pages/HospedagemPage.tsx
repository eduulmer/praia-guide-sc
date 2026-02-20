import { Home, Users, DoorOpen, ParkingCircle, Wifi, MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

type Hospedagem = {
  codigo: string;
  imagem: string;
  quartos: number;
  banheiros: number;
  ocupacao: number;
  garagem: number;
  destaque: string[];
  amenities: string[];
  whatsapp?: string;
  telefone?: string;
  site?: string;
  endereco: string;
};

function chipClass() {
  return "inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-[11px] font-semibold text-foreground";
}

const hospedagens: Hospedagem[] = [
  {
    codigo: "166-001", imagem: "hospedagem-apto-01.jpg", quartos: 1, banheiros: 1, ocupacao: 4, garagem: 1,
    destaque: ["Ar Condicionado", "Frente para o Mar", "Internet", "Litoral", "Quintal"],
    amenities: ["Churrasqueira", "2 Televisores", "Geladeira", "Fogão 4 bocas", "Micro-ondas", "Airfryer", "Chaleira elétrica", "Cafeteira", "Liquidificador", "Wi-fi", "Câmeras de segurança"],
    whatsapp: "(48) 3262-9282", telefone: "(48) 3262-9282",
    site: "https://admiranda.com.br/imoveis/imoveis/detalhe-do-imovel/cod-166-casa-locacao-in7/",
    endereco: "Rua Luiz Alexandrino Silva, 894 - Apto 01 - Camboa da Armação",
  },
  {
    codigo: "166-002", imagem: "hospedagem-apto-02.jpg", quartos: 2, banheiros: 2, ocupacao: 4, garagem: 1,
    destaque: ["Ar Condicionado", "Frente para o Mar", "Internet", "Lavabo", "Churrasqueira"],
    amenities: ["Churrasqueira a carvão", "2 Televisores", "Geladeira duplex", "Fogão 4 bocas + Forno elétrico", "Micro-ondas", "Airfryer", "Chaleira elétrica", "Batedeira", "Centrífuga de suco", "Liquidificador", "Processador de alimentos", "Wi-fi", "Câmeras de segurança"],
    whatsapp: "(48) 3262-9282", telefone: "(48) 3262-9282",
    site: "https://admiranda.com.br/imoveis/imoveis/detalhe-do-imovel/cod-166-002-casa-temporada/",
    endereco: "Rua Luiz Alexandrino Silva, 894 - Apto 02 - Camboa da Armação",
  },
  {
    codigo: "166-003", imagem: "hospedagem-apto-03.jpg", quartos: 2, banheiros: 1, ocupacao: 4, garagem: 1,
    destaque: ["Ar Condicionado", "Frente para o Mar", "Internet", "Litoral"],
    amenities: ["Wi-fi", "Televisore na sala", "Geladeira duplex", "Fogão 4 bocas + Forno", "Liquidificador", "Airfryer", "Espremedor de frutas", "Sanduicheira", "Ferro de passar roupas", "Ar-condicionado na sala", "Câmeras de segurança externa"],
    whatsapp: "(48) 3262-9282", telefone: "(48) 3262-9282",
    site: "https://admiranda.com.br/imoveis/imoveis/detalhe-do-imovel/cod-166-apto-03-temporada/",
    endereco: "Rua Luiz Alexandrino Silva, 894 - Apto 03 - Camboa da Armação",
  },
];

const HospedagensPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHero title={t("accommodation.pageTitle")} subtitle={t("accommodation.pageSubtitle")} />

      <section className="py-12">
        <div className="container">
          <div className="space-y-8">
            {hospedagens.map((h, i) => {
              const item = t(`accommodation.items.${i}`, { returnObjects: true }) as { name: string; desc: string };

              return (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-6 bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img src={`/src/assets/${h.imagem}`} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                            {t("accommodation.code")} {h.codigo}
                          </span>
                          <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className={chipClass()}><DoorOpen className="h-3.5 w-3.5 opacity-80" />{h.quartos} {t("accommodation.rooms")}</div>
                        <div className={chipClass()}><Users className="h-3.5 w-3.5 opacity-80" />{t("accommodation.upTo")} {h.ocupacao} {t("accommodation.people")}</div>
                        <div className={chipClass()}><Home className="h-3.5 w-3.5 opacity-80" />{h.banheiros} {t("accommodation.bathrooms")}</div>
                        <div className={chipClass()}><ParkingCircle className="h-3.5 w-3.5 opacity-80" />{h.garagem} {t("accommodation.parkingSpot")}</div>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs font-semibold text-muted-foreground mb-2">{t("accommodation.highlights")}:</div>
                        <div className="flex flex-wrap gap-2">
                          {h.destaque.map((d) => (<span key={d} className={chipClass()}>{d}</span>))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-xs font-semibold text-muted-foreground mb-2">{t("accommodation.amenities")}:</div>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {h.amenities.map((a) => (<li key={a} className="flex gap-2"><span>•</span><span>{a}</span></li>))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4 flex gap-2">
                      {h.site && (
                        <a href={h.site} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-primary hover:bg-muted transition-colors">
                          <ExternalLink className="h-4 w-4" />{t("accommodation.viewMore")}
                        </a>
                      )}
                      {h.whatsapp && (
                        <a href={`https://api.whatsapp.com/send?phone=55${h.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-primary hover:bg-muted transition-colors">
                          <MessageCircle className="h-4 w-4" />{t("accommodation.whatsapp")}
                        </a>
                      )}
                      {h.telefone && (
                        <a href={`tel:${h.telefone}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-primary hover:bg-muted transition-colors">
                          <Phone className="h-4 w-4" />{t("accommodation.call")}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-muted/30 border border-border rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-3">{t("accommodation.importantInfo")}</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>{t("accommodation.minStay")}</strong> {t("accommodation.minStayValue")}</li>
              <li>• <strong>{t("accommodation.location")}</strong> {t("accommodation.locationValue")}</li>
              <li>• <strong>{t("accommodation.rulesLabel")}</strong> {t("accommodation.rulesValue")}</li>
              <li>• <strong>{t("accommodation.obsLabel")}</strong> {t("accommodation.obsValue")}</li>
              <li>• <strong>{t("accommodation.contactLabel")}</strong> {t("accommodation.contactValue")}{" "}
                <a href="https://admiranda.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Admir Miranda</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HospedagensPage;
