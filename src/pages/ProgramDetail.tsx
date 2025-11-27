import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Calendar, Users, BookOpen, MessageCircle, Zap, Target, Coffee, Sun } from "lucide-react";

// Import program images
import generalProgram from "@/assets/general-program.jpg";
import speakingProgram from "@/assets/speaking-program.jpg";
import kidsProgram from "@/assets/kids-program.jpg";
import grammarProgram from "@/assets/grammar-program.jpg";
import cafeProgram from "@/assets/cafe-day.jpg";
import retosProgram from "@/assets/retos-program.jpg";
import semanaProgram from "@/assets/semana-program.jpg";
import summerProgram from "@/assets/summer-program.jpg";
import miniCursoProgram from "@/assets/mini-curso.jpg";

const ProgramDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  // Get translations for arrays
  const translations = language === 'ar' ? {
    general: {
      skills: [
        "هتتعلم أساسيات اللغة (مفردات – قواعد – تراكيب)",
        "تحسين الاستماع والمحادثة بشكل تدريجي",
        "قراءة نصوص مناسبة للمستوى وتنمية الفهم",
        "كتابة جمل ونصوص بسيطة ثم متقدمة"
      ],
      features: [
        "مدة المحاضرة: ساعتين",
        "يشمل جميع مهارات اللغة (استماع – محادثات – قراءة – كتابة)",
        "مادة تفاعلية خاصة بالمركز للتطبيق العملي",
        "محتوي كل مستوي كامل"
      ]
    },
    speaking: {
      skills: [
        "تطوير المحادثة اليومية والمهنية",
        "تحسين الطلاقة والنطق",
        "استخدام المفردات في مواقف حياتية حقيقية",
        "التفاعل مع Natives عشان تاخد تجربة كاملة",
        "التزام يومي بالـTasks والتحديات يخليك متعود على التفكير بالإسباني",
        "Pragmática ودا علم في اللغة بيعلمك تتكلم زي ال Nativo"
      ],
      features: [
        "مدة المحاضرة: 3 ساعات",
        "بنخلص فيه 3 مستويات محادثة في مدة قصيرة",
        "كل طالب معاه Mentor يتابعه يوميًا ويرسل له مهام",
        "كل طالب عنده 30 تحدي يوميًا يطبّق من خلالهم"
      ]
    },
    kids: {
      skills: [
        "كلمات وجمل للتواصل البسيط اليومي",
        "تحسين النطق بطريقة سهلة ومناسبة للطفل",
        "تنمية مهارات الاستماع والتفاعل",
        "حب اللغة والتعود على استخدامها من بدري"
      ],
      features: [
        "محاضرات مليانة أنشطة: أغاني، قصص، ألعاب، رسومات",
        "تقسيم الأطفال حسب الفئة العمرية عشان كل مجموعة تاخد المناسب ليها",
        "التركيز على تعليم مفردات أساسية وجمل قصيرة عملية",
        "محاضرات قصيرة وممتعة تحافظ على تركيز الطفل"
      ]
    },
    grammar: {
      skills: [
        "جميع أزمنة وقواعد اللغة الإسبانية",
        "التطبيق العملي للقواعد في المحادثة",
        "كتابة وتكوين جمل صحيحة",
        "الفهم الصحيح لاستخدام الأزمنة المختلفة"
      ],
      features: [
        "شرح شامل: Indicativo, Subjuntivo, Imperativo, Morfología",
        "مادة خاصة بالمستوى للتطبيق",
        "في كل محاضرة: شرح زمن + تطبيق عملي في المحادثة",
        "التكلفة: 1800 ج"
      ]
    },
    cafe: {
      skills: [
        "هتتعلم تعبيرات عامية",
        "هتاخد ثقة في الكلام في مواقف يومية",
        "هتتعود تسمع وتفهم الإسباني الطبيعي",
        "هتتعرف على طلاب زيك وتكون مجتمع بيدعمك"
      ],
      features: [
        "موضوعات متنوعة (ثقافة، سفر، أفلام، مواقف حياتية)",
        "مدرس (مصري أو Native) لتصحيح الأخطاء وإضافة تعبيرات طبيعية",
        "التكلفة: 150 ج",
        "3 ساعات"
      ]
    },
    retos: {
      skills: [
        "تحسين المحادثة بشكل يومي",
        "مراجعة وتطبيق القواعد مباشرة",
        "تقوية الاستماع بمحتوى عملي",
        "بناء روتين مذاكرة والتزام بالتحديات"
      ],
      features: [
        "المدة: 15 يوم أو تحدي 30 يوم",
        "كل يوم 3 محاضرات (محادثة – قواعد – استماع)",
        "مدة المحاضرة: 60 دقيقة",
        "نظام يوم محاضرات / يوم تاسكات",
        "بنخلص فيه حتى 4 مستويات محادثة",
        "كل يوم 30 تحدي للطالب",
        "متابعة ومذاكرة خاصة مع خطة مخصصة",
        "تحدي 15 يوم: 4500 ج. - تحدي 30 يوم: 7000 ج."
      ]
    },
    semana: {
      skills: [
        "ممارسة سريعة ومكثفة للمهارات الأربع",
        "تحديد نقاط القوة والضعف من خلال الاختبار",
        "تجربة كاملة للغة في وقت قصير"
      ],
      features: [
        "4 أيام متواصلين",
        "كل يوم نركز على مهارة: يوم استماع - يوم محادثة - يوم قواعد - يوم اختبار",
        "التكلفة: 750 ج."
      ]
    },
    summer: {
      skills: [
        "الانتهاء من مستوى كامل في أسبوع",
        "ممارسة مكثفة لكل المهارات",
        "انغماس كامل في اللغة خلال فترة قصيرة"
      ],
      features: [
        "14 محاضرة خلال أسبوع واحد",
        "كل محاضرة: 90 دقيقة",
        "محاضرتين يوميًا",
        "التكلفة: 1800 ج."
      ]
    },
    mini: {
      skills: [
        "تركيز مباشر على هدفك (محادثة/قواعد/استماع)",
        "محتوى مُصمم خصيصًا لك",
        "مرونة في التوقيت والموضوعات"
      ],
      features: [
        "4 محاضرات في الشهر",
        "مدة المحاضرة: ساعتين",
        "أنواع الميني كورس: محادثة - قواعد - صوتيات واستماع",
        "التكلفة: 3500 ج."
      ]
    }
  } : {
    general: {
      skills: [
        "Aprenderás fundamentos del idioma (vocabulario – gramática – estructuras)",
        "Mejorar la escucha y conversación gradualmente",
        "Leer textos apropiados para el nivel y desarrollar comprensión",
        "Escribir oraciones y textos simples luego avanzados"
      ],
      features: [
        "Duración de la clase: 2 horas",
        "Incluye todas las habilidades del idioma (escuchar – conversación – lectura – escritura)",
        "Material interactivo especial del centro para aplicación práctica",
        "Contenido completo de cada nivel"
      ]
    },
    speaking: {
      skills: [
        "Desarrollar conversación diaria y profesional",
        "Mejorar fluidez y pronunciación",
        "Usar vocabulario en situaciones de vida real",
        "Interactuar con nativos para tener experiencia completa",
        "Compromiso diario con tareas y desafíos te acostumbra a pensar en español",
        "Pragmática, una ciencia del idioma que te enseña a hablar como un nativo"
      ],
      features: [
        "Duración de la clase: 3 horas",
        "Completamos 3 niveles de conversación en poco tiempo",
        "Cada estudiante tiene un Mentor que lo sigue diariamente y le envía tareas",
        "Cada estudiante tiene 30 desafíos diarios para aplicar"
      ]
    },
    kids: {
      skills: [
        "Palabras y frases para comunicación diaria simple",
        "Mejorar pronunciación de manera fácil y apropiada para el niño",
        "Desarrollar habilidades de escucha e interacción",
        "Amor por el idioma y acostumbrarse a usarlo desde temprano"
      ],
      features: [
        "Clases llenas de actividades: canciones, cuentos, juegos, dibujos",
        "División de niños por grupo de edad para que cada grupo reciba lo apropiado",
        "Enfoque en enseñar vocabulario básico y frases cortas prácticas",
        "Clases cortas y divertidas que mantienen la atención del niño"
      ]
    },
    grammar: {
      skills: [
        "All tenses and grammar rules of the Spanish language",
        "Practical application of rules in conversation",
        "Writing and forming correct sentences",
        "Correct understanding of the use of different tenses"
      ],
      features: [
        "Comprehensive explanation: Indicative, Subjunctive, Imperative, Morphology",
        "Special material for the level for practical application",
        "In each class: Explanation of tense + practical application in conversation",
        "Cost: 1800 LE"
      ]
    },
    cafe: {
      skills: [
        "Learn everyday expressions",
        "Gain confidence in speaking in everyday situations",
        "Get used to listening and understanding natural Spanish",
        "Get to know your peers and become a supportive community"
      ],
      features: [
        "Varied topics (culture, travel, movies, everyday life)",
        "Native or Egyptian tutor to correct errors and add natural expressions",
        "Cost: 150 LE",
        "3 hours"
      ]
    },
    retos: {
      skills: [
        "Improve conversation skills daily",
        "Review and apply grammar rules directly",
        "Strengthen listening with practical content",
        "Build study routine and commitment to challenges"
      ],
      features: [
        "Duration: 15 days or 30 days challenge",
        "3 classes daily (conversation – grammar – listening)",
        "Class duration: 60 minutes",
        "System: class day / task day",
        "Complete up to 4 conversation levels",
        "30 daily challenges for each student",
        "Special follow-up and study plan",
        "15-day challenge: 4500 LE - 30-day challenge: 7000 LE"
      ]
    },
    semana: {
      skills: [
        "Rapid and intensive practice of the four skills",
        "Identify strengths and weaknesses through testing",
        "Complete language experience in a short time"
      ],
      features: [
        "4 consecutive days",
        "Each day focuses on a skill: listening day - conversation day - grammar day - test day",
        "Cost: 750 LE"
      ]
    },
    summer: {
      skills: [
        "Complete a full level in one week",
        "Intensive practice of all skills",
        "Complete language immersion in a short period"
      ],
      features: [
        "14 classes during one week",
        "Each class: 90 minutes",
        "2 classes daily",
        "Cost: 1800 LE"
      ]
    },
    mini: {
      skills: [
        "Direct focus on your goal (conversation/grammar/listening)",
        "Content designed specifically for you",
        "Flexibility in timing and topics"
      ],
      features: [
        "4 classes per month",
        "Class duration: 2 hours",
        "Mini course types: conversation - grammar - phonetics and listening",
        "Cost: 3500 LE"
      ]
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Define programs data (should match ProgramsNew.tsx)
  const programs = [
    {
      id: 1,
      title: t('programs.general.title'),
      titleEn: "General Program",
      description: t('programs.general.desc'),
      schedule: t('programs.general.schedule'),
      duration: t('programs.general.duration'),
      price: t('programs.general.price'),
      image: generalProgram,
      category: 'adults',
      icon: BookOpen,
      skills: translations.general.skills,
      features: translations.general.features
    },
    {
      id: 2,
      title: t('programs.speaking.title'),
      titleEn: "Speaking Program",
      description: t('programs.speaking.desc'),
      schedule: t('programs.speaking.schedule'),
      duration: t('programs.speaking.duration'),
      price: t('programs.speaking.price'),
      image: speakingProgram,
      category: 'adults',
      icon: MessageCircle,
      skills: translations.speaking.skills,
      features: translations.speaking.features
    },
    {
      id: 3,
      title: t('programs.kids.title'),
      titleEn: "Kids Program",
      description: t('programs.kids.desc'),
      schedule: "Private Course",
      duration: "8 Fun Sessions",
      price: "3000 LE",
      image: kidsProgram,
      category: 'kids',
      icon: Users,
      skills: translations.kids.skills,
      features: translations.kids.features
    },
    {
      id: 4,
      title: t('programs.grammar.title'),
      titleEn: "Mega Grammar",
      description: t('programs.grammar.desc'),
      schedule: t('programs.grammar.schedule'),
      duration: t('programs.grammar.duration'),
      price: t('programs.grammar.price'),
      image: grammarProgram,
      category: 'intensive',
      icon: Target,
      skills: translations.grammar.skills,
      features: translations.grammar.features
    },
    {
      id: 5,
      title: t('programs.cafe.title'),
      titleEn: "Café Day",
      description: t('programs.cafe.desc'),
      schedule: t('programs.cafe.schedule'),
      duration: t('programs.cafe.duration'),
      price: t('programs.cafe.price'),
      image: cafeProgram,
      category: 'adults',
      icon: Coffee,
      skills: translations.cafe.skills,
      features: translations.cafe.features
    },
    {
      id: 6,
      title: t('programs.retos.title'),
      titleEn: "Los Retos Program",
      description: t('programs.retos.desc'),
      schedule: t('programs.schedule.daily3'),
      duration: t('programs.duration.retos15'),
      price: t('programs.price.retos15'),
      image: retosProgram,
      category: 'intensive',
      icon: Zap,
      skills: translations.retos.skills,
      features: translations.retos.features
    },
    {
      id: 7,
      title: t('programs.semana.title'),
      titleEn: "Semana Práctica Program",
      description: t('programs.semana.desc'),
      schedule: t('programs.schedule.consecutive4'),
      duration: t('programs.duration.week1Alt'),
      price: t('programs.price.semana750'),
      image: semanaProgram,
      category: 'intensive',
      icon: Target,
      skills: translations.semana.skills,
      features: translations.semana.features
    },
    {
      id: 8,
      title: t('programs.summer.title'),
      titleEn: "Summer Camp Program",
      description: t('programs.summer.desc'),
      schedule: t('programs.schedule.daily2'),
      duration: t('programs.duration.week1Alt'),
      price: t('programs.price.summer1800'),
      image: summerProgram,
      category: 'intensive',
      icon: Sun,
      skills: translations.summer.skills,
      features: translations.summer.features
    },
    {
      id: 9,
      title: t('programs.mini.title'),
      titleEn: "Mini Curso Program",
      description: t('programs.mini.desc'),
      schedule: t('programs.schedule.monthly4'),
      duration: t('programs.duration.month1'),
      price: t('programs.price.mini3500'),
      image: miniCursoProgram,
      category: 'intensive',
      icon: BookOpen,
      skills: translations.mini.skills,
      features: translations.mini.features
    }
  ];

  const program = programs.find(p => p.id === parseInt(id || '0'));

  if (!program) {
    return (
      <div className="min-h-screen bg-background font-arabic">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-spanish-navy">{t('common.notFound')}</h1>
            <p className="text-xl text-muted-foreground mb-6">{t('common.programNotFound')}</p>
            <Button onClick={() => navigate('/')} className="bg-spanish-red hover:bg-spanish-red-dark">
              {t('common.backToHome')}
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToExam = () => {
    navigate('/', { state: { scrollToExam: true } });
  };

  const IconComponent = program.icon;

  // All images use consistent sizing with 16:9 aspect ratio
  const getImageClass = () => {
    return "w-full h-full object-cover";
  };

  const getImageContainerClass = () => {
    return "w-full h-64 lg:h-80 flex items-center justify-center";
  };

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 bg-gradient-to-br from-spanish-red to-spanish-red-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/20 hover:text-white"
            >
              {language === 'ar' ? (
                <>
                  <ArrowRight className="ml-2 h-4 w-4" />
                  {t('common.back')}
                </>
              ) : (
                <>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('common.back')}
                </>
              )}
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <IconComponent className="h-12 w-12" />
              </div>
            </div>
            <Badge variant="outline" className="text-white border-white/50 mb-4">
              {program.titleEn}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-display">
              {program.title}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Program Image */}
                <Card className="mb-8 overflow-hidden">
                  <div className={getImageContainerClass()}>
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className={getImageClass()}
                    />
                  </div>
                </Card>

                {/* Program Details */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-spanish-navy">
                      {t('programs.details.description')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Skills Acquired */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl text-spanish-navy">
                      {t('programs.details.skills')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {program.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Program Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-spanish-navy">
                      {t('programs.features')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-reverse space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Program Info Card */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl text-spanish-navy">
                      {t('programs.details.info')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-reverse space-x-3">
                      <Calendar className="h-5 w-5 text-spanish-red" />
                      <div>
                        <p className="font-medium">{t('programs.details.schedule')}</p>
                        <p className="text-sm text-muted-foreground">{program.schedule}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-reverse space-x-3">
                      <Clock className="h-5 w-5 text-spanish-red" />
                      <div>
                        <p className="font-medium">{t('programs.details.duration')}</p>
                        <p className="text-sm text-muted-foreground">{program.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-reverse space-x-3">
                      <span className="text-spanish-red font-bold text-lg">LE</span>
                      <div>
                        <p className="font-medium">{t('programs.details.price')}</p>
                        <p className="text-lg font-bold text-spanish-red">{program.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Call to Action */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <Button 
                      onClick={scrollToExam}
                      className="w-full bg-spanish-red hover:bg-spanish-red-dark text-white"
                      size="lg"
                    >
                      <BookOpen className="ml-2 h-5 w-5" />
                      {t('programs.details.bookExam')}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      {t('programs.details.contactNote')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;