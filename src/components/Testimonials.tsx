import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";

// Constants
const TESTIMONIAL_COUNT = 21;
const DEFAULT_RATING = 5;

// Custom hook for responsive cards per view
const useResponsiveCardsPerView = () => {
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3); // Large desktop: 3 cards
      } else if (window.innerWidth >= 1024) {
        setCardsPerView(2); // Desktop: 2 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  return cardsPerView;
};

// Custom hook for carousel logic
const useCarousel = (itemsLength: number, itemsPerView: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const maxIndex = Math.max(0, itemsLength - itemsPerView);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const resetIndex = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  return {
    currentIndex,
    setCurrentIndex,
    goToPrevious,
    goToNext,
    canGoPrevious,
    canGoNext,
    resetIndex,
    maxIndex
  };
};

const Testimonials = () => {
  const { t, language } = useLanguage();
  const cardsPerView = useResponsiveCardsPerView();

  // Memoized testimonials data to prevent re-creation on every render
  // Filter out commented reviews - only show reviews with valid content
  const testimonials = useMemo(() => {
    const reviews: Array<{
      name: string;
      role: string;
      content: string;
      rating: number;
      image: string;
    }> = [];
    
    // Iterate through all possible review indices and check if they exist
    for (let i = 0; i < TESTIMONIAL_COUNT; i++) {
      const contentKey = `testimonials.reviews.${i}.content`;
      const content = t(contentKey);
      
      // If translation function returns the key itself, the review is commented out
      // Also check if content is meaningful (not empty and not the key)
      const isCommentedOut = content === contentKey || !content || content.trim() === '';
      
      if (!isCommentedOut) {
        const name = t(`testimonials.reviews.${i}.name`);
        const role = t(`testimonials.reviews.${i}.role`);
        const image = t(`testimonials.reviews.${i}.image`);
        
        reviews.push({
          name: name && name !== `testimonials.reviews.${i}.name` ? name : `User ${reviews.length + 1}`,
          role: role && role !== `testimonials.reviews.${i}.role` ? role : 'Student',
          content: content,
          rating: DEFAULT_RATING,
          image: image && image !== `testimonials.reviews.${i}.image` ? image : '👤'
        });
      }
    }
    
    return reviews;
  }, [t, language]);

  const carousel = useCarousel(testimonials.length, cardsPerView);

  // Reset to first slide when language changes
  useEffect(() => {
    carousel.resetIndex();
  }, [language, carousel.resetIndex]);

  // RTL support
  const isRTL = language === 'ar';
  
  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        isRTL ? carousel.goToNext() : carousel.goToPrevious();
      }
      if (e.key === 'ArrowRight') {
        isRTL ? carousel.goToPrevious() : carousel.goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carousel.goToPrevious, carousel.goToNext, isRTL]);

  // Calculate card width and transform based on cards per view with RTL support
  const cardWidth = 100 / cardsPerView;
  const direction = isRTL ? 1 : -1;
  const transformX = carousel.currentIndex * cardWidth;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-spanish-red mb-4 sm:mb-6 font-display">
            {t('testimonials.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-4 sm:mb-6 lg:mb-8"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative px-8 sm:px-12 md:px-16 lg:px-20">
          {/* Navigation Arrows - RTL aware - Positioned outside */}
          <button
            onClick={isRTL ? carousel.goToNext : carousel.goToPrevious}
            disabled={isRTL ? !carousel.canGoNext : !carousel.canGoPrevious}
            className={`absolute left-0 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
              (isRTL ? carousel.canGoNext : carousel.canGoPrevious)
                ? 'bg-white hover:bg-gray-50 text-spanish-red hover:text-spanish-navy' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
            }`}
            aria-label={isRTL ? t('testimonials.next') : t('testimonials.previous')}
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={isRTL ? carousel.goToPrevious : carousel.goToNext}
            disabled={isRTL ? !carousel.canGoPrevious : !carousel.canGoNext}
            className={`absolute right-0 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
              (isRTL ? carousel.canGoPrevious : carousel.canGoNext)
                ? 'bg-white hover:bg-gray-50 text-spanish-red hover:text-spanish-navy' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
            }`}
            aria-label={isRTL ? t('testimonials.previous') : t('testimonials.next')}
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Carousel Container */}
          <div className="relative overflow-x-hidden overflow-y-visible">
            <div 
              className="flex transition-transform duration-500 ease-in-out items-stretch"
              style={{
                transform: `translateX(${direction * transformX}%)`,
                width: `${(testimonials.length / cardsPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`${language}-${index}`} 
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${cardWidth}%`, minWidth: 0 }}
                >
                  <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl border-0 bg-white/95 backdrop-blur-sm flex flex-col h-full">
                    <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col w-full h-full">
                      <div className="flex items-center justify-between mb-3 sm:mb-4 flex-shrink-0">
                        <Quote className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-spanish-yellow flex-shrink-0" />
                        <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-1`}>
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-spanish-yellow text-spanish-yellow" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4 sm:mb-5 w-full flex-1">
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base whitespace-pre-wrap w-full" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                          "{testimonial.content}"
                        </p>
                      </div>
                      
                      <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3 sm:space-x-4 pt-3 sm:pt-4 border-t border-gray-100 flex-shrink-0 w-full mt-auto`}>
                        <div className="text-2xl sm:text-3xl flex-shrink-0">
                          {testimonial.image}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-bold text-spanish-navy text-sm sm:text-base break-words">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground break-words">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className={`flex ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
              {Array.from({ length: carousel.maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === carousel.currentIndex 
                      ? 'bg-spanish-red scale-110 shadow-md' 
                      : 'bg-spanish-yellow/30 hover:bg-spanish-yellow/50'
                  }`}
                  onClick={() => carousel.setCurrentIndex(index)}
                  aria-label={`${t('testimonials.goToSlide')} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;