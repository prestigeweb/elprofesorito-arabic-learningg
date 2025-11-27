import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Clock, Users, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { saveToGoogleSheets } from "@/lib/googleSheetsService";

const ExamRegistration = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
    experience: "",
    goals: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading toast
    toast({
      title: t('exam.submitting.title') || 'Submitting...',
      description: t('exam.submitting.description') || 'Please wait while we process your registration.',
    });

    try {
      // Prepare data for Google Sheets
      const sheetData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        preferredTime: formData.preferredTime,
        experience: formData.experience,
        goals: formData.goals,
        formType: 'exam' as const,
        timestamp: new Date().toISOString()
      };

      // Save to Google Sheets
      const saved = await saveToGoogleSheets(sheetData);
      
      if (saved) {
        // Show success toast
        toast({
          title: t('exam.success.title'),
          description: t('exam.success.description'),
        });

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          preferredTime: "",
          experience: "",
          goals: ""
        });
      } else {
        throw new Error('Failed to save data');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: t('exam.error.title') || 'Error',
        description: t('exam.error.description') || 'There was an error submitting your registration. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="exam" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spanish-red mb-6 font-display">
            {t('exam.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('exam.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Exam Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-spanish-navy mb-6">
                {t('exam.why.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-reverse space-x-4 p-4 bg-spanish-yellow-light rounded-lg">
                  <div className="w-12 h-12 bg-spanish-yellow rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-spanish-red" />
                  </div>
                  <div>
                    <h4 className="font-bold text-spanish-navy mb-2">{t('exam.why.level.label')}</h4>
                    <p className="text-muted-foreground">
                      {t('exam.why.level.placeholder')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4 p-4 bg-spanish-red-light rounded-lg">
                  <div className="w-12 h-12 bg-spanish-red rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-spanish-navy mb-2">{t('exam.why.custom.label')}</h4>
                    <p className="text-muted-foreground">
                      {t('exam.why.custom.placeholder')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-reverse space-x-4 p-4 bg-spanish-navy-light rounded-lg">
                  <div className="w-12 h-12 bg-spanish-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-spanish-navy mb-2">{t('exam.why.save.label')}</h4>
                    <p className="text-muted-foreground">
                      {t('exam.why.save.placeholder')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam Process */}
            <div className="bg-gradient-card p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-spanish-red mb-4">
                {t('exam.how.title')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-reverse space-x-3">
                  <Clock className="h-5 w-5 text-spanish-yellow" />
                  <span>{t('exam.how.duration')}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-5 w-5 text-spanish-yellow" />
                  <span>{t('exam.how.type')}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-5 w-5 text-spanish-yellow" />
                  <span>{t('exam.how.evaluation')}</span>
                </div>
                <div className="flex items-center space-x-reverse space-x-3">
                  <CheckCircle className="h-5 w-5 text-spanish-yellow" />
                  <span>{t('exam.how.recommendations')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-gradient-spain text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                {t('exam.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('exam.form.name')} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder={t('exam.form.placeholders.name')}
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t('exam.form.phone')} *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder={t('exam.form.placeholders.phone')}
                    required
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t('exam.form.email')}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder={t('exam.form.placeholders.email')}
                    className="text-right"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTime">{t('exam.form.preferredTime')}</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('exam.form.placeholders.timeSelect')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">{t('exam.form.time.morning')}</SelectItem>
                      <SelectItem value="afternoon">{t('exam.form.time.afternoon')}</SelectItem>
                      <SelectItem value="evening">{t('exam.form.time.evening')}</SelectItem>
                      <SelectItem value="weekend">{t('exam.form.time.weekend')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">{t('exam.form.experienceLevel')}</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('exam.form.placeholders.levelSelect')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">{t('exam.form.experience.none')}</SelectItem>
                      <SelectItem value="basic">{t('exam.form.experience.basic')}</SelectItem>
                      <SelectItem value="intermediate">{t('exam.form.experience.intermediate')}</SelectItem>
                      <SelectItem value="advanced">{t('exam.form.experience.advanced')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">{t('exam.form.goals')}</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => handleInputChange("goals", e.target.value)}
                    placeholder={t('exam.form.placeholders.goals')}
                    className="text-right"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-spanish-red hover:bg-spanish-red-dark text-white text-lg py-3 shadow-spanish"
                >
                  <GraduationCap className="ml-2 h-5 w-5" />
                  {t('exam.form.submit')}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t('exam.form.note')}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>


      </div>
    </section>
  );
};

export default ExamRegistration;