import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { saveToGoogleSheets } from "@/lib/googleSheetsService";
import { contactPhone, contactWhatsapp, contactEmail } from "@/lib/env";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading toast
    toast({
      title: t('contact.form.submitting.title') || 'Sending...',
      description: t('contact.form.submitting.desc') || 'Please wait while we send your message.',
    });

    try {
      // Prepare data for Google Sheets
      const sheetData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'contact' as const,
        timestamp: new Date().toISOString()
      };

      // Save to Google Sheets
      const saved = await saveToGoogleSheets(sheetData);
      
      if (saved) {
        // Show success toast
        toast({
          title: t('contact.form.success.title'),
          description: t('contact.form.success.desc'),
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('contact.form.error.title') || 'Error',
        description: t('contact.form.error.desc') || 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.ways.call'),
      content: contactPhone,
      action: () => window.open(`tel:${contactPhone.replace(/\s/g, '')}`),
      color: "spanish-red"
    },
    {
      icon: MessageCircle,
      title: t('contact.ways.whatsapp.label'),
      content: t('contact.ways.whatsapp.placeholder'),
      action: () => window.open(`https://wa.me/${contactWhatsapp}`),
      color: "spanish-yellow"
    },
    {
      icon: Mail,
      title: t('contact.ways.email'),
      content: contactEmail,
      action: () => window.open(`mailto:${contactEmail}`),
      color: "spanish-navy"
    },
    {
      icon: MapPin,
      title: t('contact.ways.address.label'),
      content: t('contact.ways.address.placeholder'),
      action: () => {},
      color: "spanish-red"
    }
  ];

  const workingHours = [
    { day: t('contact.hours.weekdays.days'), hours: t('contact.hours.weekdays.time') },
    { day: t('contact.hours.friday.day'), hours: t('contact.hours.friday.time') }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spanish-red mb-6 font-display">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-spanish-navy mb-6">
                {t('contact.ways.title')}
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index}
                    className="card-hover cursor-pointer border-0 shadow-sm"
                    onClick={item.action}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-reverse space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          item.color === 'spanish-red' ? 'bg-spanish-red-light' :
                          item.color === 'spanish-yellow' ? 'bg-spanish-yellow-light' :
                          'bg-spanish-navy-light'
                        }`}>
                          <item.icon className={`h-6 w-6 ${
                            item.color === 'spanish-red' ? 'text-spanish-red' :
                            item.color === 'spanish-yellow' ? 'text-spanish-navy' :
                            'text-spanish-navy'
                          }`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-spanish-navy mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-reverse space-x-3 text-spanish-navy">
                  <Clock className="h-5 w-5" />
                  <span>{t('contact.hours.title')}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-spanish-red font-bold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-spanish-navy">{t('contact.quick.title')}</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => window.open(`https://wa.me/${contactWhatsapp}`)}
                  className="bg-green-600 hover:bg-green-700 text-white flex-1"
                >
                  <MessageCircle className="ml-2 h-4 w-4" />
                  {t('contact.quick.whatsapp')}
                </Button>
                <Button 
                  onClick={() => window.open(`tel:${contactPhone.replace(/\s/g, '')}`)}
                  variant="outline"
                  className="border-spanish-red text-spanish-red hover:bg-spanish-red hover:text-white flex-1"
                >
                  <Phone className="ml-2 h-4 w-4" />
                  {t('contact.quick.call')}
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-spain text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                {t('contact.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">{t('contact.form.name.label')} *</Label>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t('contact.form.name.placeholder')}
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">{t('contact.form.email.label')} *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={t('contact.form.email.placeholder')}
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">{t('contact.form.phone.label')} *</Label>
                  <Input
                    id="contact-phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={t('contact.form.phone.placeholder')}
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">{t('contact.form.message.label')} *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder={t('contact.form.message.placeholder')}
                    required
                    className="text-right min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-spanish-red hover:bg-spanish-red-dark text-white text-lg py-3 shadow-spanish"
                >
                  <Send className="ml-2 h-5 w-5" />
                  {t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;