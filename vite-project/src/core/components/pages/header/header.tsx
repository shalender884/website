import { IoFastFoodOutline, IoCartOutline, IoSearchOutline, IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { HiOutlineLocationMarker } from 'react-icons/hi'; 
import { routes } from '../../routing/routes';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Delivery Location */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-orange-500 p-2 rounded-2xl shadow-orange-200 shadow-lg">
              <IoFastFoodOutline className="text-white text-2xl" />
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">
              Food<span className="text-orange-500">Dash</span>
            </span>
          </div>

          {/* Delivery Address (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition-all">
            <HiOutlineLocationMarker className="text-orange-500 text-lg" />
            <span>Deliver to: <span className="text-gray-900">San Francisco, CA</span></span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-8">
          <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input 
            type="text" 
            placeholder="Search for sushi, burgers, or pasta..."
            className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-sm"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-5">
            <div> 
                       
           <button className="hidden sm:block text-sm font-bold text-gray-700 hover:text-orange-500 transition-colors">
           <Link to={routes.authPage}> 
           Sign In 
           </Link>         
          </button>
            </div>
       
          <button className="relative p-3 bg-gray-900 text-white rounded-2xl hover:bg-orange-500 transition-all shadow-lg shadow-gray-200 active:scale-95">
            <IoCartOutline size={24} />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white border-2 border-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          <button className="md:hidden p-2 text-gray-900">
            <IoMenuOutline size={30} />
          </button>
        </div>
      </div>
    </header>
  );
};