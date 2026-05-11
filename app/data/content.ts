export type Lang = "en" | "my" | "jp";

export type Translatable = Record<Lang, string>;

const t = (en: string, my: string, jp: string): Translatable => ({ en, my, jp });

export const content = {
  /* ── NAV ── */
  nav: {
    services: t("Services", "ဝန်ဆောင်မှုများ", "サービス"),
    consultants: t("Our Team", "အဖွဲ့ဝင်", "チーム"),
    about: t("About Us", "ကျွန်ုပ်တို့အကြောင်း", "私たちについて"),
    contact: t("Contact", "ဆက်သွယ်ရန်", "お問い合わせ"),
    cta: t("Apply Now", "လျှောက်ထားရန်", "相談を申し込む"),
  },

  /* ── HERO ── */
  hero: {
    eyebrow: t(
      "Japanese Education · Myanmar's Bridge to Japan",
      "ဂျပန်ပညာရေး · မြန်မာမှ ဂျပန်သို့",
      "日本語教育・ミャンマーから日本への架け橋"
    ),
    headline: t(
      "Your Dream of\nStudying in Japan\nStarts Here.",
      "ဂျပန်မှာ ပညာသင်ချင်တဲ့\nသင့်အိပ်မက်ကို\nဒီမှာ စတင်ပါ။",
      "日本留学の夢を、\nここから始めよう。"
    ),
    sub: t(
      "Navigating Japanese universities, language schools, and visa applications is overwhelming — especially from Myanmar. We guide you every step, from choosing the right school to holding your COE.",
      "ဂျပန်တက္ကသိုလ်များ၊ ဘာသာစကားကျောင်းများနှင့် ဗီဇာလျှောက်ထားခြင်းသည် ခက်ခဲသည် — အထူးသဖြင့် မြန်မာမှ။ မှန်ကန်သောကျောင်းရွေးချယ်ခြင်းမှ COE ရရှိသည်အထိ ကျွန်ုပ်တို့ လမ်းတိုင်းတွင် လမ်းညွှန်ပေးမည်။",
      "日本の大学・語学学校・ビザ申請は複雑です。私たちがすべてのステップをサポートします。"
    ),
    cta: t("Book a Free Consultation", "အခမဲ့ တိုင်ပင်ဆွေးနွေးရန်", "無料相談を予約する"),
    scroll: t("Explore our services", "ဝန်ဆောင်မှုများ ကြည့်ရန်", "サービスを見る"),
    painPoints: [
      t(
        "\"I don't know which university or school to choose.\"",
        "\"မည်သည့် တက္ကသိုလ် သို့မဟုတ် ကျောင်းကို ရွေးချယ်ရမည်ကို မသိပါ။\"",
        "\"どの大学・学校を選べばいいかわからない\""
      ),
      t(
        "\"The Japanese application process is too complicated.\"",
        "\"ဂျပန် လျှောက်ထားမှု လုပ်ငန်းစဉ်သည် အလွန်ရှုပ်ထွေးသည်။\"",
        "\"日本の出願手続きが複雑すぎる\""
      ),
      t(
        "\"I'm worried about language barriers and fitting in.\"",
        "\"ဘာသာစကားဆိုင်ရာ အဟန့်အတားများနှင့် ကိုက်ညီမှုအတွက် စိုးရိမ်သည်။\"",
        "\"言葉の壁と適応できるか不安\""
      ),
    ],
  },

  /* ── SERVICES ── */
  services: {
    eyebrow: t("What We Offer", "ကျွန်ုပ်တို့ ပေးဆောင်သည်မှာ", "サービス内容"),
    headline: t(
      "Everything You Need to\nSucceed in Japan",
      "ဂျပန်တွင် အောင်မြင်ရန် လိုအပ်သည့်\nအရာအားလုံး",
      "日本で成功するために\n必要なすべてを"
    ),
    items: [
      {
        id: "eju",
        icon: "/eju.png",
        title: t("EJU Preparation", "EJU ပြင်ဆင်မှု", "EJU準備コース"),
        desc: t(
          "Comprehensive prep for the Examination for Japanese University Admission. Subjects: Japanese as a Foreign Language, Math 1 & 2, Japan & the World, Chemistry, Physics, Biology.",
          "ဂျပန်တက္ကသိုလ် ဝင်ခွင့်စစ်ဆေးမှုအတွက် ပြည့်စုံသော ပြင်ဆင်မှု။ ဘာသာရပ်များ: ဂျပန်ဘာသာ၊ သင်္ချာ ၁ & ၂၊ ဂျပန်နှင့် ကမ္ဘာ့ရေးရာ၊ ဓာတုဗေဒ၊ ရူပဗေဒ၊ ဇီဝဗေဒ။",
          "日本留学試験（EJU）の総合対策。科目：日本語、数学1・2、理科（化学・物理・生物）、総合科目。"
        ),
        featured: false,
      },
      {
        id: "japanese",
        icon: "/japClass.jpg",
        title: t("Japanese Language Class", "ဂျပန်ဘာသာစကားသင်တန်း", "日本語クラス"),
        desc: t(
          "Classes taught by native Japanese instructors. Conversation classes for N4 level and above are especially popular. Build real fluency from the ground up.",
          "ဂျပန်ဇာတိ ဆရာ/ဆရာမများမှ သင်ကြားပေးသော သင်တန်းများ။ N4 အဆင့်နှင့်အထက်အတွက် စကားပြောသင်တန်းများ အထူးရေပန်းစားသည်。",
          "ネイティブ日本語教師による授業。N4以上の会話クラスが特に人気。"
        ),
        featured: false,
      },
      {
        id: "application",
        icon: "/japClass.jpg",
        title: t("School Application", "ကျောင်းလျှောက်ထားမှု", "学校出願サポート"),
        desc: t(
          "We find the best pathway for you — language school, vocational college, or university. Full support from application to COE and visa acquisition.",
          "ဘာသာစကားကျောင်း၊ သက်မွေးပညာကောလိပ် သို့မဟုတ် တက္ကသိုလ် — သင့်အတွက် အကောင်းဆုံးလမ်းကြောင်းကို ရှာဖွေပေးသည်。 လျှောက်ထားမှုမှ COE နှင့် ဗီဇာရရှိသည်အထိ ပြည့်စုံသောထောက်ပံ့မှု。",
          "語学学校・専門学校・大学への進学ルートを提案。出願からCOE・ビザ取得まで完全サポート。"
        ),
        featured: false,
      },
      {
        id: "consulting",
        icon: "/academicSupport.jpg",
        title: t("Academic Consulting", "ပညာရေးတိုင်ပင်ဆွေးနွေး", "アカデミック\nコンサルティング"),
        desc: t(
          "Our core service. One-on-one consultations to map the ideal academic and career path to Japan. We assess your goals, budget, Japanese level, and timeline — then build a personalised strategy.",
          "ကျွန်ုပ်တို့၏ အဓိကဝန်ဆောင်မှု။ ဂျပန်သို့ ပညာရေးနှင့် အသက်မွေးဝမ်းကျောင်းလမ်းကြောင်း အကောင်းဆုံးချမှတ်ရန် တစ်ဦးချင်း တိုင်ပင်ဆွေးနွေးမှုများ。",
          "私たちの核となるサービス。目標・予算・日本語レベル・スケジュールを評価し、個別戦略を策定。"
        ),
        featured: true,
      },
    ],
  },

  /* ── CONSULTANT ── */
  consultant: {
    eyebrow: t("Meet Your Guide", "သင့်လမ်းညွှန်ကို ရှာဖွေခြင်း", "ガイドに会いましょう"),
    headline: t(
      "Expert Guidance from Someone\nExerienced Consultants",
      "အတွေ့အကြုံရှိသူထံမှ\nကျွမ်းကျင်သော\nလမ်းညွှန်မှု",
      "経験者による\n専門的な\nサポート"
    ),
    name: "Mihoshi Ishihara",
    title: t("Founder & Director", "တည်ထောင်သူ & ဒါရိုက်တာ", "創設者・ディレクター"),
    bio: t(
      "Originally from Okayama, Japan, Mihoshi graduated from the University of Tsukuba with a degree in International Relations. After working at Kubota Corporation, she earned her MBA from GLOBIS University. In 2022, she moved to Yangon, Myanmar, where she actively supports young people through scholarship programs and educational guidance to help them pursue higher education opportunities.",
      "ဂျပန်နိုင်ငံ အိုကာယမားမှ မွေးဖွားသူ Mihoshi သည် နိုင်ငံတကာဆက်ဆံရေးဘာသာရပ်ဖြင့် Tsukuba တက္ကသိုလ်မှ ဘွဲ့ရရှိခဲ့သည်။ Kubota Corporation တွင် အလုပ်လုပ်ပြီးနောက် GLOBIS တက္ကသိုလ်မှ MBA ရရှိခဲ့သည်। ၂၀၂၂ ခုနှစ်တွင် ရန်ကုန်သို့ ပြောင်းရွှေ့ပြီး ပညာသင်ဆု ပရိုဂရမ်များနှင့် ပညာရေးလမ်းညွှန်မှုများမှတစ်ဆင့် လူငယ်များကို တက်ကြွစွာ ထောက်ပံ့နေသည်。",
      "岡山県出身。筑波大学国際総合学類を卒業後、株式会社クボタで勤務。その後グロービス経営大学院でMBAを取得。2022年にヤンゴンへ移住し、奨学金プログラムや教育支援を通じて若者の進学をサポートしています。"
    ),
    credentials: [
      t("University of Tsukuba — International Relations", "Tsukuba တက္ကသိုလ် — နိုင်ငံတကာဆက်ဆံရေး", "筑波大学 国際総合学類"),
      t("Kubota Corporation", "Kubota ကော်ပိုရေးရှင်း", "株式会社クボタ"),
      t("GLOBIS University — MBA", "GLOBIS တက္ကသိုလ် — MBA", "グロービス経営大学院 MBA"),
      t("Yangon-based since 2022", "၂၀၂၂ မှ ရန်ကုန်တွင် နေထိုင်", "2022年よりヤンゴン在住"),
    ],
  },

  /* ── ABOUT ── */
  about: {
    eyebrow: t("Our Story", "ကျွန်ုပ်တို့၏ ဇာတ်လမ်း", "私たちのストーリー"),
    headline: t("Rise and Shine\nwith Japanese\nEducation", "ဂျပန်ပညာရေးဖြင့်\nထွန်းလင်းတောက်ပြောင်ပါ", "日本教育で\n輝きを放とう"),
    philosophy: t(
      "The name Thuriya translates to \"Sun God\" in the Burmese language. Inspired by the rising sun of the Japanese flag, our institution embodies our core mission: to provide students with opportunities to study in Japan, and to nurture individuals who will shine brightly in their future academic and professional endeavors.",
      "Thuriya ဟူသောအမည်သည် မြန်မာဘာသာဖြင့် \"နေဘုရား\" ဟု အဓိပ္ပာယ်ရသည်။ ဂျပန်အလံ၏ ထွက်ရောင်နေမှ လှုံ့ဆော်ကာ ကျောင်းသားများကို ဂျပန်တွင် ပညာသင်ကြားခွင့် ပေးနိုင်ရန်နှင့် အနာဂတ်တွင် တောက်ပဆန်းကြယ်မည့် ပုဂ္ဂိုလ်များ မွေးထုတ်ပေးရန် ကျွန်ုပ်တို့၏ အဓိကရည်ရွယ်ချက်ကို втілena.",
      "Thuriyaという名前は、ビルマ語で「太陽の神」を意味します。日の丸の旭日にインスパイアされ、学生に日本で学ぶ機会を与え、輝かしい未来を持つ人材を育てることが私たちの使命です。"
    ),
    founded: t("Established 2023", "၂၀၂၃ ခုနှစ် စတင်တည်ထောင်", "2023年設立"),
    rebranded: t("Rebranded as THURIYA Japanese Education Centre in 2025", "၂၀၂၅ တွင် THURIYA Japanese Education Centre အဖြစ် ပြန်လည်တည်ထောင်", "2025年、THURIYA Japanese Education Centreとして再ブランド化"),
    stats: [
      { value: "3+", label: t("Years of Experience", "နှစ် အတွေ့အကြုံ", "年以上の経験") },
      { value: "3", label: t("Core Services", "အဓိကဝန်ဆောင်မှုများ", "コアサービス") },
      { value: "100%", label: t("Dedicated Support", "헌身적인 지원", "専任サポート") },
    ],
  },

  /* ── CONTACT ── */
  contact: {
    eyebrow: t("Get Started", "စတင်ရန်", "始めましょう"),
    headline: t(
      "Take the First Step\nToward Japan",
      "ဂျပန်သို့ ပထမဆုံးခြေလှမ်းကို\nစတင်ပါ",
      "日本への第一歩を\n踏み出そう"
    ),
    sub: t(
      "Fill out the form below and we'll be in touch within one business day.",
      "အောက်ပါပုံစံကို ဖြည့်ပါ၊ ကျွန်ုပ်တို့ ဆောလျင်စွာ ပြန်ဆက်သွယ်မည်。",
      "フォームにご記入ください。1営業日以内にご連絡します。"
    ),
    fields: {
      name: t("Full Name", "အမည်အပြည့်အစုံ", "氏名"),
      phone: t("Phone Number", "ဖုန်းနံပါတ်", "電話番号"),
      email: t("Email Address", "အီးမေးလ်လိပ်စာ", "メールアドレス"),
      service: t("Interested Service", "စိတ်ဝင်စားသောဝန်ဆောင်မှု", "ご興味のサービス"),
      message: t("Message", "မက်ဆေ့ချ်", "メッセージ"),
      submit: t("Send Message", "မက်ဆေ့ချ် ပို့ပါ", "送信する"),
    },
    serviceOptions: [
      t("Academic Consulting", "ပညာရေးတိုင်ပင်ဆွေးနွေး", "アカデミックコンサルティング"),
      t("EJU Preparation", "EJU ပြင်ဆင်မှု", "EJU準備コース"),
      t("Japanese Language Class", "ဂျပန်ဘာသာစကားသင်တန်း", "日本語クラス"),
      t("School Application Support", "ကျောင်းလျှောက်ထားမှု ထောက်ပံ့မှု", "学校出願サポート"),
      t("Other / Not Sure", "အခြား / မသေချာ", "その他・わからない"),
    ],
    placeholders: {
      name: t("Ma Hlaing Yadanar", "မ ဆိုင်းရဒနာ", "山田 花子"),
      phone: t("+95 9 XXX XXX XXX", "+95 9 XXX XXX XXX", "+81 XX-XXXX-XXXX"),
      email: t("you@email.com", "you@email.com", "you@email.com"),
      message: t(
        "Tell us about your goals and timeline...",
        "သင့်ရည်မှန်းချက်များနှင့် အချိန်ဇယားအကြောင်း ပြောပြပါ...",
        "目標とスケジュールについて教えてください..."
      ),
    },
  },

  /* ── FOOTER ── */
  footer: {
    tagline: t(
      "Rise and Shine with Japanese Education",
      "ဂျပန်ပညာရေးဖြင့် ထွန်းလင်းတောက်ပြောင်ပါ",
      "日本教育で輝きを放とう"
    ),
    address: t(
      "Room 402, 4F, Hledan Center, Kamayut Township, Yangon, Myanmar 11041",
      "ရန်ကုန်မြို့၊ ကမာရွတ်မြို့နယ်၊ လှေဒင်ဆင်တာ၊ ၄ထပ်၊ ၄၀၂ ခန်း (ဝင်းကုဒ် ၁၁၀၄၁)",
      "ミャンマー・ヤンゴン カマユット郡区 Hledanセンター4F 402号室 〒11041"
    ),
    phone: "(+95) 9 44293 6131",
    hours: t(
      "Mon–Thu & Sun · 9:00 AM – 12:00 PM / 1:00 PM – 4:00 PM",
      "တနင်္လာ–ကြာသပတေး & တနင်္ဂနွေ · မနက် ၉နာရီ – ၁၂နာရီ / ညနေ ၁နာရီ – ၄နာရီ",
      "月〜木・日 9:00〜12:00 / 13:00〜16:00"
    ),
    copyright: t(
      "© 2025 THURIYA Myanmar Co., Ltd. All rights reserved.",
      "© 2025 THURIYA Myanmar Co., Ltd. All rights reserved.",
      "© 2025 THURIYA Myanmar Co., Ltd. All rights reserved."
    ),
    social: {
      tiktok: "https://www.tiktok.com/@mihoshi_japan",
      facebook: "https://www.facebook.com/thuriyaacademy",
      telegram: "https://t.me/thuriyaacademy",
    },
    map: "https://share.google/9BLbzIJvQe6JYrYLs",
  },
} as const;
