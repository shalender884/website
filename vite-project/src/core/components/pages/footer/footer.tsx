import { FaFacebookF, FaInstagram, FaTwitter, FaAppStore, FaGooglePlay } from 'react-icons/fa';
import { IoFastFoodOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Branding and Apps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-1.5 rounded-lg text-white">
                <IoFastFoodOutline size={24} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Food<span className="text-orange-500">Dash</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing the fastest delivery and the best food experience for our customers. Your favorite meals, just a tap away.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaTwitter />} />
            </div>
          </div>

          {/* Quick Links Columns */}
          <FooterColumn 
            title="Company" 
            links={['About Us', 'Careers', 'Our Team', 'Blog']} 
          />
          <FooterColumn 
            title="Support" 
            links={['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy']} 
          />

          {/* Contact & Apps */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Experience our App</h4>
            <div className="space-y-3">
              <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 w-full px-4 py-2.5 rounded-xl border border-gray-700 transition-all group">
                <FaAppStore size={24} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none text-gray-400">Download on the</p>
                  <p className="text-sm font-bold text-white group-hover:text-orange-500">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 w-full px-4 py-2.5 rounded-xl border border-gray-700 transition-all group">
                <FaGooglePlay size={20} className="text-white" />
                <div className="text-left">
                  <p className="text-[10px] uppercase leading-none text-gray-400">Get it on</p>
                  <p className="text-sm font-bold text-white group-hover:text-orange-500">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Newsletter Placeholder */}
        <div className="border-y border-gray-800 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-500">Get the latest coupons and restaurant updates.</p>
          </div>
          <div className="flex w-full md:w-auto bg-gray-800 p-1.5 rounded-2xl border border-gray-700">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent px-4 py-2 outline-none text-sm w-full md:w-64"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2 rounded-xl transition-all">
              Join
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} FoodDash Delivery Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <IoMailOutline /> support@fooddash.com
            </span>
            <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
              <IoCallOutline /> (555) 000-1234
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-components for cleaner code
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all shadow-lg">
    {icon}
  </a>
);

const FooterColumn = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">{title}</h4>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-sm hover:text-orange-500 transition-colors">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);