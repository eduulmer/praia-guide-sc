import { Volume2, Cigarette, Dog, Trash2, Car, Users, Camera } from "lucide-react";
import { useTranslation } from "react-i18next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const ruleKeys = [
  { icon: <Volume2 className="h-5 w-5" />, key: "silence" },
  { icon: <Users className="h-5 w-5" />, key: "guests" },
  { icon: <Cigarette className="h-5 w-5" />, key: "smoking" },
  { icon: <Dog className="h-5 w-5" />, key: "pets" },
  { icon: <Trash2 className="h-5 w-5" />, key: "trash" },
  { icon: <Car className="h-5 w-5" />, key: "parking" },
  { icon: <Camera className="h-5 w-5" />, key: "security" },
];

const RegrasPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <PageHero
        title={t("rules.pageTitle")}
        subtitle={t("rules.pageSubtitle")}
      />
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {ruleKeys.map((rule, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-card p-5 rounded-lg border border-border animate-fade-in-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="text-primary mt-0.5 shrink-0">{rule.icon}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">
                    {t(`rules.${rule.key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`rules.${rule.key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RegrasPage;
