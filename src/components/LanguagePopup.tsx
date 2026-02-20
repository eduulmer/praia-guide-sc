import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

const LanguagePopup = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(() => !localStorage.getItem("feitomare-lang"));
  const [selected, setSelected] = useState("pt");

  const handleConfirm = () => {
    i18n.changeLanguage(selected);
    localStorage.setItem("feitomare-lang", selected);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader className="items-center">
          <img src={logo} alt="Feito Maré" className="h-20 w-20 rounded-full mx-auto mb-2" />
          <DialogTitle className="text-xl font-display">{t("langPopup.title")}</DialogTitle>
          <DialogDescription>{t("langPopup.subtitle")}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2 my-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-left transition-colors ${
                selected === lang.code
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border hover:bg-muted text-muted-foreground"
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="font-medium">{lang.label}</span>
            </button>
          ))}
        </div>

        <Button onClick={handleConfirm} className="w-full">
          {t("langPopup.confirm")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default LanguagePopup;
