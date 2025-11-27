import { Target, Zap, Users, Award, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spanish-red mb-6 font-display">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="text-xl leading-relaxed text-foreground">
              <p className="mb-6">
                <span className="text-spanish-red font-bold text-2xl">
                  {t('about.mainText')}
                </span>
                <br />
                {t('about.subText')}
              </p>
              
              <p className="mb-6">
                {t('about.firstStep')}
                <span className="text-spanish-yellow bg-spanish-yellow/20 px-2 py-1 rounded mx-2 font-bold">
                  {t('about.levelChallenge')}
                </span>
              </p>

              <p className="text-lg">
                {t('about.explanation')} 
                <span className="text-spanish-red font-semibold">
                  {t('about.notTraditional')}
                </span>
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-reverse space-x-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Target className="h-8 w-8 text-spanish-red" />
                <div>
                  <h4 className="font-bold text-spanish-navy">{t('about.features.customSystem.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.features.customSystem.desc')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-reverse space-x-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Zap className="h-8 w-8 text-spanish-yellow" />
                <div>
                  <h4 className="font-bold text-spanish-navy">{t('about.features.practical.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.features.practical.desc')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-reverse space-x-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Users className="h-8 w-8 text-spanish-red" />
                <div>
                  <h4 className="font-bold text-spanish-navy">{t('about.features.personalFollow.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.features.personalFollow.desc')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-reverse space-x-3 p-4 bg-white rounded-lg shadow-sm card-hover">
                <Award className="h-8 w-8 text-spanish-yellow" />
                <div>
                  <h4 className="font-bold text-spanish-navy">{t('about.features.guaranteedResults.title')}</h4>
                  <p className="text-sm text-muted-foreground">{t('about.features.guaranteedResults.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-smooth">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <img 
                    src="/lovable-uploads/403358f7-8ca0-418c-aa1f-c0224668114f.png" 
                    alt="El Profesorito Logo"
                    className="w-12 h-8 rounded-sm"
                  />
                  <div className="text-spanish-red font-bold text-xl">{t('hero.welcome')}</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-spanish-yellow-light rounded-lg">
                    <Star className="h-5 w-5 text-spanish-red" />
                    <span className="font-medium" >{t('about.visual.studySystem')}</span> 
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-spanish-red-light rounded-lg">
                    <Users className="h-5 w-5 text-spanish-red" />
                    <span className="font-medium">{t('about.visual.mentorFollow')}</span>
                  </div>
                  
                  <div className="flex items-center space-x-reverse space-x-3 p-3 bg-spanish-navy-light rounded-lg">
                    <Award className="h-5 w-5 text-spanish-navy" />
                    <span className="font-medium">{t('about.visual.customSystems')}</span>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <div className="text-3xl font-bold text-spanish-red mb-3">{t('hero.letsgo')}</div>
                  <div className="text-muted-foreground text-lg">{t('about.visual.startJourney')}</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-spanish-yellow rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-spanish-red rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;