import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're on the program detail page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToSection: sectionId } });
      setIsOpen(false);
      return;
    }

    // If we're already on the home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Handle scroll to section when coming from program detail page
  React.useEffect(() => {
    if (location.state?.scrollToSection) {
      const element = document.getElementById(location.state.scrollToSection);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  const handleExamClick = () => {
    scrollToSection('exam');
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/201093630813");
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-reverse space-x-2">
            <img 
              src="/lovable-uploads/403358f7-8ca0-418c-aa1f-c0224668114f.png" 
              alt="El Profesorito Logo"
              className="w-8 h-8 rounded-sm"
            />
            <h1 className="text-xl font-bold text-spanish-red font-display">
              {t('brand.spanishHouse')}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.programs')}
            </button>
            <button 
              onClick={() => scrollToSection('exam')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.exam')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.faq')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* CTA Buttons and Language Switcher */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <LanguageSwitcher />
            <Button 
              variant="outline" 
              size="sm" 
              className="border-spanish-red text-spanish-red hover:bg-spanish-red hover:text-white"
              onClick={handleWhatsappClick}
            >
              <MessageCircle className="ml-2 h-4 w-4" />
              {t('nav.whatsapp')}
            </Button>
            <Button 
              onClick={handleExamClick}
              className="bg-spanish-red hover:bg-spanish-red-dark text-white shadow-spanish"
            >
              {t('nav.register')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-4">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.programs')}
              </button>
              <button 
                onClick={() => scrollToSection('exam')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.exam')}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.faq')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-right text-foreground hover:text-primary transition-smooth"
              >
                {t('nav.contact')}
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <LanguageSwitcher />
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-spanish-red text-spanish-red hover:bg-spanish-red hover:text-white"
                  onClick={handleWhatsappClick}
                >
                  <MessageCircle className="ml-2 h-4 w-4" />
                  {t('nav.whatsapp')}
                </Button>
                <Button 
                  onClick={handleExamClick}
                  className="bg-spanish-red hover:bg-spanish-red-dark text-white"
                >
                  {t('nav.register')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;