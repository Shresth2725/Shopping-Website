const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-1">Foodie Town</h2>
            <p className="text-sm text-gray-400">Building better UI, one component at a time.</p>
          </div>
  
          {/* Center Section: Links */}
          <div className="flex space-x-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/about" className="hover:text-white transition">About</a>
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/grocery" className="hover:text-white transition">Grocery</a>
          </div>
  
          {/* Right Section: Social */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-github"></i> {/* Add Font Awesome or replace with SVG */}
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
  
        {/* Bottom Line */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Foodie Town. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  