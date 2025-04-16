import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function FooterSection({ language }) {
  return (
    <footer className="mt-12">
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center text-white text-sm py-6 border-t border-gray-600">
        
        {/* Sol taraf */}
        <div className="flex flex-col items-start">
          <p className="text-xs">&copy; 2025 Tolga Topçu</p>
          <a
            href="mailto:tolgatpc200478@gmail.com"
            className="text-xs hover:text-purpleAccent"
          >
            tolgatpc200478@gmail.com
          </a>
        </div>

        {/* Sağ taraf */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/tolga-top%C3%A7u-53611a273"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purpleAccent"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/tolgatopcu1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purpleAccent"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
