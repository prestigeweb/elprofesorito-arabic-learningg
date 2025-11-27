import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/17N7FJJRJh/?mibextid=wwXIfr", 
      color: "hover:text-blue-600" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/elprofesorito19/?utm_source=ig_web_button_share_sheet", 
      color: "hover:text-pink-600" 
    },
    { 
      // Using Youtube icon as a placeholder for TikTok (TikTok icon not available in current lucide-react version)
      icon: Youtube, 
      href: "https://www.tiktok.com/@elprofesorito19?_r=1&_t=ZS-91Uxx6ljWR0", 
      color: "hover:text-red-600" 
    }
  ];

  const quickLinks = [
    { title: t('nav.home'), href: "#home" },
    { title: t('nav.about'), href: "#about" },
    { title: t('nav.features'), href: "#features" },
    { title: t('nav.programs'), href: "#programs" },
    { title: t('nav.exam'), href: "#exam" },
    { title: t('nav.contact'), href: "#contact" }
  ];

  const programs = [
    t('programs.general.title'),
    t('programs.speaking.title'),
    t('programs.retos.title'),
    t('programs.grammar.title'),
    t('programs.summer.title')
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-spanish-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-8 h-6 flag-wave rounded-sm"></div>
              <h3 className="text-2xl font-bold font-display">El Profesorito</h3>
            </div>
            
            <p className="text-spanish-navy-light leading-relaxed">
              {t('footer.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-reverse space-x-3">
                <Phone className="h-4 w-4 text-spanish-yellow" />
                <span className="text-sm">+20 109 3630813 / 0108 0889323</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <Mail className="h-4 w-4 text-spanish-yellow" />
                <span className="text-sm">elprofesorito322@gmail.com</span>
              </div>
              <div className="flex items-center space-x-reverse space-x-3">
                <MapPin className="h-4 w-4 text-spanish-yellow" />
                <span className="text-sm">{t('contact.addressText')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-spanish-yellow">{t('footer.links.quick')}</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-spanish-navy-light hover:text-spanish-yellow transition-smooth text-right w-full"
                >
                  {link.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-spanish-yellow">{t('footer.programs.title')}</h4>
            <div className="space-y-3">
              {programs.map((program, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection("#programs")}
                  className="block text-spanish-navy-light hover:text-spanish-yellow transition-smooth text-right w-full text-sm"
                >
                  {program}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-spanish-yellow">{t('footer.contact.title')}</h4>
            
            <div className="space-y-3">
              <Button 
                onClick={() => window.open("https://wa.me/201093630813")}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="ml-2 h-4 w-4" />
                {t('footer.contact.whatsapp')}
              </Button>
              
              <Button 
                onClick={() => scrollToSection("#exam")}
                variant="outline" 
                className="w-full border-spanish-yellow text-spanish-yellow hover:bg-spanish-yellow hover:text-spanish-navy"
              >
                {t('footer.contact.register')}
              </Button>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-bold text-spanish-yellow mb-3">{t('footer.social.title')}</h5>
              <div className="flex space-x-reverse space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-spanish-navy-light ${social.color} transition-smooth`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-spanish-navy-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-spanish-navy-light text-sm text-center md:text-right">
              © {currentYear} El Profesorito. {t('footer.rights')}.
            </div>
            
            <div className="flex items-center space-x-reverse space-x-6 text-sm">
              <a href="/privacy-policy" className="text-spanish-navy-light hover:text-spanish-yellow transition-smooth">
                {t('footer.legal.privacy')}
              </a>
              <a href="/terms-of-service" className="text-spanish-navy-light hover:text-spanish-yellow transition-smooth">
                {t('footer.legal.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => window.open("https://wa.me/201093630813")}
          className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-2xl animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;