import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Star, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
      if (!isVisible) return;

      const startTime = Date.now();
      const endTime = startTime + duration;

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        if (currentCount !== countRef.current) {
          countRef.current = currentCount;
          setCount(currentCount);
        }

        if (now >= endTime) {
          setCount(end);
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration, isVisible]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-right space-y-8 lg:col-span-3">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-spanish-red font-display leading-tight">
                {t('hero.greeting')}
                <span className="block text-spanish-navy text-4xl lg:text-5xl mt-2">
                  {t('hero.welcomeText')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                {t('hero.tagline')}
              </p>
              <div className="w-20 h-1 bg-spanish-yellow mx-auto lg:mr-0"></div>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              {t('hero.description')}
              <br />
              <span className="text-spanish-red font-semibold">
                {t('hero.features')}
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('exam')}
                size="lg"
                className="bg-spanish-red hover:bg-spanish-red-dark text-white shadow-spanish text-lg px-8 py-3"
              >
                <GraduationCap className="ml-2 h-5 w-5" />
                {t('hero.examButton')}
              </Button>
              <Button 
                onClick={() => scrollToSection('programs')}
                variant="outline" 
                size="lg"
                className="border-spanish-navy text-spanish-navy hover:bg-spanish-navy hover:text-white text-lg px-8 py-3"
              >
                {t('hero.programsButton')}
              </Button>
            </div>

            {/* Dynamic Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-spanish-red">
                  <AnimatedNumber end={500} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.students')}</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-spanish-red">
                  <AnimatedNumber end={8} />
                </div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.programs')}</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-2xl font-bold text-spanish-red">
                  <AnimatedNumber end={95} suffix="%" />
                </div>
                <div className="text-sm text-muted-foreground">{t('hero.stats.success')}</div>
              </div>
            </div>
          </div>

          {/* Hero Video - Vertical Layout */}
          <div className="relative flex justify-center lg:justify-end lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 transition-smooth lg:translate-x-4">
              {/* Vertical Video Container */}
              <div className="relative">
                {/* Video Container with 9:16 aspect ratio (vertical) */}
                <div className="w-80 rounded-2xl overflow-hidden">
                  <AspectRatio ratio={9/16}>
                    <iframe
                      src="https://drive.google.com/file/d/1_U_29uNF-GzNoozhxqTrCSeLu6cdTVBH/preview"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </AspectRatio>
                </div>
                
                {/* Video Frame Decoration */}
                <div className="absolute inset-0 border-4 border-spanish-yellow/20 rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Video Info */}
              <div className="mt-4 text-center">
                <div className="text-spanish-navy font-semibold text-sm">{t('hero.video.verticalVideo')}</div>
                <div className="text-muted-foreground text-xs">{t('hero.video.aspectRatio')}</div>
              </div>
            </div>

            {/* Decorative Elements - Adjusted for vertical layout */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-spanish-yellow rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-spanish-red rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-spanish-navy rounded-full opacity-20"></div>
            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-spanish-yellow rounded-full opacity-25"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;