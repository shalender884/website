import { IoSearchOutline, IoArrowForward, IoStar, IoAdd } from 'react-icons/io5';
import { FaFire } from 'react-icons/fa'; // For "Hot" deals

export const Main = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="container mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
            <FaFire /> <span>Free delivery on your first order!</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            Craving? We <span className="text-orange-500">Deliver</span> In Minutes.
          </h1>
          <p className="text-lg text-gray-500 max-w-md leading-relaxed">
            Choose from over 5,000 restaurants and get your favorite meals delivered fresh to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all flex items-center gap-2 group">
              Order Now <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all">
              View Menu
            </button>
          </div>
        </div>

        {/* Hero Image / Illustration Placeholder */}
        <div className="flex-1 relative">
          <div className="w-full h-100 lg:h-125 bg-gray-100 rounded-[40px] overflow-hidden relative shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000" 
               alt="Delicious Food" 
               className="w-full h-full object-cover"
             />
          </div>
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <IoStar size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">4.9/5 Rating</p>
                <p className="text-xs text-gray-500">From 10k+ users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Categories */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900">Popular Categories</h2>
              <p className="text-gray-500 mt-2">Explore the best food in your city</p>
            </div>
            <button className="text-orange-500 font-bold hover:underline flex items-center gap-1">
              See all <IoArrowForward />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <CategoryCard emoji="🍕" label="Pizza" />
            <CategoryCard emoji="🍔" label="Burgers" />
            <CategoryCard emoji="🍣" label="Sushi" />
            <CategoryCard emoji="🥗" label="Salads" />
            <CategoryCard emoji="🍰" label="Desserts" />
            <CategoryCard emoji="🍜" label="Asian" />
          </div>
        </div>
      </section>
    </main>
  );
};

// Helper Components
const CategoryCard = ({ emoji, label }: { emoji: string; label: string }) => (
  <div className="bg-white p-6 rounded-3xl text-center border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100 transition-all cursor-pointer group">
    <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{emoji}</span>
    <span className="text-sm font-bold text-gray-700">{label}</span>
  </div>
);