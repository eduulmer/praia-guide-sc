import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            {t("footer.brand")}
          </div>
          <p className="text-sm opacity-70">
            {t("footer.credit")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
