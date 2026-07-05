import { TOOLS, CATEGORIES } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { useFavorites } from '../hooks/useFavorites';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const { favorites } = useFavorites();
  const favoriteTools = TOOLS.filter(tool => favorites.includes(tool.id));
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <section className="shrink-0 mb-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-900">Hauling & Delivery Planning</h2>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed">
              Calculate hauling costs, plan delivery routes, and optimize fuel efficiency for rural and agricultural operations. Part of the Rural Ops Tools ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex flex-col items-center min-w-[120px]">
              <span className="text-[10px] uppercase text-blue-600 font-bold">Empty Miles</span>
              <span className="text-xl font-bold text-blue-900 text-center">-12.4%</span>
            </div>
            <div className="bg-green-50 border border-green-100 p-3 rounded-lg flex flex-col items-center min-w-[120px]">
              <span className="text-[10px] uppercase text-green-600 font-bold">Avg Cost/Mi</span>
              <span className="text-xl font-bold text-green-900 text-center">$2.42</span>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4 flex flex-col gap-8">
          {CATEGORIES.map(category => {
            const categoryTools = TOOLS.filter(t => t.category === category);
            if (categoryTools.length === 0) return null;
            
            return (
              <div key={category}>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {categoryTools.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:w-1/4 flex flex-col gap-4">
          <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">My Favorites</h4>
              <Link to="/favorites" className="text-xs text-[#1e3a8a] font-semibold hover:underline">View All</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              {favoriteTools.length > 0 ? (
                favoriteTools.slice(0, 4).map(tool => (
                  <Link key={tool.id} to={tool.path} className="bg-white p-2.5 rounded shadow-sm flex items-center justify-between gap-3 border-l-2 border-red-500 hover:bg-slate-50 transition-colors">
                    <span className="text-xs font-semibold text-slate-800 truncate">{tool.title}</span>
                    <span className="text-[10px] text-slate-400 shrink-0">Tool</span>
                  </Link>
                ))
              ) : (
                <div className="text-center py-6">
                  <Heart className="h-6 w-6 text-slate-300 mx-auto mb-2" />
                  <p className="text-xs text-slate-500">No favorites yet</p>
                </div>
              )}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-2 tracking-widest">About Transport</h4>
              <p className="text-[11px] leading-relaxed text-slate-600">
                Dedicated logistics support for rural producers. These tools provide decision support based on regional averages and user data.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 p-4 border border-amber-100 rounded-xl mt-2">
            <h4 className="text-[10px] font-bold text-amber-700 uppercase tracking-widest flex items-center justify-between">
              <span>Legal Notice</span>
              <a href="/disclaimer" className="text-[#1e3a8a] normal-case tracking-normal hover:underline">Full Disclaimer</a>
            </h4>
            <p className="text-[11px] text-amber-800 leading-relaxed mt-2">
              Estimates only. Results depend on variables like market fuel prices and operator overhead. Verify critical decisions independently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
