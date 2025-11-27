import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

const ProgramsNew = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
        "Todas las formas y reglas de la gramática española",
        "Aplicación práctica de las reglas en la conversación",
        "Escribir y formar oraciones correctas",
        "Entendimiento correcto de la aplicación de los tiempos verbales"
      ],
      features: [
        "Explicación completa: Indicativo, Subjuntivo, Imperativo, Morfología",
        "Material especial para el nivel para la aplicación",
        "En cada clase: Explicación de tiempo + aplicación práctica en la conversación",
        "Costo: 1800 J"
      ]
    },
    cafe: {
      skills: [
        "Aprenderás expresiones cotidianas",
        "Tendrás confianza en el habla en situaciones cotidianas",
        "Te acostumbrarás a escuchar y entender el español natural",
        "Conocerás a tus compañeros y formarás parte de una comunidad que te apoye"
      ],
      features: [
        "Temas variados (cultura, viajes, películas, situaciones de la vida)",
        "Profesor (egipcio o nativo) para corregir errores y agregar expresiones naturales",
        "Costo: 150 J",
        "3 horas"
      ]
    },
    retos: {
      skills: [
        "Mejorar habilidades de conversación diariamente",
        "Revisar y aplicar reglas gramaticales directamente",
        "Fortalecer la escucha con contenido práctico",
        "Construir rutina de estudio y compromiso con los desafíos"
      ],
      features: [
        "Duración: 15 días o desafío de 30 días",
        "3 clases diarias (conversación – gramática – escucha)",
        "Duración de la clase: 60 minutos",
        "Sistema: día de clase / día de tareas",
        "Completar hasta 4 niveles de conversación",
        "30 desafíos diarios para cada estudiante",
        "Seguimiento especial y plan de estudio",
        "Desafío de 15 días: 4500 LE - Desafío de 30 días: 7000 LE"
      ]
    },
    semana: {
      skills: [
        "Práctica rápida e intensiva de las cuatro habilidades",
        "Identificar fortalezas y debilidades a través de pruebas",
        "Experiencia completa del idioma en poco tiempo"
      ],
      features: [
        "4 días consecutivos",
        "Cada día se enfoca en una habilidad: día de escucha - día de conversación - día de gramática - día de prueba",
        "Costo: 750 LE"
      ]
    },
    summer: {
      skills: [
        "Completar un nivel completo en una semana",
        "Práctica intensiva de todas las habilidades",
        "Inmersión completa en el idioma en un período corto"
      ],
      features: [
        "14 clases durante una semana",
        "Cada clase: 90 minutos",
        "2 clases diarias",
        "Costo: 1800 LE"
      ]
    },
    mini: {
      skills: [
        "Enfoque directo en tu objetivo (conversación/gramática/escucha)",
        "Contenido diseñado específicamente para ti",
        "Flexibilidad en horarios y temas"
      ],
      features: [
        "4 clases por mes",
        "Duración de la clase: 2 horas",
        "Tipos de mini curso: conversación - gramática - fonética y escucha",
        "Costo: 3500 LE"
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
      image: generalProgram,
      category: 'adults',
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
      skills: translations.speaking.skills,
      features: translations.speaking.features
    },
    {
      id: 3,
      title: t('programs.kids.title'),
      titleEn: "Kids Program",
      description: t('programs.kids.desc'),
      schedule: t('programs.kids.schedule'),
      duration: t('programs.kids.duration'),
      price: t('programs.kids.price'),
      image: kidsProgram,
      category: 'kids',
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
      skills: translations.cafe.skills,
      features: translations.cafe.features
    },
    {
      id: 6,
      title: "برنامج Retos (التحديات)",
      titleEn: "Los Retos Program",
      description: "برنامج قصير ومكثف مبني على فكرة التحديات اليومية. مصمم لتكسير حاجز الخوف من الكلام وتحقيق قفزة سريعة في مستواك.",
      schedule: "كل يوم 3 محاضرات",
      duration: "15 يوم أو تحدي 30 يوم",
      price: "4500 ج. (15 يوم) - 7000 ج. (30 يوم)",
      image: retosProgram,
      category: 'intensive',
      skills: translations.retos.skills,
      features: translations.retos.features
    },
    {
      id: 7,
      title: "برنامج Semana Práctica",
      titleEn: "Semana Práctica Program",
      description: "أسبوع عملي مكثف يركز على كل مهارة في يوم منفصل. مناسب للطلاب اللي عايزين تدريب قصير وفعال.",
      schedule: "4 أيام متواصلين",
      duration: "أسبوع واحد",
      price: "750 ج.",
      image: semanaProgram,
      category: 'intensive',
      skills: translations.semana.skills,
      features: translations.semana.features
    },
    {
      id: 8,
      title: "برنامج Summer Camp",
      titleEn: "Summer Camp Program",
      description: "معسكر صيفي مكثف بيسمحلك تخلص مستوى كامل في 7 أيام فقط.",
      schedule: "محاضرتين يوميًا",
      duration: "أسبوع واحد",
      price: "1800 ج.",
      image: summerProgram,
      category: 'intensive',
      skills: translations.summer.skills,
      features: translations.summer.features
    },
    {
      id: 9,
      title: "برنامج Mini Curso (برايفت)",
      titleEn: "Mini Curso Program",
      description: "برنامج مرن وخاص مناسب للطلاب اللي عايزين كورس صغير برايفت يركز على هدف محدد.",
      schedule: "4 محاضرات في الشهر",
      duration: "شهر واحد",
      price: "3500 ج.",
      image: miniCursoProgram,
      category: 'intensive',
      skills: translations.mini.skills,
      features: translations.mini.features
    }
  ];

  const categories = [
    { id: 'all', label: 'جميع البرامج', labelEn: 'All Programs' },
    { id: 'adults', label: t('programs.categories.adults') },
    { id: 'kids', label: t('programs.categories.kids') },
    { id: 'intensive', label: t('programs.categories.intensive') }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const openProgramDetails = (programId: number) => {
    navigate(`/program/${programId}`);
  };

  // All images should use consistent sizing with 16:9 aspect ratio
  const getImageClass = () => {
    return "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110";
  };

  return (
    <section id="programs" className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-spanish-red mb-4 font-display">
            {t('programs.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                ${selectedCategory === category.id 
                  ? 'bg-spanish-red hover:bg-spanish-red-dark text-white' 
                  : 'border-spanish-red text-spanish-red hover:bg-spanish-red hover:text-white'
                }
                transition-smooth
              `}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <Card 
              key={program.id}
              className="relative overflow-hidden card-hover group cursor-pointer h-full flex flex-col"
              onClick={() => openProgramDetails(program.id)}
            >
              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className={getImageClass()}
                />
                <div className="absolute inset-0 bg-spanish-navy/20 group-hover:bg-spanish-navy/30 transition-colors"></div>
                
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-white/90 text-spanish-navy"
                >
                  {program.titleEn}
                </Badge>
                
                {/* View Details Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    size="sm"
                    className="bg-white text-spanish-navy hover:bg-spanish-yellow hover:text-spanish-navy font-bold"
                  >
                    <ExternalLink className="h-4 w-4 ml-2" />
                    {t('programs.moreDetails')}
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-4 flex-grow">
                <CardTitle className="text-lg font-bold text-spanish-navy leading-tight mb-2">
                  {program.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Action Buttons */}
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    const element = document.getElementById('exam');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  size="sm"
                  className="w-full bg-spanish-red hover:bg-spanish-red-dark text-white"
                >
                  <BookOpen className="h-4 w-4 ml-1" />
                  {t('programs.bookExam')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4 text-sm">
            {t('programs.unsure')}
          </p>
          <Button 
            onClick={() => {
              const element = document.getElementById('exam');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline" 
            size="sm"
            className="border-spanish-navy text-spanish-navy hover:bg-spanish-navy hover:text-white"
          >
            {t('programs.test')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsNew;