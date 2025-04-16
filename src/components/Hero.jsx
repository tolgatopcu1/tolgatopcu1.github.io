import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react"; // Gerekli ikonlar
import heroImg from '/assets/hero.webp';

export default function Hero({ language }) {
  return (
    <section
      id="hero"
      className="min-h-screen bg-dark text-white flex items-center justify-center px-4 md:px-10 font-montserrat"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 py-10">
        
        {/* Sol: Fotoğraf + animasyonlu border */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-40 h-40 md:w-64 md:h-64 rounded-xl overflow-hidden border-4 border-purpleAccent"
        >
          <img
            src={heroImg}
            alt="Tolga Topçu Portfolyo Görseli"
            className="object-cover w-full h-full rounded-xl"
          />

          <motion.div className="absolute top-0 left-0 w-full h-full rounded-xl z-20 pointer-events-none">
            <motion.div
              className="absolute w-2 h-2 bg-purpleAccent rounded-full"
              animate={{
                pathLength: [0, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                boxShadow: "0 0 10px #7f5af0",
                top: 0,
                left: "50%",
                transformOrigin: "center",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Sağ: Yazılar */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {language === "tr" ? "Merhaba, ben Tolga Topçu" : "Hello, I'm Tolga Topçu"}
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            {language === "tr"
              ? "Bilgisayar Mühendisliği Öğrencisiyim"
              : "I'm a Computer Engineer Student"}
          </p>
          <p className="text-lg md:text-xl mt-2 font-light">
            {language === "tr"
              ? "Full Stack Geliştiriciyim 💻"
              : "I'm a Full Stack Developer 💻"}
          </p>

          {/* CV Butonları */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start"
          >
            {/* Görüntüle Butonu */}
            <a
              href="./cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 bg-purple-700 text-white py-3 px-6 rounded-lg overflow-hidden group text-sm md:text-base font-semibold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-900 opacity-60 animate-snake-border z-0" />
              <span className="relative z-10 flex items-center gap-2">
                <FileText size={18} />
                {language === "tr" ? "CV'yi Görüntüle" : "View CV"}
              </span>
            </a>

            {/* İndir Butonu */}
            <a
              href="./cv.pdf"
              download
              className="relative inline-flex items-center gap-2 border border-purple-700 text-purple-300 py-3 px-6 rounded-lg overflow-hidden group text-sm md:text-base font-semibold hover:bg-purple-800/20 transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={18} />
                {language === "tr" ? "CV'yi İndir" : "Download CV"}
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
