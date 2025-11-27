import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, BookOpen, MessageCircle, Zap, Target, Coffee, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Programs = () => {
  const { t, language } = useLanguage();
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

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
        "Aprenderás expresiones coloquiales",
        "Ganarás confianza al hablar en situaciones diarias",
        "Te acostumbrarás a escuchar y entender español natural",
        "Conocerás estudiantes como tú y formarás una comunidad que te apoye"
      ],
      features: [
        "Temas variados (cultura, viajes, películas, situaciones de la vida real)",
        "Profesor (egipcio o nativo) para corregir errores y agregar expresiones naturales",
        "Costo: 150 LE",
        "3 horas"
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
        "Todos los tiempos verbales y reglas gramaticales del español",
        "Aplicación práctica de la gramática en conversación",
        "Escribir y formar oraciones correctas",
        "Comprensión correcta del uso de diferentes tiempos verbales"
      ],
      features: [
        "Explicación completa: Indicativo, Subjuntivo, Imperativo, Morfología",
        "Material especial del nivel para aplicación",
        "En cada clase: explicación de tiempo + aplicación práctica en conversación",
        "Costo: 1800 LE"
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
  };

  const programs = [
    {
      id: 1,
      title: t('programs.general.title'),
      titleEn: "General Program",
      description: t('programs.general.desc'),
      schedule: t('programs.general.schedule'),
      duration: t('programs.general.duration'),
      price: t('programs.general.price'),
      icon: BookOpen,
      skills: translations.general.skills,
      features: translations.general.features,
      color: "spanish-red",
    },
    {
      id: 2,
      title: t('programs.speaking.title'),
      titleEn: "Speaking Program",
      description: t('programs.speaking.desc'),
      schedule: t('programs.speaking.schedule'),
      duration: t('programs.speaking.duration'),
      price: t('programs.speaking.price'),
      icon: MessageCircle,
      skills: translations.speaking.skills,
      features: translations.speaking.features,
      color: "spanish-yellow",
    },
    {
      id: 3,
      title: t('programs.kids.title'),
      titleEn: "Kids Program",
      description: t('programs.kids.desc'),
      schedule: t('programs.kids.schedule'),
      duration: t('programs.kids.duration'),
      price: t('programs.kids.price'),
      icon: Users,
      skills: translations.kids.skills,
      color: "spanish-navy",
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
      icon: Target,
      skills: translations.grammar.skills,
      color: "spanish-red",
      features: translations.grammar.features
    },
    {
      id: 5,
      title: t('programs.summer.title'),
      titleEn: "Summer Camp Program",
      description: t('programs.summer.desc'),
      schedule: t('programs.schedule.daily2'),
      duration: t('programs.duration.week1Alt'),
      price: t('programs.price.summer1800'),
      icon: Sun,
      skills: translations.summer.skills,
      color: "spanish-navy",
      features: translations.summer.features
    },
    {
      id: 6,
      title: t('programs.mini.title'),
      titleEn: "Mini Curso Program",
      description: t('programs.mini.desc'),
      schedule: t('programs.schedule.monthly4'),
      duration: t('programs.duration.month1'),
      price: t('programs.price.mini3500'),
      icon: BookOpen,
      skills: translations.mini.skills,
      color: "spanish-red",
      features: translations.mini.features
    },
    {
      id: 7,
      title: t('programs.cafe.title'),
      titleEn: "Café Day",
      description: t('programs.cafe.desc'),
      schedule: t('programs.cafe.schedule'),
      duration: t('programs.cafe.duration'),
      price: t('programs.cafe.price'),
      icon: Coffee,
      skills: translations.cafe.skills,
      color: "spanish-yellow",
      features: translations.cafe.features
    },
    {
      id: 8,
      title: t('programs.retos.title'),
      titleEn: "Los Retos Program",
      description: t('programs.retos.desc'),
      schedule: t('programs.schedule.daily3'),
      duration: t('programs.duration.retos15'),
      price: t('programs.price.retos15'),
      icon: Zap,
      skills: translations.retos.skills,
      color: "spanish-yellow",
      features: translations.retos.features
    },
    {
      id: 9,
      title: t('programs.semana.title'),
      titleEn: "Semana Práctica Program",
      description: t('programs.semana.desc'),
      schedule: t('programs.schedule.consecutive4'),
      duration: t('programs.duration.week1Alt'),
      price: t('programs.price.semana750'),
      icon: Target,
      skills: translations.semana.skills,
      color: "spanish-red",
      features: translations.semana.features
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'spanish-red':
        return 'bg-spanish-red-light border-spanish-red text-spanish-red';
      case 'spanish-yellow':
        return 'bg-spanish-yellow-light border-spanish-yellow text-spanish-navy';
      case 'spanish-navy':
        return 'bg-spanish-navy-light border-spanish-navy text-spanish-navy';
      default:
        return 'bg-spanish-red-light border-spanish-red text-spanish-red';
    }
  };

  return (
    <section id="programs" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spanish-red mb-6 font-display">
            {t('programs.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card 
              key={program.id}
              className={`relative overflow-hidden card-hover cursor-pointer transition-smooth ${
                selectedProgram === program.id ? 'ring-2 ring-spanish-red shadow-spanish' : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${getColorClasses(program.color)}`}>
                    <program.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {program.titleEn}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg font-bold text-spanish-navy leading-tight">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {program.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Basic Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{program.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-reverse space-x-2">
                    <span className="text-muted-foreground font-bold">LE</span>
                    <span className="font-bold text-spanish-red">{program.price}</span>
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedProgram === program.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3">
                    <h4 className="font-bold text-spanish-navy">{t('programs.features')}</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-reverse space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-spanish-yellow rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const element = document.getElementById('exam');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full bg-spanish-red hover:bg-spanish-red-dark text-white mt-4"
                      size="sm"
                    >
                      {t('programs.register')}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t('programs.unsure')}
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('exam');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline" 
            className="border-spanish-navy text-spanish-navy hover:bg-spanish-navy hover:text-white"
          >
            {t('programs.test')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;