const Footer = () => {
  return (
    <footer className="bg-[#050816] text-white py-6 px-10 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Disha Chopra. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/DISHA07-debug" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/disha-chopra-116244339" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

