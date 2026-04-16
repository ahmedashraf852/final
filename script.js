'use strict';

/* ============================================================
   TRANSLATIONS — English & Arabic
   ============================================================ */
const T = {
  en: {
    'nav.logo':'AA','nav.about':'About','nav.services':'Services',
    'nav.education':'Education','nav.projects':'Projects',
    'nav.testimonials':'Testimonials','nav.contact':'Contact',

    'hero.eyebrow':"Hello, I'm",'hero.name':'Ahmed Ashraf',
    'hero.tagline':'AI & Machine Learning Developer · Communication & Computer Engineering',
    'hero.cta1':'View Projects','hero.cta2':'Contact Me',
    'stat.internships':'Internships','stat.certs':'Certificates',

    'about.label':'About Me','about.title':'Who I Am',
    'about.bio':'I am a Communication and Computer Engineering student at NUB University with a strong interest in Artificial Intelligence and Machine Learning. I have completed a certified Machine Learning course from NTI and worked on projects such as face recognition and house price prediction. Passionate about applying data-driven solutions to real-world engineering problems.',
    'about.bio2':'Currently a member of the IEEE Student Branch (Technology Team), contributing to engineering events and workshops. Open to collaborations, research opportunities, and challenging projects.',
    'about.skillsHeading':'Core Skills','about.contactBtn':'Get In Touch',
    'skill.ml':'Machine Learning','skill.python':'Python','skill.da':'Data Analysis',
    'skill.cv':'Computer Vision','skill.embedded':'Embedded Systems','skill.powerbi':'Power BI',
    'skill.comms':'Communication Systems','skill.microwave':'Microwave & Optical Fiber',

    'services.label':'What I Offer','services.title':'Offered Services',
    'srv1.title':'Presentation Making',
    'srv1.desc':'Designing professional, visually compelling PowerPoint and Canva presentations for academic, business, and technical purposes — clear, structured, and impactful.',
    'srv2.title':'CV Design',
    'srv2.desc':'Crafting modern, ATS-friendly CVs and résumés that highlight your strengths, experience, and skills in a clean, professional layout tailored to your target role.',
    'srv3.title':'Portfolio Design',
    'srv3.desc':'Building personal portfolio websites and visual portfolios that showcase your projects, skills, and identity — responsive, modern, and hosted on GitHub Pages.',
    'srv4.title':'Machine Learning Projects',
    'srv4.desc':'End-to-end ML project development — from data collection and preprocessing to model training, evaluation, and deployment using Python and Scikit-learn.',
    'srv5.title':'Embedded Software',
    'srv5.desc':'Programming and debugging microcontroller-based applications with Arduino, ARM, and PIC in C/C++, including sensor integration and Proteus simulation.',
    'srv6.title':'Teaching Math & Statistics',
    'srv6.desc':'Tutoring mathematics and statistics for engineering and data science students — covering probability, linear algebra, calculus, and applied statistics with clear explanations.',

    'edu.label':'Academic Journey','edu.title':'Education & Certificates',
    'edu.degreeHead':'Degree & Internships','edu.certsHead':'Courses & Certificates',
    'edu.degree':'B.Sc. Communication & Computer Engineering',
    'edu.university':'NUB University — Cairo, Egypt',
    'edu.gpa':'GPA: 3.48 · Expected Graduation: 2027',
    'edu.intern1':'Intern — Egyptian Radio & Television (Maspero)',
    'edu.intern1sub':'Communication & Broadcasting Systems Dept.',
    'edu.intern1desc':'Hands-on experience with broadcasting and transmission systems, signal processing, and communication infrastructure maintenance.',
    'edu.intern2':'Intern — Electronics Research Institute (ERI)',
    'edu.intern2sub':'Electronics & Communication Department',
    'edu.intern2desc':'Practical training on electronic circuit design, testing, and real-world communication systems applications.',
    'edu.ieee':'IEEE Student Branch — Technology Team Member',
    'edu.ieeesub':'NUB University',
    'edu.ieeedesc':'Organizing technical events, workshops, and engineering projects within the student branch.',
    'cert1.title':'Machine Learning for Data Analysis','cert1.meta':'NTI · 2025 · 90h technical + 30h freelancing',
    'cert2.title':'Data Analysis Engineer','cert2.meta':'Ministry of Communications & IT + Microsoft · 2025',
    'cert3.title':'Cyber Security Academy','cert3.meta':'NTI · 2024 · 60h technical + 12h freelancing',
    'cert4.title':'Data Analysis for Business','cert4.meta':'LinkedIn Learning · 2024',

    'projects.label':'My Work','projects.title':'Featured Projects',
    'projects.viewLive':'View Live ↗','projects.gitHub':'GitHub ↗',
    'proj1.title':'Face Recognition System',
    'proj1.desc':'A real-time face detection and recognition system using computer vision techniques and machine learning. Capable of identifying and verifying individuals from live camera feeds or image datasets.',
    'proj2.title':'House Price Prediction',
    'proj2.desc':'A supervised machine learning model that predicts housing prices based on features like location, area, and amenities. Built with Scikit-learn using regression algorithms and feature engineering.',
    'proj3.title':'Business Analytics Dashboard',
    'proj3.desc':'An interactive Power BI dashboard providing real-time business intelligence, KPI tracking, and data visualization for decision-making. Connected to SQL data sources.',
    'proj4.title':'Microcontroller-Based Control System',
    'proj4.desc':'An embedded systems project designed and simulated in Proteus, implementing sensor integration, real-time control logic, and serial communication using Arduino and C/C++.',

    'testi.label':'What People Say','testi.title':'Testimonials',
    'testi1.text':'"Ahmed is a highly dedicated student who demonstrates exceptional analytical thinking. His work on machine learning projects during our course was among the most thorough and well-executed I\'ve seen."',
    'testi1.name':'Dr. [Mentor Name]','testi1.role':'ML Instructor — NTI',
    'testi2.text':'"During his internship at Maspero, Ahmed showed great initiative and a strong grasp of broadcasting systems fundamentals. He was eager to learn and contributed meaningfully to the team."',
    'testi2.name':'Eng. [Supervisor Name]','testi2.role':'Senior Engineer — Maspero',
    'testi3.text':'"Ahmed is a reliable and collaborative team member in our IEEE branch. He brings energy and technical knowledge to every workshop and project he participates in."',
    'testi3.name':'[IEEE Branch Lead]','testi3.role':'IEEE Student Branch — NUB',
    'testi.note':'* Testimonial names are placeholders — replace with real references upon request.',

    'contact.label':'Get In Touch','contact.title':"Let's Talk",
    'contact.intro':'Have a project, collaboration, or opportunity? I\'d love to hear from you. Reach out through any channel below or fill in the form.',
    'social.github':'GitHub Profile',
    'form.name':'Name','form.namePlaceholder':'Your full name',
    'form.email':'Email','form.emailPlaceholder':'your@email.com',
    'form.subject':'Subject','form.subjectPlaceholder':"What's this about?",
    'form.message':'Message','form.messagePlaceholder':'Your message here…',
    'form.send':'Send Message →',
    'form.success':"✓ Message sent! I'll be in touch soon.",
    'form.error':'✕ Please fill in all fields.',
    'freelance.heading':'Hire Me On',
    'footer.rights':'All rights reserved.','footer.made':'Built with ♥ and vanilla code.',
  },

  ar: {
    'nav.logo':'أ.أ','nav.about':'عني','nav.services':'خدماتي',
    'nav.education':'التعليم','nav.projects':'مشاريعي',
    'nav.testimonials':'آراء','nav.contact':'تواصل',

    'hero.eyebrow':'مرحباً، أنا','hero.name':'أحمد أشرف',
    'hero.tagline':'مطوّر ذكاء اصطناعي وتعلم آلة · هندسة الاتصالات والحاسبات',
    'hero.cta1':'عرض المشاريع','hero.cta2':'تواصل معي',
    'stat.internships':'تدريبات','stat.certs':'شهادات',

    'about.label':'عني','about.title':'من أنا',
    'about.bio':'أنا طالب هندسة اتصالات وحاسبات في جامعة NUB، ذو اهتمام قوي بالذكاء الاصطناعي وتعلم الآلة. أتممت دورة معتمدة في تعلم الآلة من NTI وعملت على مشاريع مثل التعرف على الوجوه والتنبؤ بأسعار المنازل. أسعى إلى تطبيق الحلول المبنية على البيانات لمشاكل هندسية حقيقية.',
    'about.bio2':'عضو حالي في فرع IEEE الطلابي (فريق التقنية)، أساهم في الفعاليات والورش الهندسية. منفتح على التعاون وفرص البحث والمشاريع التحديّة.',
    'about.skillsHeading':'المهارات الأساسية','about.contactBtn':'تواصل معي',
    'skill.ml':'تعلم الآلة','skill.python':'بايثون','skill.da':'تحليل البيانات',
    'skill.cv':'رؤية حاسوبية','skill.embedded':'أنظمة مدمجة','skill.powerbi':'Power BI',
    'skill.comms':'أنظمة الاتصالات','skill.microwave':'الميكروويف والألياف الضوئية',

    'services.label':'ماذا أقدّم','services.title':'الخدمات المقدّمة',
    'srv1.title':'تصميم العروض التقديمية',
    'srv1.desc':'تصميم عروض PowerPoint وCanva احترافية وجذابة بصرياً للأغراض الأكاديمية والتجارية والتقنية — واضحة ومنظمة ومؤثرة.',
    'srv2.title':'تصميم السيرة الذاتية',
    'srv2.desc':'إنشاء سير ذاتية عصرية وصديقة لأنظمة ATS تُبرز نقاط قوتك وخبراتك ومهاراتك بتصميم نظيف واحترافي مُخصص لهدفك الوظيفي.',
    'srv3.title':'تصميم البورتفوليو',
    'srv3.desc':'بناء مواقع بورتفوليو شخصية وعروض مرئية تعرض مشاريعك ومهاراتك وهويتك — متجاوبة وعصرية ومستضافة على GitHub Pages.',
    'srv4.title':'مشاريع تعلم الآلة',
    'srv4.desc':'تطوير مشاريع تعلم آلة كاملة من جمع البيانات ومعالجتها إلى تدريب النماذج وتقييمها ونشرها باستخدام Python وScikit-learn.',
    'srv5.title':'برمجة الأنظمة المدمجة',
    'srv5.desc':'برمجة وتصحيح تطبيقات المتحكمات الدقيقة بـ Arduino وARM وPIC بلغة C/C++، بما يشمل تكامل الاستشعار ومحاكاة Proteus.',
    'srv6.title':'تدريس الرياضيات والإحصاء',
    'srv6.desc':'تدريس الرياضيات والإحصاء لطلاب الهندسة وعلوم البيانات — الاحتمالات والجبر الخطي والتفاضل والإحصاء التطبيقي بشرح مبسط وواضح.',

    'edu.label':'المسيرة الأكاديمية','edu.title':'التعليم والشهادات',
    'edu.degreeHead':'الدرجة العلمية والتدريبات','edu.certsHead':'الدورات والشهادات',
    'edu.degree':'بكالوريوس هندسة الاتصالات والحاسبات',
    'edu.university':'جامعة NUB — القاهرة، مصر',
    'edu.gpa':'المعدل: 3.48 · التخرج المتوقع: 2027',
    'edu.intern1':'متدرب — الإذاعة والتليفزيون المصري (ماسبيرو)',
    'edu.intern1sub':'قسم أنظمة البث والاتصالات',
    'edu.intern1desc':'تجربة عملية مع أنظمة البث والإرسال، ومعالجة الإشارات، وصيانة البنية التحتية للاتصالات.',
    'edu.intern2':'متدرب — معهد بحوث الإلكترونيات (ERI)',
    'edu.intern2sub':'قسم الإلكترونيات والاتصالات',
    'edu.intern2desc':'تدريب عملي على تصميم الدوائر الإلكترونية واختبارها وتطبيقات أنظمة الاتصالات الحقيقية.',
    'edu.ieee':'عضو فريق التقنية — فرع IEEE الطلابي',
    'edu.ieeesub':'جامعة NUB',
    'edu.ieeedesc':'تنظيم الفعاليات التقنية والورش والمشاريع الهندسية ضمن الفرع الطلابي.',
    'cert1.title':'تعلم الآلة لتحليل البيانات','cert1.meta':'NTI · 2025 · 90 ساعة تقنية + 30 ساعة مهارات',
    'cert2.title':'مهندس تحليل البيانات','cert2.meta':'وزارة الاتصالات + مايكروسوفت · 2025',
    'cert3.title':'أكاديمية الأمن السيبراني','cert3.meta':'NTI · 2024 · 60 ساعة تقنية + 12 ساعة مهارات',
    'cert4.title':'تحليل البيانات للأعمال','cert4.meta':'LinkedIn Learning · 2024',

    'projects.label':'أعمالي','projects.title':'أبرز المشاريع',
    'projects.viewLive':'عرض مباشر ↗','projects.gitHub':'GitHub ↗',
    'proj1.title':'نظام التعرف على الوجوه',
    'proj1.desc':'نظام كشف وتعرف على الوجوه في الوقت الحقيقي باستخدام تقنيات الرؤية الحاسوبية وتعلم الآلة. قادر على التعرف والتحقق من الأفراد من كاميرات مباشرة أو مجموعات بيانات صور.',
    'proj2.title':'التنبؤ بأسعار المنازل',
    'proj2.desc':'نموذج تعلم آلة متدرَّب يتنبأ بأسعار المساكن بناءً على الموقع والمساحة والمرافق، مبني بـ Scikit-learn باستخدام خوارزميات الانحدار.',
    'proj3.title':'لوحة تحليلات الأعمال',
    'proj3.desc':'لوحة Power BI تفاعلية توفر ذكاء اعمالياً في الوقت الفعلي وتتبع المؤشرات وتصور البيانات لاتخاذ القرارات.',
    'proj4.title':'نظام تحكم بمتحكم دقيق',
    'proj4.desc':'مشروع أنظمة مدمجة مصمَّم ومحاكى في Proteus، يُنفّذ تكامل الاستشعار ومنطق التحكم الفوري والاتصال التسلسلي بـ Arduino وC/C++.',

    'testi.label':'ماذا يقولون','testi.title':'آراء وشهادات',
    'testi1.text':'"أحمد طالب مجتهد جداً يُظهر تفكيراً تحليلياً استثنائياً. كان عمله على مشاريع تعلم الآلة خلال الدورة من بين أكثر الأعمال شمولاً ودقة التي رأيتها."',
    'testi1.name':'د. [اسم المشرف]','testi1.role':'مدرب تعلم الآلة — NTI',
    'testi2.text':'"خلال تدريبه في ماسبيرو، أظهر أحمد مبادرة رائعة وفهماً قوياً لأساسيات أنظمة البث. كان حريصاً على التعلم وأسهم بشكل فعّال في الفريق."',
    'testi2.name':'م. [اسم المشرف]','testi2.role':'مهندس أول — ماسبيرو',
    'testi3.text':'"أحمد عضو موثوق ومتعاون في فرعنا في IEEE. يجلب طاقة ومعرفة تقنية لكل ورشة ومشروع يشارك فيه."',
    'testi3.name':'[قائد فرع IEEE]','testi3.role':'فرع IEEE الطلابي — NUB',
    'testi.note':'* أسماء الشهادات هي عناصر نائبة — استبدلها بمراجع حقيقية عند الطلب.',

    'contact.label':'تواصل','contact.title':'لنتحدث',
    'contact.intro':'هل لديك مشروع أو تعاون أو فرصة؟ يسعدني سماعك. تواصل عبر أي قناة أدناه أو املأ النموذج.',
    'social.github':'ملف GitHub',
    'form.name':'الاسم','form.namePlaceholder':'اسمك الكامل',
    'form.email':'البريد الإلكتروني','form.emailPlaceholder':'بريدك@email.com',
    'form.subject':'الموضوع','form.subjectPlaceholder':'عن ماذا يتحدث الأمر؟',
    'form.message':'الرسالة','form.messagePlaceholder':'اكتب رسالتك هنا…',
    'form.send':'إرسال الرسالة ←',
    'form.success':'✓ تم الإرسال! سأتواصل معك قريباً.',
    'form.error':'✕ يرجى ملء جميع الحقول.',
    'freelance.heading':'وظّفني على',
    'footer.rights':'جميع الحقوق محفوظة.','footer.made':'صُنع بـ ♥ وبرمجة خالصة.',
  }
};

/* ============================================================
   STATE
   ============================================================ */
let lang  = localStorage.getItem('portfolio-lang')  || 'en';
let theme = localStorage.getItem('portfolio-theme') || 'dark';

/* ============================================================
   HELPERS
   ============================================================ */
function applyLang(l) {
  const dict = T[l] || T.en;
  const html  = document.documentElement;
  html.lang = l;
  html.dir  = l === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n')];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = dict[el.getAttribute('data-i18n-placeholder')];
    if (v !== undefined) el.placeholder = v;
  });

  const lbl = document.getElementById('lang-label');
  if (lbl) lbl.textContent = l === 'ar' ? 'EN' : 'AR';

  localStorage.setItem('portfolio-lang', l);
  lang = l;
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('portfolio-theme', t);
  theme = t;
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved preferences
  applyTheme(theme);
  applyLang(lang);

  // Footer year
  const yr = document.getElementById('footer-year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  // Language toggle
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLang(lang === 'en' ? 'ar' : 'en');
  });

  // Mobile hamburger
  const burger = document.getElementById('nav-hamburger');
  const menu   = document.getElementById('mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
      menu.setAttribute('aria-hidden', String(!open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
    }));
  }

  // Sticky header
  const hdr = document.getElementById('site-header');
  if (hdr) {
    const onS = () => hdr.classList.toggle('scrolled', scrollY > 20);
    window.addEventListener('scroll', onS, { passive: true });
    onS();
  }

  // Scroll reveal
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && items.length) {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.11, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach(el => obs.observe(el));
  } else {
    items.forEach(el => el.classList.add('visible'));
  }

  // Back to top
  const btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('visible', scrollY > 400), { passive: true });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Contact form feedback
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const dict = T[lang] || T.en;
      form.querySelector('.form-feedback')?.remove();
      const fb = document.createElement('p');
      fb.className = 'form-feedback';
      const allFilled = ['name','email','subject','message'].every(id => form.querySelector(`#${id}`)?.value.trim());
      if (!allFilled) {
        fb.textContent = dict['form.error'];
        fb.style.cssText = 'color:#ff6b6b;font-size:.88rem;margin-top:.75rem';
      } else {
        fb.textContent = dict['form.success'];
        fb.style.cssText = 'color:var(--accent);font-size:.88rem;margin-top:.75rem';
        form.reset();
      }
      form.appendChild(fb);
    });
  }
});
