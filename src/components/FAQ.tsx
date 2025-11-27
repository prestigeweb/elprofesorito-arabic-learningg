import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const { t, language } = useLanguage();
  
  // Get FAQ data directly from translations
  const faqData = language === 'ar' 
    ? [
        {
          question: "كيف تختلف برامج El Profesorito عن أي كورسات إسباني تانية؟",
          answer: "برامجنا مبنية على التفاعل الحقيقي، المحادثات العملية، تحديات أسبوعية، وانضباط في المذاكرة. وكمان بنقدّم دعم مستمر ومتابعة فردية لكل طالب."
        },
        {
          question: "هل في كورسات للمبتدئين؟",
          answer: "أكيد، برنامج الـ General بيبدأ من المستوى A1 وبيكمل معاك تدريجيًا لحد B2."
        },
        {
          question: "الكورسات أونلاين ولا بالحضور؟",
          answer: "الكورسات متوفرة بنظامين:\n✅ أونلاين لايف من خلال Zoom\n✅ أوفلاين (محاضرات بالحضور) في مقر El Profesorito"
        },
        {
          question: "إزاي أعرف أنهي برنامج مناسب لي؟",
          answer: "فيه اختبار تحديد مستوى مجاني، وفريق الدعم بيساعدك تختار الأنسب حسب مستواك وهدفك."
        },
        {
          question: "هل في مدرسين ناطقين بالإسبانية (Natives)؟",
          answer: "أيوه، خصوصًا في برامج المحادثة والتحدي، بيكون فيه تفاعل مباشر مع ناطقين باللغة."
        },
        {
          question: "إزاي أحجز برنامج؟",
          answer: "ادخل على صفحة \"البرامج\"، أو اضغط على زر \"احجز التحدي\"، واملأ البيانات، وفريقنا هيتواصل معاك فورًا."
        },
        {
          question: "إيه طرق الدفع المتاحة؟",
          answer: "تقدر تدفع عن طريق:\n– انستاباي\n– فيزا/ماستر كارد\n– أو كاش في حالة الحضور في مقرنا"
        }
      ]
    : [
        {
          question: "¿Cómo se diferencian los programas de El Profesorito de otros cursos de español?",
          answer: "Nuestros programas se basan en interacción real, conversaciones prácticas, desafíos semanales y disciplina en el estudio. También ofrecemos apoyo continuo y seguimiento individual para cada estudiante."
        },
        {
          question: "¿Hay cursos para principiantes?",
          answer: "¡Por supuesto! El programa General comienza desde el nivel A1 y continúa contigo gradualmente hasta B2."
        },
        {
          question: "¿Los cursos son online o presenciales?",
          answer: "Los cursos están disponibles en dos modalidades:\n✅ Online en vivo a través de Zoom\n✅ Presencial (clases en persona) en la sede de El Profesorito"
        },
        {
          question: "¿Cómo sé qué programa es adecuado para mí?",
          answer: "Hay una prueba de nivel gratuita, y el equipo de apoyo te ayuda a elegir el más adecuado según tu nivel y objetivos."
        },
        {
          question: "¿Hay profesores nativos de español?",
          answer: "¡Sí! Especialmente en los programas de conversación y desafío, hay interacción directa con hablantes nativos."
        },
        {
          question: "¿Cómo reservo un programa?",
          answer: "Ve a la página \"Programas\", o haz clic en el botón \"Reservar Desafío\", completa los datos y nuestro equipo se pondrá en contacto contigo inmediatamente."
        },
        {
          question: "¿Qué métodos de pago están disponibles?",
          answer: "Puedes pagar a través de:\n– InstaPay\n– Visa/Mastercard\n– O efectivo en caso de asistir a nuestra sede"
        }
      ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spanish-red mb-6 font-display">
            {t('faq.title')}
          </h2>
          <div className="w-20 h-1 bg-spanish-yellow mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq: any, index: number) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-2xl shadow-sm hover:shadow-spanish transition-smooth card-hover"
              >
                <AccordionTrigger className="px-6 py-4 text-right font-bold text-spanish-navy hover:text-spanish-red transition-smooth">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-spanish-yellow-light rounded-full flex items-center justify-center group-hover:bg-spanish-yellow transition-smooth">
                      <HelpCircle className="h-4 w-4 text-spanish-red" />
                    </div>
                    <span className="text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 