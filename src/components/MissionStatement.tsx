import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const MissionStatement = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-spanish-red/5 to-spanish-yellow/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-spanish-red mb-6">{t('mission.title')}</h3>
          <p className="text-xl leading-relaxed text-gray-800 mb-8">
            {t('mission.message')}
          </p>
          <div className="flex items-center justify-center space-x-reverse space-x-3 text-spanish-red font-bold text-2xl">
            <span className="text-4xl">🚀</span>
            <span className="text-gray-800">{t('mission.cta')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement; 