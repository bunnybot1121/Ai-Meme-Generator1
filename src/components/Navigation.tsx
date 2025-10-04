import { Home, Wand2, Users, User, Trophy } from 'lucide-react';

interface NavigationProps {
  activeTab: 'home' | 'generate' | 'community' | 'profile' | 'challenges';
  onTabChange: (tab: 'home' | 'generate' | 'community' | 'profile' | 'challenges') => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'generate', label: 'Generate', icon: Wand2 },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User }
  ] as const;

  return (
    <>
      <nav className="hidden md:flex items-center justify-between px-8 py-4 bg-gradient-to-r from-amber-950/90 via-amber-900/80 to-amber-950/90 backdrop-blur-lg border-b border-orange-900/50 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
            <img src="/WhatsApp Image 2025-10-04 at 20.48.00.jpeg" alt="MemeGen" className="w-full h-full rounded-2xl object-cover" />
          </div>
          <h1 className="text-2xl font-bold tracking-wider text-orange-500">MEMEGEN</h1>
        </div>

        <div className="flex items-center space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-amber-900/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-950/95 via-amber-900/95 to-amber-950/95 backdrop-blur-lg border-t border-orange-900/50 z-50">
        <div className="flex items-center justify-around px-4 py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-orange-500'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="w-1 h-1 bg-orange-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
