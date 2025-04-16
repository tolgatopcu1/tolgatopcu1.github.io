import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tabs = ['about', 'skills', 'experience'];

export default function AboutSection({ language }) {
  const [activeTab, setActiveTab] = useState('about');
  const [scale, setScale] = useState(1); // Scale için durum

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    initial: (direction) => ({
      x: direction === 'left' ? -100 : 100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const getDirection = (next) => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = tabs.indexOf(next);
    return nextIndex > currentIndex ? 'right' : 'left';
  };

  const getContent = () => {
    if (language === 'tr') {
      if (activeTab === 'about') {
        return (
          <>
            <p>
              Merhaba, ben Tolga Topçu. İstanbul Ticaret Üniversitesi'nde Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. Lise yıllarımdan bu yana bilgisayar ve teknolojiyle iç içeyim. Özellikle yazılım geliştirme alanında çözüm üretmeyi seviyor, yeni teknolojileri öğrenmeye hevesle yaklaşıyorum.
            </p>
            <br></br>

      
            <p>
              Yeni teknolojilere hızla uyum sağlayan biri olarak, hem geçmişi anlamaya hem de geleceği şekillendirmeye önem veriyorum. Yazılım dünyasında yeni projeler geliştirmek, üretken ve yenilikçi çözümler sunmak benim için büyük bir heyecan kaynağı.
            </p>
          </>
        );
      }

      if (activeTab === 'skills') {
        return (
          <div className="space-y-6 text-sm text-gray-300">
            <p className="text-base leading-relaxed">
              Full-stack geliştirici olma yolunda, <strong className="text-white">React.js</strong> kullanarak modern kullanıcı arayüzleri oluşturuyorum. Aynı zamanda, <strong className="text-white">ASP.NET Core Web API</strong> gibi backend teknolojileriyle, uygulamaların güvenilir ve ölçeklenebilir servisler sunmasını sağlıyorum. Böylece, projelerimde frontend ve backend arasında etkili bir uyum yakalayarak, kullanıcı dostu çözümler üretiyorum.
            </p>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">🧠 Backend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>ASP.NET Core</li>
                  <li>C#</li>
                  <li>RESTful API</li>
                  <li>JWT Authentication</li>
                  <li>Entity Framework Core</li>
                </ul>
              </div>
      
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">🎨 Frontend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React.js</li>
                  <li>Redux Toolkit</li>
                  <li>TypeScript</li>
                  <li>HTML / CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
      
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">💾 Data Stores</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>SQL (MSSQL, PostgreSQL, MySQL)</li>
                  <li>NoSQL (MongoDB)</li>
                </ul>
              </div>
      
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">⚙️ Web Servers & Tools</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Docker</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }
      
      return (
        <>
          <p className="mb-4 text-gray-300">
            Profesyonel olarak bir şirkette çalışmamış olsam da, son 2 yıldır bireysel ve ekip halinde çeşitli yazılım projeleri geliştiriyorum. Üniversite'de edindiğim teorik bilgileri, pratik projelerle destekleyerek gerçek dünya senaryolarına uygun çözümler üretmeye odaklandım.
          </p>
          <p className="text-gray-300">
            Grup çalışmaları sayesinde takım içi iletişim, proje yönetimi ve sorumluluk alma gibi becerilerimi de pekiştirdim. Her yeni projede hem teknik yetkinliğimi artırıyor hem de üretken kalmaya devam ediyorum.
          </p>
        </>
      );
    } else {
      if (activeTab === 'about')
        return (
          <>
            <p>
              Hello, I'm Tolga Topçu. I'm a second-year Computer Engineering student at Istanbul Ticaret University. I've been passionate about computers and technology since high school. I enjoy solving problems in software development and approach learning new technologies with great enthusiasm.
            </p>
            <br />
      
            <p>
              As someone who quickly adapts to new technologies, I value understanding the past while also aiming to shape the future. Developing new projects and offering productive, innovative solutions in the world of software is a major source of excitement for me.
            </p>
          </>
        );
      if (activeTab === 'skills')
        return (
          <div className="space-y-6 text-sm text-gray-300">
            <p className="text-base leading-relaxed">
              On my journey to becoming a full-stack developer, I build modern user interfaces using <strong className="text-white">React.js</strong>. At the same time, I work with backend technologies like <strong className="text-white">ASP.NET Core Web API</strong> to ensure applications provide reliable and scalable services. This way, I create user-friendly solutions by achieving effective harmony between frontend and backend in my projects.
            </p>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">🧠 Backend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>ASP.NET Core</li>
                  <li>C#</li>
                  <li>RESTful API</li>
                  <li>JWT Authentication</li>
                  <li>Entity Framework Core</li>
                </ul>
              </div>
        
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">🎨 Frontend</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>React.js</li>
                  <li>Redux Toolkit</li>
                  <li>TypeScript</li>
                  <li>HTML / CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
        
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">💾 Data Stores</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>SQL (MSSQL, PostgreSQL, MySQL)</li>
                  <li>NoSQL (MongoDB)</li>
                </ul>
              </div>
        
              <div className="bg-[#1f1f1f] p-4 rounded-2xl shadow-lg border border-[#2d2d2d]">
                <h3 className="text-white text-lg font-semibold mb-2">⚙️ Web Servers & Tools</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Docker</li>
                  <li>Git & GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        );
        
        return (
          <>
            <p className="mb-4 text-gray-300">
              Although I haven't worked professionally in a company, I’ve been developing various software projects individually and in teams for the past two years. I've focused on turning the theoretical knowledge I gained at university into practical projects that offer real-world solutions.
            </p>
            <p className="text-gray-300">
              Through group projects, I've strengthened my skills in team communication, project management, and taking responsibility. With each new project, I continue to grow technically and stay productive.
            </p>
          </>
        );
        
    }
  };

  // Tab tıklama işlemi
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setScale(0.9);  // Sekme tıklandığında küçülme
    setTimeout(() => setScale(1), 200); // 200ms sonra büyüme
  };

  return (
    <section id="about" className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center py-5 px-4 md:px-10 font-dmMono">
      <motion.div
        ref={ref}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-full max-w-4xl p-6 rounded-xl shadow-lg overflow-hidden bg-[#2c2c2c]"
      >
        {/* Animasyonlu dikdörtgen (büyüme/küçülme efekti) - Morluk Kaldırıldı */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 border-2 border-transparent bg-transparent pointer-events-none z-0"
        />

        {/* İçerik */}
        <div className="relative z-10">
          {/* Sekmeler */}
          <div className="flex justify-center space-x-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`text-sm md:text-base px-4 py-2 rounded transition-colors font-bold ${
                  activeTab === tab
                    ? 'bg-purpleAccent text-dark'
                    : 'bg-transparent text-gray-300 hover:text-purpleAccent'
                }`}
              >
                {language === 'tr'
                  ? tab === 'about'
                    ? 'Hakkımda'
                    : tab === 'skills'
                    ? 'Yetenekler'
                    : 'Deneyimler'
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Alt metin içerik */}
          <motion.div
            key={activeTab + language}
            custom={getDirection(activeTab)}
            initial="initial"
            animate="animate"
            variants={variants}
            className="text-center text-lg text-gray-300"
          >
            {getContent()}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
