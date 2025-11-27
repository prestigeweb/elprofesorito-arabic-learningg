import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'ar' ? 'es' : 'ar')}
      className="flex items-center space-x-1 space-x-reverse hover:bg-spanish-red/10"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'ar' ? 'ES' : 'عربي'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;