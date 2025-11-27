import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Common
    common: {
      back: "العودة",
      notFound: "غير موجود",
      programNotFound: "البرنامج المطلوب غير موجود",
      backToHome: "العودة للرئيسية",
      pageNotFound: "404",
      pageNotFoundMessage: "عذراً! الصفحة غير موجودة",
      returnToHome: "العودة للرئيسية"
    },
    // Navigation
    nav: {
      home: "الرئيسية",
      about: "عن البروفيسوريتو",
      features: "المميزات",
      programs: "البرامج",
      exam: "حجز الاختبار",
      faq: "الأسئلة الشائعة",
      contact: "التواصل",
      whatsapp: "واتساب",
      register: "سجل الآن"
    },
    // Brand
    brand: {
      spanishHouse: "البيت الإسباني"
    },
    // Hero Section
    hero: {
      title: "البروفيسوريتو - بيتك الإسباني في مصر",
      subtitle: "تعلم الإسبانية بفعالية مع أساتذة أصليين ومعتمدين",
      greeting: "¡Hola!",
      welcome: "مرحباً بك!",
      welcomeText: "أهلاً بك في البروفيسوريتو",
      tagline: "تعلم إسباني بشكل عملي مش أكاديمي، بطرق حديثة تخليك تتكلم من أول يوم.",
      description: "البروفيسوريتو هو أكبر مركز متخصص في برامج محادثات اللغة الإسبانية في مصر، بنوفرلك اكثر من 8 برامج مختلفه",
      features: "تحدي المستوى + نظام مخصص + متابعة شخصية",
      examButton: "احجز اختبار تحديد المستوى",
      programsButton: "استكشف البرامج",
      letsgo: "يلا نبدأ!",
      cta: "ابدأ الآن",
      stats: {
        students: "طالب متخرج",
        programs: "برامج مختلفة",
        success: "معدل النجاح"
      },
      video: {
        comingSoon: "فيديو قريباً",
        promotionalVideo: "سيتم إضافة الفيديو الترويجي هنا",
        verticalVideo: "فيديو عمودي",
        aspectRatio: "نسبة 9:16"
      }
    },
    // About Section
    about: {
      title: "من نحن؟",
      subtitle: "رحلتنا في تعليم الإسبانية",
      mission: "مهمتنا هي جعل تعلم الإسبانية تجربة ممتعة وفعالة لكل طالب مصري",
      content: "البروفيسوريتو هو أول مركز متخصص لتعليم اللغة الإسبانية في مصر. نحن نؤمن بأن تعلم اللغة يجب أن يكون رحلة ممتعة ومثمرة. مع أساتذة أصليين وخبرة تزيد عن 5 سنوات، نقدم برامج متنوعة تناسب جميع المستويات والأعمار.",
      mainText: "إحنا مش مجرد كورس إسباني عادي...",
      subText: "إحنا مجتمع كبير بيجمع أي حد عنده حلم يتعلم لغة جديدة ويفتح لنفسه فرص أكتر.",
      firstStep: "في البروفيسوريتو أول حاجة بنعملها معاك هي",
      levelChallenge: "تحدي المستوى ✨",
      explanation: "من أول يوم بدأنا كان هدفنا نوفر تجربة مختلفة:",
      notTraditional: "",
      whyDifferent: "ليه إحنا مختلفين؟",
      successGoal: "نجاحك هو هدفنا!",
      successSubtext: "نجاحك هو هدفنا الأول",
      levels: {
        beginner: "مستوى مبتدئ",
        intermediate: "مستوى متوسط",
        advanced: "مستوى متقدم"
      },
      features: {
        customSystem: {
          title: "نظام مخصص",
          desc: "لكل طالب حسب مستواه"
        },
        practical: {
          title: "تطبيق عملي",
          desc: "80% من وقت المحاضرة"
        },
        personalFollow: {
          title: "متابعة شخصية",
          desc: "مرشد مخصص لكل طالب"
        },
        guaranteedResults: {
          title: "نتائج مضمونة",
          desc: "تقدم ملحوظ في 4 أسابيع"
        }
      },
      why: "لماذا البروفيسوريتو؟",
      reasons: [
        "أساتذة أصليون ومعتمدون من إسبانيا",
        "مناهج حديثة ومبتكرة",
        "بيئة تعليمية محفزة وداعمة",
        "شهادات معتمدة دولياً",
        "متابعة شخصية لكل طالب"
      ],
      visual: {
        studySystem: "نظام مذاكرة + ملف متابعه",
        mentorFollow: "Mentor بيتابعك مخصوص في البيت",
        customSystems: "أنظمه مخصصة لهدفك",
        startJourney: "ابدأ رحلتك معنا اليوم"
      }
    },
    // Mission Statement
    mission: {
      title: "رسالتنا",
      message: "إننا نخلي تعلم الإسبانية ممتع وسهل، ونخلي كل طالب يحس إنه مش ماشي في الطريق لوحده… بل مع فريق كامل بيسنده ويوجهه.",
      cta: "انضم لمجتمع البروفيسوريتو وابدأ رحلتك مع الإسباني النهارده!"
    },
    // Features Section
    features: {
      title: "ما يميزنا عن الآخرين",
      subtitle: "نظام تعليمي شامل ومتطور يضمن لك النجاح",

      systems: {
        label:" برامج تناسب هدف كل طالب",
        placeholder: "الكورس معمول مخصوص لهدفك أنت",
      },

      practical:
      {
        label : " %20 شرح %80 تطبيق",
        placeholder :  "تطبيق عملي تضمن إنك تتكلم مش بس تحفظ",

      } ,
      skills: {
        label:"مواعيد مرنة",
        placeholder: "اختر المواعيد اللي تناسب جدولك"
      },
      
      mentor: {
      label :" محاضرات أونلاين وأوفلاين",
      placeholder: "ادرس بالطريقة اللي تريحك.",
      },

      study: {
      label: "متابعة يومية بعد السيشن",
      placeholder: "إحنا معاك طول الأسبوع مش في الكلاس بس.",
      },
    
      coaching: {
      label: "محاضرين على أعلى مستوى (مصريين وأجانب)",
      placeholder: "أفضل خبرة محلية ودولية في مكان واحد"
      },
    },
    
    // Programs Section
    programs: {
      title: "برامجنا التعليمية",
      subtitle: "اختر البرنامج المناسب لمستواك وأهدافك",
      moreDetails: "المزيد من التفاصيل",
      addToCart: "أضف للسلة",
      bookExam: "حجز اختبار",
      register: "سجل الآن",
      features: "محتوى البرنامج",
      unsure: "غير متأكد من مستواك؟",
      test: "احجز اختبار تحديد المستوى مجاناً",
      details: {
        description: "وصف البرنامج",
        skills: "إيه اللي هتدرسه وتتعلمه؟",
        info: "معلومات البرنامج",
        schedule: "الجدولة",
        duration: "المدة",
        price: "السعر",
        bookExam: "احجز اختبار تحديد المستوى",
        addToCart: "أضف للسلة",
        contactNote: "سنتواصل معك خلال 24 ساعة لتأكيد التفاصيل"
      },
      schedule: {
        weekly3: "3 محاضرات أسبوعياً",
        weekly2: "محاضرتان أسبوعياً",
        weeklyChallenge: "تحدي أسبوعي",
        daily: "يومياً",
        flexible: "مرن",
        daily2: "محاضرتين يوميًا",
        daily3: "كل يوم 3 محاضرات",
        consecutive4: "4 أيام متواصلين",
        monthly4: "4 محاضرات في الشهر"
      },
      duration: {
        months3: "3 شهور",
        weeks6: "6 أسابيع",
        open: "مفتوح",
        week1: "أسبوع واحد",
        weeks4: "4 أسابيع",
        week1Alt: "أسبوع واحد",
        month1: "شهر واحد",
        retos15: "15 يوم أو تحدي 30 يوم"
      },
      price: {
        monthly1200: "1200 جنيه شهرياً",
        monthly800: "800 جنيه شهرياً",
        monthly500: "500 جنيه شهرياً",
        monthly600: "600 جنيه شهرياً",
        weekly300: "300 جنيه أسبوعياً",
        summer1800: "1800 ج.",
        mini3500: "3500 ج.",
        retos15: "4500 ج. (15 يوم) - 7000 ج. (30 يوم)",
        semana750: "750 ج."
      },
      programFeatures: {
        freeLevel: "تحديد مستوى مجاني",
        materials: "مواد تعليمية شاملة",
        weeklyFollow: "متابعة أسبوعية",
        certificate: "شهادة معتمدة",
        intensiveConversation: "جلسات محادثة مكثفة",
        pronunciationCorrection: "تصحيح النطق",
        lifeSituations: "مواقف حياتية",
        speakingConfidence: "ثقة في التحدث",
        interactiveMethod: "منهج تفاعلي مخصص للأطفال",
        regularTracking: "متابعة دورية لمستوى كل طفل",
        funActivities: "أنشطة وألعاب تعليمية ممتعة",
        funSessions: "8 محاضرات ممتعة",
        simplifiedGrammar: "قواعد مبسطة",
        immediateApplication: "تطبيق فوري",
        realExamples: "أمثلة حياتية",
        periodicTests: "اختبارات دورية",
        relaxedEnvironment: "بيئة مريحة وودية",
        realConversations: "محادثات حقيقية",
        culturalExchange: "تبادل ثقافي",
        networkingOpportunity: "فرصة للتواصل"
      },
      categories: {
        adults: "برامج البالغين",
        kids: "برامج الأطفال", 
        intensive: "برامج مكثفة"
      },
      general: {
        title: "برنامج General",
        desc: "البرنامج العادي مصمم لأي طالب عايز يتعلم الإسباني خطوة بخطوة من البداية لحد المستويات المتقدمة. مناسب للطلاب اللي عايزين دراسة شاملة تغطي كل المهارات.",
        schedule: "محاضرتين في الأسبوع",
        duration: "8 محاضرات في الشهر",
        price: "1200 جنيه شهرياً",
        features: [
          "مدة المحاضرة: ساعتين",
          "يشمل جميع مهارات اللغة (استماع – محادثات – قراءة – كتابة)",
          "مادة تفاعلية خاصة بالمركز للتطبيق العملي",
          "محتوي كل مستوي كامل"
        ],
        skills: [
          "هتتعلم أساسيات اللغة (مفردات – قواعد – تراكيب)",
          "تحسين الاستماع والمحادثة بشكل تدريجي",
          "قراءة نصوص مناسبة للمستوى وتنمية الفهم",
          "كتابة جمل ونصوص بسيطة ثم متقدمة"
        ]
      },
      speaking: {
        title: " برنامج Speaking Program",
        desc: "برنامج محادثات مكثف بيعتمد على التركيز علي مهارة المحادثات مع مدرسين مصريين وNatives، هدفه إنك تتكلم بطلاقة في أسرع وقت.",
        schedule: "3 محاضرات في الأسبوع",
        duration: "13 محاضرة في الشهر",
        price: "3000 جنيه للمستوى",
        features: [
          "مدة المحاضرة: 3 ساعات",
          "بنخلص فيه 3 مستويات محادثة في مدة قصيرة",
          "كل طالب معاه Mentor يتابعه يوميًا ويرسل له مهام",
          "كل طالب عنده 30 تحدي يوميًا يطبّق من خلالهم"
        ],
        skills: [
          "تطوير المحادثة اليومية والمهنية",
          "تحسين الطلاقة والنطق",
          "استخدام المفردات في مواقف حياتية حقيقية",
          "التفاعل مع Natives عشان تاخد تجربة كاملة",
          "التزام يومي بالـTasks والتحديات يخليك متعود على التفكير بالإسباني",
          "Pragmática ودا علم في اللغة بيعلمك تتكلم زي ال Nativo"
        ]
      },
      kids: {
        title: "برنامج Cursos de Niños",
        desc: "برنامج تفاعلي للأطفال مصمم بطريقة تناسب أعمارهم يخليهم يتعلموا الإسباني وهم بيلعبوا ويستمتعوا.",
        schedule: "محاضرات قصيرة وممتعة",
        duration: "حسب الفئة العمرية",
        price: "3000 جنيه",
        features: [
          "محاضرات مليانة أنشطة: أغاني، قصص، ألعاب، رسومات",
          "تقسيم الأطفال حسب الفئة العمرية عشان كل مجموعة تاخد المناسب ليها",
          "التركيز على تعليم مفردات أساسية وجمل قصيرة عملية",
          "محاضرات قصيرة وممتعة تحافظ على تركيز الطفل"
        ],
        skills: [
          "كلمات وجمل للتواصل البسيط اليومي",
          "تحسين النطق بطريقة سهلة ومناسبة للطفل",
          "تنمية مهارات الاستماع والتفاعل",
          "حب اللغة والتعود على استخدامها من بدري"
        ]
      },
      grammar: {
        title: "برنامج Mega Grammar",
        desc: "برنامج متخصص في القواعد، مناسب لأي طالب عايز يركز على الأزمنة والتراكيب بشكل كامل.",
        schedule: "10 محاضرات",
        duration: "مدة المحاضرة: ساعتين",
        price: "1800 جنيه",
        features: [
          "شرح شامل: Indicativo, Subjuntivo, Imperativo, Morfología",
          "مادة خاصة بالمستوى للتطبيق",
          "في كل محاضرة: شرح زمن + تطبيق عملي في المحادثة",
          "التكلفة: 1800 ج"
        ],
        skills: [
          "جميع أزمنة وقواعد اللغة الإسبانية",
          "التطبيق العملي للقواعد في المحادثة",
          "كتابة وتكوين جمل صحيحة",
          "الفهم الصحيح لاستخدام الأزمنة المختلفة"
        ]
      },
      cafe: {
        title: "يوم الكافيه",
        desc: "جلسة محادثة شهرية في بيئة مريحة وودية",
        schedule: "محاضرة محادثة جماعية غير تقليدية",
        duration: "3 ساعات",
        price: "150 جنيه",
        features: [
          "موضوعات متنوعة (ثقافة، سفر، أفلام، مواقف حياتية)",
          "مدرس (مصري أو Native) لتصحيح الأخطاء وإضافة تعبيرات طبيعية",
          "التكلفة: 150 ج",
          "3 ساعات"
        ],
        skills: [
          "هتتعلم تعبيرات عامية",
          "هتاخد ثقة في الكلام في مواقف يومية",
          "هتتعود تسمع وتفهم الإسباني الطبيعي",
          "هتتعرف على طلاب زيك وتكون مجتمع بيدعمك"
        ]
      },
            retos: {
        title: "برنامج Retos (التحديات)",
        desc: "برنامج قصير ومكثف مبني على فكرة التحديات اليومية. مصمم لتكسير حاجز الخوف من الكلام وتحقيق قفزة سريعة في مستواك."
      },
      semana: {
        title: "برنامج Semana Práctica",
        desc: "أسبوع عملي مكثف يركز على كل مهارة في يوم منفصل. مناسب للطلاب اللي عايزين تدريب قصير وفعال."
      },
      summer: {
        title: "برنامج Summer Camp",
        desc: "معسكر صيفي مكثف بيسمحلك تخلص مستوى كامل في 7 أيام فقط."
      },
      mini: {
        title: "برنامج Mini Curso (برايفت)",
        desc: "برنامج مرن وخاص مناسب للطلاب اللي عايزين كورس صغير برايفت يركز على هدف محدد."
      },
      skills: {
        reading: "قراءة",
        writing: "كتابة", 
        listening: "استماع",
        speaking: "محادثة",
        grammar: "قواعد",
        conversation: "محادثة حرة",
        pronunciation: "نطق",
        vocabulary: "مفردات",
        interactive: "منهج تفاعلي",
        games: "ألعاب تعليمية",
        activities: "أنشطة ممتعة",
        application: "تطبيق"
      }
    },
    // Exam Registration
    exam: {
      title: "اختبار تحديد المستوى",
      subtitle: "احجز اختبارك المجاني لتحديد مستواك في الإسبانية",
      description: "احجز اختبارك المجاني لتحديد مستواك في الإسبانية والحصول على توصيات شخصية",
      success: {
        title: "تم التسجيل بنجاح! ✨",
        description: "سنتواصل معك خلال 24 ساعة لتحديد موعد اختبار تحديد المستوى"
      },

      why: {
        title: "لماذا الاختبار؟",
        level:{
        label:"تحديد المستوى",
        placeholder: "تحديد دقيق لمستواك الحالي في اللغة الإسبانية",
        },
        custom: {
        label:"برنامج مخصص",
        placeholder: "الحصول على توصيات شخصية للبرنامج الأنسب لك",
        },
        save:{
          label: "توفير الوقت والمال",
          placeholder:"تجنب البدء في مستوى غير مناسب واستثمار وقتك بذكاء"

        } 
      },
      how: {
        title: "كيف يتم الاختبار؟",
        duration: "المدة: 30-45 دقيقة",
        type: "النوع: اختبار شفهي وكتابي",
        evaluation: "التقييم: تقييم فوري لمهاراتك",
        recommendations: "التوصيات: نصائح شخصية للبرنامج المناسب"
      },
      form: {
        title: "احجز اختبار تحديد المستوى",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        preferredTime: "الوقت المفضل",
        experienceLevel: "مستوى الخبرة",
        goals: "أهدافك من تعلم الإسبانية",
        time: {
          morning: "صباحاً (9 ص - 12 ظ)",
          afternoon: "بعد الظهر (12 ظ - 6 م)",
          evening: "مساءً (6 م - 9 م)",
          weekend: "نهاية الأسبوع"
        },
        experience: {
          none: "لا توجد خبرة سابقة",
          basic: "A1-A2",
          intermediate: "B1-B2",
          advanced: "C1-C2"
        },
        submit: "احجز الاختبار",
        note: "سنتواصل معك خلال 24 ساعة لتأكيد موعد الاختبار",
        placeholders: {
          name: "اكتب اسمك الكامل",
          phone: "01xxxxxxxxx",
          email: "example@email.com",
          timeSelect: "اختر الوقت المناسب",
          levelSelect: "اختر مستواك",
          goals: "مثلاً: سفر، شغل، دراسة، حب للغة..."
        }
      },
      online: {
        title: "اختبار أونلاين قريباً!",
        desc: "قريباً ستتمكن من إجراء اختبار تحديد المستوى أونلاين من منزلك",
        button: "قريباً"
      },
      benefits: [
        "اختبار مجاني تماماً",
        "تحديد مستوى دقيق",
        "توصيات شخصية للبرنامج المناسب",
        "جلسة استشارة مجانية"
      ]
    },
    // Contact Section
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا للإجابة على جميع استفساراتك",
      ways: {
        title: "طرق التواصل",
        call: "اتصل بنا",

      whatsapp: {
          label : "واتساب",
          placeholder : "تواصل معنا عبر واتساب",
        } ,
       
        email: "البريد الإلكتروني",
        address: {
          label : "العنوان",
          placeholder : "122 Al Tahrir St, Dokki, Giza" ,
        } ,
      },
      hours: {
        title: "ساعات العمل",
        weekdays: {
          days : "السبت - الخميس",
          time : "10 صباحاً - 10 مساءً",
        } ,
        friday: {
          day : "الجمعة",
          time : "10 صباحاً - 10 مساءً" ,
        } ,
      },
      quick: {
        title: "تواصل سريع",
        whatsapp: "واتساب",
        call: "اتصل بنا"
      },
      form: {
        title: "أرسل رسالة",
        name:{
          label:"الاسم",
          placeholder:"اكتب اسمك",
        } ,
        email:{
          label:"البريد الإلكتروني",
          placeholder: "example@email.com",
        } ,
        phone: {
          label: "رقم الهاتف",
          placeholder:"01xxxxxxxxx", 
        } ,
       
        message: {
          label: "الرسالة",
          placeholder: "اكتب رسالتك هنا...",
        }, 
       
        submit: "إرسال الرسالة",
        success: {
          title: "تم إرسال رسالتك بنجاح! 📧",
          desc: "سنرد عليك في أقرب وقت ممكن"
        }
      },
      map: {
        title: "موقعنا على الخريطة"
      },
      info: {
        address: "العنوان",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        hours: "ساعات العمل"
      },
      addressText: "122 Al Tahrir St, Dokki, Giza",
      hoursText: "من 10 صباحاً إلى 10 مساءً"
    },
    // Footer
    footer: {
      about: "البروفيسوريتو هو مركزك المتخصص لتعليم اللغة الإسبانية في مصر مع أساتذة أصليين.",
      quickLinks: "روابط سريعة",
      social: {
        title: "تابعنا"
      },
      rights: "جميع الحقوق محفوظة",
      links: {
        quick: "روابط سريعة"
      },
      programs: {
        title: "البرامج"
      },
      contact: {
        title: "التواصل",
        whatsapp: "واتساب",
        register: "سجل الآن"
      },
      legal: {
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام"
      },
      description: "البروفيسوريتو هو مركزك المتخصص لتعليم اللغة الإسبانية في مصر مع أساتذة أصليين."
    },
    // Testimonials
    testimonials: {
      title: "آراء طلابنا",
      subtitle: "اكتشف تجارب طلابنا المميزة معنا",
      previous: "التعليق السابق",
      next: "التعليق التالي",
      goToSlide: "اذهب للتعليق",
      reviews: [
        {
          name: "طالب",
          role: "طالب",
          content: "مساء النور \n\nبصراحه الكورس تحفه و مفيد جدا و طريقه التدريس ممتازه و الinstructors ممتازين \n\nبجد شكرا اوي علي كل حاجه عملتوها عشنا",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "انتو مكان محترم و كويس جدا بصراحه",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "و سنيورة الاء شخصيه جميله جدا",
          image: "👤"
        },
        // {
        //   name: "طالب",
        //   role: "طالب",
        //   content: "نظام الكورس كان تحفه كنت قبل م ابدا متاكده اني هخلص ونا مستوايا ف حته تانيه والحمد لله حصل فعلا وال instructors مفيش زيهم ومشوفتش حد زيهم قبل كده سينيور علاء حد مميز ف كل حاجه وبيشرح بطريقه عمري م شوفتها ف اي حاجه ف حقيقي مبسوطه اني طالبه من طلاب بروفسوريتوا كنت الاول خايفه بس بعد ما عملت تحديد مستوي بس اتاكد أن ده هيكون مكاني وهكمل فيه وأنه هيساعدني والحمد لله بعد فضل ربنا اولا مساعده سينيور علاء ليا ومساعده كل ناس ال ف بروفسوريتوا قدرت اتحسن وبقي عندي ثقه ف نفسي اكتر من الاول❤️  ولله لو هقول رائي بكل امانه ف هفضل اتكلم من هنا لبعد بكره بجد😂❤️❤️",
        //   image: "👤"
        // },
        {
          name: "طالب",
          role: "طالب",
          content: "كورس حلو جدا والله و مفيد اللي هيخليني اتأخر بس في اشتراك المستوي التاني الإمتحانات بتاعت الجامعة",
          image: "👤"
        },
        // {
        //   name: "طالب",
        //   role: "طالب",
        //   content: "بجد سعيده جدا المكان نضيف و مريح\n\nالكلاس بتاعه المحادثه تحفه و مفيده فكره اني ٣ ساعات اتكلم و اسمع أسباني فقط و الانستراكتورا بتساعدني افتكر عايزه اقول ايه و اعصر دماغي \n\nكلاس الجراماتيكا بردو مهمه و مفيده و الشرح عملي و فيه اكتفيتيز بتتعمل بتساعد ان الشرح يثبت \n\nكل دا حقيقي من بعد ٤ كلاسس بس ساعدني حتي في شغل افهم الكستمرز احسن و أساعد احسن و ابقي مميزه.",
        //   image: "👤"
        // },
        {
          name: "طالب",
          role: "طالب",
          content: "كله زي الفل الصراحة سواء كشرح او نظام و ملاحظة فرق في مستوايا واضح",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "الكورس كان حلو و لذيذ و استفدت و instructors  كانو شاطرين جدا",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "بصراحة الكورس مفيد جدًا وكل ال instructors شطرين 🥰🥰",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "الحمد لله \n\nالكورس كويس وكل اللي موجودين كويسين جدا وكلنا مبسوطين من الكورس",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "حاجة فخمة فخمة فخمة فخامة الفخامة بجد استفادت كتير والنظام تحفة وكل حاجة تحفة احلى ناس اخدت معاها كورس بجد",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "الكورس جميل و ممتاز و انا ذات نفسي شايف اني اتحسنت عن الاول بسبب الكورس",
          image: "👤"
        },
        // {
        //   name: "طالب",
        //   role: "طالب",
        //   content: "لا طبعا الكورس جميل ومفيد جداً بذات نظام ال Retos دا اللي فرق معايا بشكل كبير وطبعا سنيور علاء وسنيوريتا آلاء بيتابعوا دايما وبيشرحوا بنظام وبيعملوا تحديد مستوي دقيق وفعلاً بيقول اي الأخطاء الصح والحاجات اللي الواحد يشتغل عليها عشان يتحسن بسرعة",
        //   image: "👤"
        // },
        {
          name: "طالب",
          role: "طالب",
          content: "مساء الخير\n\nبصراحه كويسين جدا استفدنا كتير والانستراكتورز كلهم ممتازين وفي شهر الحمدلله ساعدونا نتقدم كتير ♥️♥️",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "لا بصراحه كل حاجه تحفه كالعاده يعني و الانستراكتورز تحفه طبعا ♥️♥️",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "احسن مكان كدا كدا والناس كويسة جدا ما شاء الله",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "بصراحه المكان جميل فعلا والسينيور بيتعب معانا جدا وانا مبسوط بصراحه باني جزء من العيله دي وباذن الله مع بعض لحد ما اوصل c1 ❤️😍",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "هما ما شاء الله كلهم متعاونين وكل حاجه سواء دكتور علاء او سينوريتا اسماء والبرنامج مفيد وفادني شخصيا خلاني شوية اتخلص من قعدة اني خايف اتكلم واغلط",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "الكورس حلو اوي و الاستفادة كمان و الشرح طبعا رائع سواء من البروفيسورة الاء أو البروفيسور علاء  احنا كنا معاهم و هما رائعين بجد",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "بجد الكورس فرق معايا اوي مستوايا بقي احسن بكتير عن الاول وسنتيوريتا الاء بجد شرحها جميل اوي وصبوره معانا ♥️♥️",
          image: "👤"
        },
        {
          name: "طالب",
          role: "طالب",
          content: "بجد الكورس فرق معايا اوي مستوايا بقي احسن بكتير عن الاول وسنتيوريتا الاء بجد شرحها جميل اوي وصبوره معانا ♥️♥️",
          image: "👤"
        }
      ]
    },
    // FAQ Section
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الأسئلة شيوعاً",
      questions: [
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
    }
  },
  es: {
    // Common
    common: {
      back: "Volver",
      notFound: "No Encontrado",
      programNotFound: "El programa solicitado no existe",
      backToHome: "Volver al Inicio",
      pageNotFound: "404",
      pageNotFoundMessage: "¡Ups! Página no encontrada",
      returnToHome: "Volver al Inicio"
    },
    // Navigation
    nav: {
      home: "Inicio",
      about: "Sobre El Profesorito",
      features: "Características",
      programs: "Programas",
      exam: "Reservar Examen",
      faq: "Preguntas Frecuentes",
      contact: "Contacto",
      whatsapp: "WhatsApp",
      register: "Regístrate Ahora"
    },
    // Brand
    brand: {
      spanishHouse: "La Casa Española"
    },
    // Hero Section
    hero: {
      title: "El Profesorito - Tu Casa Hispánica en Egipto",
      subtitle: "Aprende español de manera efectiva con profesores nativos y certificados",
      greeting: "¡Hola!",
      welcome: "¡Bienvenido!",
      welcomeText: "Bienvenido a El Profesorito",
      tagline: "Aprende español de manera diferente... ¡aprende inteligentemente!",
      description: "No somos solo un curso de español normal... ¡somos un nuevo paso en tu forma de aprender el idioma!",
      features: "Desafío de nivel ✨ + Sistema personalizado + Seguimiento personal",
      examButton: "Reservar examen de nivel",
      programsButton: "Explorar programas",
      letsgo: "¡Vamos!",
      cta: "Comenzar Ahora",
      stats: {
        students: "Estudiantes graduados",
        programs: "Programas diferentes",
        success: "Tasa de éxito"
      },
      video: {
        comingSoon: "Video Próximamente",
        promotionalVideo: "El video promocional se agregará aquí",
        verticalVideo: "Video Vertical",
        aspectRatio: "Relación 9:16"
      }
    },
    // About Section
    about: {
      title: "¿Quiénes somos?",
      subtitle: "Nuestro viaje en la enseñanza del español",
      mission: "Nuestra misión es hacer del aprendizaje del español una experiencia divertida y efectiva para cada estudiante egipcio",
      content: "El Profesorito es el primer centro especializado en la enseñanza del español en Egipto. Creemos que aprender un idioma debe ser un viaje divertido y fructífero. Con profesores nativos y más de 5 años de experiencia, ofrecemos programas diversos que se adaptan a todos los niveles y edades.",
      mainText: "No somos solo un curso de español normal...",
      subText: "¡Somos un nuevo paso en tu forma de aprender el idioma!",
      firstStep: "En El Profesorito lo primero que hacemos contigo es",
      levelChallenge: "el desafío de nivel ✨",
      explanation: "Para identificar exactamente tu problema y elegir el mejor sistema que te convenga,",
      notTraditional: "no un sistema tradicional igual para todos.",
      whyDifferent: "¿Por qué somos diferentes?",
      successGoal: "¡Tu éxito es nuestro objetivo!",
      successSubtext: "Tu éxito es nuestra prioridad",
      levels: {
        beginner: "Nivel principiante",
        intermediate: "Nivel intermedio", 
        advanced: "Nivel avanzado"
      },
      features: {
        customSystem: {
          title: "Sistema personalizado",
          desc: "Para cada estudiante según su nivel"
        },
        practical: {
          title: "Aplicación práctica",
          desc: "80% del tiempo de clase"
        },
        personalFollow: {
          title: "Seguimiento personal",
          desc: "Mentor dedicado para cada estudiante"
        },
        guaranteedResults: {
          title: "Resultados garantizados",
          desc: "Progreso notable en 4 semanas"
        }
      },
      why: "¿Por qué El Profesorito?",
      reasons: [
        "Profesores nativos y certificados de España",
        "Métodos modernos e innovadores",
        "Ambiente educativo motivador y de apoyo",
        "Certificados reconocidos internacionalmente",
        "Seguimiento personalizado para cada estudiante"
      ],
      visual: {
        studySystem: "Sistema de estudio + archivo de seguimiento",
        mentorFollow: "Mentor te sigue especialmente en casa",
        customSystems: "Sistemas personalizados para tu objetivo",
        startJourney: "Comienza tu viaje con nosotros hoy"
      }
    },
    // Mission Statement
    mission: {
      title: "Nuestra Misión",
      message: "Hacemos que aprender español sea divertido y fácil, y hacemos que cada estudiante sienta que no está caminando solo en el camino... sino con un equipo completo que lo apoya y lo guía.",
      cta: "¡Únete a la comunidad de El Profesorito y comienza tu viaje con el español hoy!"
    },
    // Features Section
    features: {
      title: "Lo que nos distingue de otros",
      subtitle: "Sistema educativo integral y avanzado que garantiza tu éxito",

      systems: {
      label:"Programas que se adaptan al objetivo de cada estudiante",
      placeholder: "El curso está dedicado a tu objetivo.",
      },
      practical: {
      label:"20 % De Explicación - 80 % De Aplicación ",
      placeholder: "Una aplicación práctica que asegura que hables, no solo memorizas",
      },
      skills: {
      label: " Citas flexibles",
      placeholder: "Elija las fechas que se adapten a su horario",
      },
      mentor: {
      label:"Conferencias en línea y fuera de línea",
      placeholder: "Estudia de la manera que te haga sentir cómodo.",
      },
      study: {
      label:"Seguimiento diario después de la sesión",
      placeholder: "Estamos contigo toda la semana, no solo en clase.",
      },
      coaching:{
        label:"Profesores al más alto nivel (egipcios y extranjeros)",
        placeholder:"La mejor experiencia local e internacional en un solo lugar",
      } ,
    },
    // Programs Section
    programs: {
      title: "Nuestros Programas Educativos",
      subtitle: "Elige el programa adecuado para tu nivel y objetivos",
      moreDetails: "Más Detalles",
      addToCart: "Añadir al Carrito",
      bookExam: "Reservar Examen",
      register: "Regístrate Ahora",
      features: "Contenido del Programa",
      unsure: "¿No estás seguro de tu nivel?",
      test: "Reserva un examen de nivel gratuito",
      details: {
        description: "Descripción del Programa",
        skills: "¿Qué estudiarás y aprenderás?",
        info: "Información del Programa",
        schedule: "Horario",
        duration: "Duración",
        price: "Precio",
        bookExam: "Reservar Examen de Nivel",
        addToCart: "Añadir al Carrito",
        contactNote: "Nos pondremos en contacto contigo en 24 horas para confirmar los detalles"
      },
      schedule: {
        weekly3: "3 clases por semana",
        weekly2: "2 clases por semana",
        weeklyChallenge: "Desafío semanal",
        daily: "Diario",
        flexible: "Flexible",
        daily2: "2 clases diarias",
        daily3: "3 clases diarias",
        consecutive4: "4 días consecutivos",
        monthly4: "4 clases por mes"
      },
      duration: {
        months3: "3 meses",
        weeks6: "6 semanas",
        open: "Abierto",
        week1: "1 semana",
        weeks4: "4 semanas",
        week1Alt: "1 semana",
        month1: "1 mes",
        retos15: "15 días o desafío de 30 días"
      },
      price: {
        monthly1200: "1200 LE mensuales",
        monthly800: "800 LE mensuales",
        monthly500: "500 LE mensuales",
        monthly600: "600 LE mensuales",
        weekly300: "300 LE semanales",
        summer1800: "1800 LE",
        mini3500: "3500 LE",
        retos15: "4500 LE (15 días) - 7000 LE (30 días)",
        semana750: "750 LE"
      },
      programFeatures: {
        freeLevel: "Evaluación de nivel gratuita",
        materials: "Materiales educativos completos",
        weeklyFollow: "Seguimiento semanal",
        certificate: "Certificado oficial",
        intensiveConversation: "Sesiones de conversación intensiva",
        pronunciationCorrection: "Corrección de pronunciación",
        lifeSituations: "Situaciones de la vida real",
        speakingConfidence: "Confianza al hablar",
        interactiveMethod: "Método interactivo diseñado para niños",
        regularTracking: "Seguimiento regular del progreso de cada niño",
        funActivities: "Actividades y juegos educativos divertidos",
        funSessions: "8 sesiones divertidas",
        simplifiedGrammar: "Gramática simplificada",
        immediateApplication: "Aplicación inmediata",
        realExamples: "Ejemplos de la vida real",
        periodicTests: "Pruebas periódicas",
        relaxedEnvironment: "Ambiente relajado y acogedor",
        realConversations: "Conversaciones reales",
        culturalExchange: "Intercambio cultural",
        networkingOpportunity: "Oportunidad de networking"
      },
      categories: {
        adults: "Programas para Adultos",
        kids: "Programas para Niños", 
        intensive: "Programas Intensivos"
      },
      general: {
        title: "Programa General",
        desc: "El programa regular diseñado para cualquier estudiante que quiera aprender español paso a paso desde el principio hasta los niveles avanzados. Apropiado para estudiantes que quieren un estudio integral que cubra todas las habilidades.",
        schedule: "2 clases por semana",
        duration: "8 clases por mes",
        price: "1200 LE mensuales",
        features: [
          "Duración de la clase: 2 horas",
          "Incluye todas las habilidades del idioma (escuchar – conversación – lectura – escritura)",
          "Material interactivo especial del centro para aplicación práctica",
          "Contenido completo de cada nivel"
        ],
        skills: [
          "Aprenderás fundamentos del idioma (vocabulario – gramática – estructuras)",
          "Mejorar la escucha y conversación gradualmente",
          "Leer textos apropiados para el nivel y desarrollar comprensión",
          "Escribir oraciones y textos simples luego avanzados"
        ]
      },
      speaking: {
        title: "Programa Speaking Program",
        desc: "Programa intensivo de conversación que se enfoca en la habilidad de conversación con profesores egipcios y nativos, su objetivo es que hables con fluidez en el menor tiempo posible.",
        schedule: "3 clases por semana",
        duration: "13 clases por mes",
        price: "3000 LE por nivel",
        features: [
          "Duración de la clase: 3 horas",
          "Completamos 3 niveles de conversación en poco tiempo",
          "Cada estudiante tiene un Mentor que lo sigue diariamente y le envía tareas",
          "Cada estudiante tiene 30 desafíos diarios para aplicar"
        ],
        skills: [
          "Desarrollar conversación diaria y profesional",
          "Mejorar fluidez y pronunciación",
          "Usar vocabulario en situaciones de vida real",
          "Interactuar con nativos para tener experiencia completa",
          "Compromiso diario con tareas y desafíos te acostumbras a pensar en español",
          "Pragmática, una ciencia del idioma que te enseña a hablar como un nativo"
        ]
      },
      kids: {
        title: "Programa Cursos de Niños",
        desc: "Programa interactivo para niños diseñado de manera que se adapte a sus edades, permitiéndoles aprender español mientras juegan y se divierten.",
        schedule: "Clases cortas y divertidas",
        duration: "Según grupo de edad",
        price: "3000 LE",
        features: [
          "Clases llenas de actividades: canciones, cuentos, juegos, dibujos",
          "División de niños por grupo de edad para que cada grupo reciba lo apropiado",
          "Enfoque en enseñar vocabulario básico y frases cortas prácticas",
          "Clases cortas y divertidas que mantienen la atención del niño"
        ],
        skills: [
          "Palabras y frases para comunicación diaria simple",
          "Mejorar pronunciación de manera fácil y apropiada para el niño",
          "Desarrollar habilidades de escucha e interacción",
          "Amor por el idioma y acostumbrarse a usarlo desde temprano"
        ]
      },
      grammar: {
        title: "Programa Mega Grammar",
        desc: "Programa especializado en gramática, apropiado para cualquier estudiante que quiera enfocarse completamente en los tiempos verbales y estructuras.",
        schedule: "10 clases",
        duration: "Duración de la clase: 2 horas",
        price: "1800 LE",
        features: [
          "Explicación completa: Indicativo, Subjuntivo, Imperativo, Morfología",
          "Material especial del nivel para aplicación",
          "En cada clase: explicación de tiempo + aplicación práctica en conversación",
          "Costo: 1800 LE"
        ],
        skills: [
          "Todos los tiempos verbales y reglas gramaticales del español",
          "Aplicación práctica de la gramática en conversación",
          "Escribir y formar oraciones correctas",
          "Comprensión correcta del uso de diferentes tiempos verbales"
        ]
      },
      cafe: {
        title: "Día del Café",
        desc: "Sesión de conversación mensual en un ambiente cómodo y amigable",
        schedule: "Clase de conversación grupal no tradicional",
        duration: "3 horas",
        price: "150 LE",
        features: [
          "Temas variados (cultura, viajes, películas, situaciones de la vida real)",
          "Profesor (egipcio o nativo) para corregir errores y agregar expresiones naturales",
          "Costo: 150 LE",
          "3 horas"
        ],
        skills: [
          "Aprenderás expresiones coloquiales",
          "Ganarás confianza al hablar en situaciones diarias",
          "Te acostumbrarás a escuchar y entender español natural",
          "Conocerás estudiantes como tú y formarás una comunidad que te apoye"
        ]
      },
            retos: {
        title: "Los Retos Program",
        desc: "A short and intensive program based on the idea of daily challenges. Designed to break the fear barrier of speaking and achieve a rapid leap in your level."
      },
      semana: {
        title: "Programa Semana Práctica",
        desc: "Semana práctica intensiva que se enfoca en cada habilidad en un día separado. Apropiado para estudiantes que quieren entrenamiento corto y efectivo."
      },
      summer: {
        title: "Programa Summer Camp",
        desc: "Campamento de verano intensivo que te permite completar un nivel completo en solo 7 días."
      },
      mini: {
        title: "Programa Mini Curso (Privado)",
        desc: "Programa flexible y especial apropiado para estudiantes que quieren un curso pequeño privado que se enfoca en un objetivo específico."
      },
      skills: {
        reading: "Lectura",
        writing: "Escritura", 
        listening: "Comprensión Auditiva",
        speaking: "Conversación",
        grammar: "Gramática",
        conversation: "Conversación Libre",
        pronunciation: "Pronunciación",
        vocabulary: "Vocabulario",
        interactive: "Método interactivo",
        games: "Juegos educativos",
        activities: "Actividades divertidas",
        application: "Aplicación"
      }
    },
    // Exam Registration
    exam: {
      title: "Examen de Nivel",
      subtitle: "Reserva tu examen gratuito para determinar tu nivel de español",
      description: "Reserva tu examen gratuito para determinar tu nivel de español y obtener recomendaciones personalizadas",
      success: {
        title: "¡Registro exitoso! ✨",
        description: "Nos pondremos en contacto contigo en 24 horas para programar tu examen de nivel"
      },
      why: {
        title: "¿Por qué el examen?",
        level: {
        label:"Determinar el nivel",
        placeholder: "Determinación precisa de tu nivel actual en español",
        },
        custom:{
          label:"Programa personalizado",
          placeholder:"Obtener recomendaciones personalizadas del programa más adecuado para ti",
        } ,
  
        save: {
        label:"Ahorrar tiempo y dinero",
        placeholder: "Evitar empezar en un nivel inadecuado e invertir tu tiempo inteligentemente"
        },
      },
      how: {
        title: "¿Cómo se realiza el examen?",
        duration: "Duración: 30-45 minutos",
        type: "Tipo: examen oral y escrito",
        evaluation: "Evaluación: evaluación inmediata de tus habilidades",
        recommendations: "Recomendaciones: consejos personalizados para el programa adecuado"
      },
      form: {
        title: "Reservar Examen de Nivel",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        phone: "Número de Teléfono",
        preferredTime: "Horario Preferido",
        experienceLevel: "Nivel de Experiencia",
        goals: "Tus objetivos para aprender español",
        time: {
          morning: "Mañana (9 AM - 12 PM)",
          afternoon: "Tarde (12 PM - 6 PM)",
          evening: "Noche (6 PM - 9 PM)",
          weekend: "Fin de semana"
        },
        experience: {
          none: "Sin experiencia previa",
          basic: "A1-A2",
          intermediate: "B1-B2",
          advanced: "C1-C2"
        },
        beginner: "Principiante",
        intermediate: "Intermedio",
        advanced: "Avanzado",
        submit: "Reservar Examen",
        note: "Nos pondremos en contacto contigo en 24 horas para confirmar la cita del examen",
        placeholders: {
          name: "Escribe tu nombre completo",
          phone: "01xxxxxxxxx",
          email: "ejemplo@email.com",
          timeSelect: "Elige el horario conveniente",
          levelSelect: "Elige tu nivel",
          goals: "Por ejemplo: viaje, trabajo, estudio, amor por el idioma..."
        }
      },
      online: {
        title: "¡Examen en línea próximamente!",
        desc: "Pronto podrás realizar el examen de nivel en línea desde tu casa",
        button: "Próximamente"
      },
      benefits: [
        "Examen completamente gratuito",
        "Determinación precisa del nivel",
        "Recomendaciones personalizadas del programa adecuado",
        "Sesión de consulta gratuita"
      ]
    },
    // Contact Section
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para responder todas tus preguntas",
      ways: {
        title: "Formas de contacto",
        call: "Llámanos",
        whatsapp: {
          label :"WhatsApp",
          placeholder: "Contáctanos por WhatsApp",
        },
        email: "Correo electrónico",
        address:{
          label : "Dirección",
          placeholder : "122 Al Tahrir St, Dokki, Giza"
        } ,
      },
      hours: {
        title: "Horarios de atención",
        weekdays:{
          days : "Sábado - Jueves",
          time : "10 AM - 10 PM",
        } ,
       
        friday: {
          day : "Viernes",
          time : "10 AM - 10 PM" ,
        } ,
      },
      quick: {
        title: "Contacto rápido",
        whatsapp: "WhatsApp",
        call: "Llamar"
      },
      form: {
        title: "Envía un mensaje",
        name: {
          label: "Nombre",
          placeholder: "Escribe tu nombre",
        },
        email: {
          label:"Correo electrónico",
          placeholder:  "ejemplo@email.com",
        } , 
        phone: {
          label: "Número de teléfono",
          placeholder: "+20 100 123 4567",
        },
        message:{
          label: "Mensaje",
          placeholder: "Escribe tu mensaje aquí...",
        } ,
        submit: "Enviar mensaje",
        success: {
          title: "¡Mensaje enviado con éxito! 📧",
          desc: "Te responderemos lo antes posible"
        }
      },
      map: {
        title: "Nuestra ubicación"
      },
      info: {
        address: "Dirección",
        phone: "Teléfono",
        email: "Correo Electrónico",
        hours: "Horario de Atención"
      },
      addressText: "122 Al Tahrir St, Dokki, Giza",
      hoursText: "De 10 AM a 10 PM"
    },
    // Footer
    footer: {
      about: "El Profesorito es tu centro especializado para aprender español en Egipto con profesores nativos.",
      quickLinks: "Enlaces Rápidos",
      social: {
        title: "Síguenos"
      },
      rights: "Todos los derechos reservados",
      links: {
        quick: "Enlaces Rápidos"
      },
      programs: {
        title: "Programas"
      },
      contact: {
        title: "Contacto",
        whatsapp: "WhatsApp",
        register: "Regístrate Ahora"
      },
      legal: {
        privacy: "Política de Privacidad",
        terms: "Términos y Condiciones"
      },
      description: "El Profesorito es tu centro especializado para aprender español en Egipto con profesores nativos."
    },
    // Testimonials
    testimonials: {
      title: "Opiniones de Nuestros Estudiantes",
      subtitle: "Descubre las experiencias destacadas de nuestros estudiantes",
      previous: "Testimonio anterior",
      next: "Testimonio siguiente",
      goToSlide: "Ir al testimonio",
      reviews: [
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Buenas noches\n\nHonestamente, el curso es una obra maestra y muy útil, el método de enseñanza es excelente y los instructores son excelentes.\n\nRealmente, muchas gracias por todo lo que han hecho por nosotros.",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Ustedes son un lugar respetable y muy bueno, honestamente.",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Y la señorita Alaa es una persona muy hermosa.",
          image: "👤"
        },
        // {
        //   name: "Estudiante",
        //   role: "Estudiante",
        //   content: "El sistema del curso era una obra maestra. Antes de empezar estaba segura de que terminaría en un nivel diferente, y gracias a Dios sucedió realmente. Los instructores no tienen igual y nunca he visto nadie como ellos antes. El señor Alaa es alguien especial en todo y explica de una manera que nunca he visto en nada. Realmente estoy feliz de ser estudiante de El Profesorito. Al principio tenía miedo, pero después de hacer la prueba de nivel me aseguré de que este sería mi lugar y continuaría aquí y que me ayudaría. Gracias a Dios, después de la gracia de Dios, primero la ayuda del señor Alaa para mí y la ayuda de todas las personas en El Profesorito, pude mejorar y ahora tengo más confianza en mí misma que antes ❤️. Por Dios, si voy a dar mi opinión con toda honestidad, seguiré hablando desde aquí hasta después de mañana, de verdad 😂❤️❤️",
        //   image: "👤"
        // },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "El curso es muy bueno, por Dios, y muy útil. Lo único que me hará retrasar la inscripción en el segundo nivel son los exámenes de la universidad.",
          image: "👤"
        },
        // {
        //   name: "Estudiante",
        //   role: "Estudiante",
        //   content: "Realmente estoy muy feliz. El lugar está limpio y cómodo.\n\nLa clase de conversación es una obra maestra y muy útil. La idea de que 3 horas hable y escuche solo español, y los instructores me ayuden a recordar lo que quiero decir y ejerciten mi mente.\n\nLa clase de gramática también es importante y útil, y la explicación es práctica y hay actividades que se hacen que ayudan a que la explicación se consolide.\n\nTodo esto realmente después de solo 4 clases me ayudó incluso en el trabajo a entender mejor a los clientes y ayudar mejor y ser destacada.",
        //   image: "👤"
        // },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Todo está perfecto, honestamente, ya sea en explicación o sistema, y noto una diferencia clara en mi nivel.",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "El curso fue bueno y delicioso y me beneficié, y los instructores eran muy hábiles.",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Honestamente, el curso es muy útil y todos los instructores son hábiles 🥰🥰",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Gracias a Dios\n\nEl curso es bueno y todos los presentes son muy buenos y todos estamos felices con el curso.",
          image: "👤"
        },
        // {
        //   name: "Estudiante",
        //   role: "Estudiante",
        //   content: "Algo magnífico, magnífico, magnífico, la magnificencia de la magnificencia. Realmente me beneficié mucho y el sistema es una obra maestra y todo es una obra maestra. Las mejores personas con las que he tomado un curso, de verdad.",
        //   image: "👤"
        // },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "El curso es hermoso y excelente, y yo mismo veo que he mejorado desde el principio debido al curso.",
          image: "👤"
        },
        // {
        //   name: "Estudiante",
        //   role: "Estudiante",
        //   content: "No, por supuesto, el curso es hermoso y muy útil, especialmente el sistema de Retos, eso es lo que hizo una gran diferencia para mí, y por supuesto el señor Alaa y la señorita Alaa siempre hacen seguimiento y explican de manera sistemática y hacen una evaluación de nivel precisa y realmente dicen cuáles son los errores correctos y las cosas en las que uno debe trabajar para mejorar rápidamente.",
        //   image: "👤"
        // },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Buenas noches\n\nHonestamente, son muy buenos, nos beneficiamos mucho y todos los instructores son excelentes, y en un mes, gracias a Dios, nos ayudaron a progresar mucho ♥️♥️",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "No, honestamente, todo es una obra maestra como de costumbre, quiero decir, y los instructores son una obra maestra, por supuesto ♥️♥️",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "El mejor lugar de todos modos, y la gente es muy buena, Dios quiera.",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Honestamente, el lugar es realmente hermoso y el señor se esfuerza mucho con nosotros, y estoy feliz, honestamente, de ser parte de esta familia, y Dios quiera, juntos hasta que llegue a C1 ❤️😍",
          image: "👤"
        },
        // {
        //   name: "Estudiante",
        //   role: "Estudiante",
        //   content: "Ellos, Dios quiera, todos son cooperativos y todo, ya sea el doctor Alaa o la señorita Asmaa, y el programa es útil y me benefició personalmente, me hizo deshacerme un poco de mi miedo a hablar y cometer errores.",
        //   image: "👤"
        // },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "El curso es muy bueno y el beneficio también, y la explicación es maravillosa, ya sea de la profesora Alaa o el profesor Alaa. Estábamos con ellos y son maravillosos, de verdad.",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Realmente el curso hizo una gran diferencia para mí, mi nivel se volvió mucho mejor que antes, y la señorita Alaa, realmente su explicación es muy hermosa y paciente con nosotros ♥️♥️",
          image: "👤"
        },
        {
          name: "Estudiante",
          role: "Estudiante",
          content: "Realmente el curso hizo una gran diferencia para mí, mi nivel se volvió mucho mejor que antes, y la señorita Alaa, realmente su explicación es muy hermosa y paciente con nosotros ♥️♥️",
          image: "👤"
        }
      ]
    },
    // FAQ Section
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respuestas a las preguntas más comunes",
      questions: [
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
      ]
    }
  }
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Update document direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update body direction as well
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Update body class for language-specific styling
    document.body.className = document.body.className.replace(/lang-\w+/, '');
    document.body.classList.add(`lang-${language}`);
    
    // Also add direction class
    document.body.classList.remove('dir-rtl', 'dir-ltr');
    document.body.classList.add(language === 'ar' ? 'dir-rtl' : 'dir-ltr');
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};