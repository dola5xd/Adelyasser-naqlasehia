import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLang}
      variant="outline"
      size="sm"
      className="cursor-pointer py-4"
    >
      {i18n.language === "en" ? "AR" : "EN"}
    </Button>
  );
}

export default LanguageSwitcher;
