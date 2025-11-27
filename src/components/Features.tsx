import { Check, Target, Users, BookOpen, TrendingUp, MessageSquare, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Target,
      title: t('features.systems.label'),
      description: t('features.systems.placeholder')
    },
    {
      icon: BookOpen,
      title: t('features.practical.label'),
      description: t('features.practical.placeholder')
    },
    {
      icon: Award,
      title: t('features.skills.label'),
      description: t('features.skills.placeholder')
    },
    {
      icon: Users,
      title: t('features.mentor.label'),
      description: t('features.mentor.placeholder')
    },
    {
      icon: TrendingUp,
      title: t('features.study.label'),
      description: t('features.study.placeholder')
    },
    {
      icon: MessageSquare,
      title: t('features.coaching.label'),
      description: t('features.coaching.placeholder')
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spanish-red mb-6 font-display">
            {t('features.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="bg-white border border-border rounded-2xl p-6 h-full shadow-sm hover:shadow-spanish transition-smooth card-hover">
                {/* Icon */}
                <div className="w-16 h-16 bg-spanish-yellow-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-spanish-yellow transition-smooth">
                  <feature.icon className="h-8 w-8 text-spanish-red" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-spanish-navy mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Check Mark */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-spanish-red rounded-full flex items-center justify-center">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Features;