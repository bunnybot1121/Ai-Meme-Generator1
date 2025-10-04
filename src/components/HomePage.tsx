import { Wand2, Users, Zap, TrendingUp } from 'lucide-react';
import Button from './Button';
import Card from './Card';

interface HomePageProps {
  onNavigate: (tab: 'generate' | 'community') => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: Wand2,
      title: 'EASY GENERATION',
      description: 'Create hilarious memes in seconds with our intuitive interface and powerful tools'
    },
    {
      icon: Users,
      title: 'COMMUNITY',
      description: 'Share your creations and connect with thousands of meme enthusiasts worldwide'
    },
    {
      icon: Zap,
      title: 'LIGHTNING FAST',
      description: 'No waiting around. Generate and download your memes instantly with zero lag'
    },
    {
      icon: TrendingUp,
      title: 'TRENDING TEMPLATES',
      description: 'Access the hottest and most viral meme templates from across the internet'
    }
  ];

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center animate-float shadow-2xl shadow-orange-500/50 p-1">
              <img src="/WhatsApp Image 2025-10-04 at 21.25.20.jpeg" alt="MemeGen" className="w-full h-full rounded-3xl object-cover" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-white">Ready to</span>
            <br />
            <span className="text-gradient text-6xl md:text-8xl">Meme</span>
            <br />
            <span className="text-white">Your Dreams?</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of creators making the internet funnier, one meme at a time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => onNavigate('generate')}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white px-8 shadow-lg shadow-orange-500/30"
            >
              <Wand2 className="w-5 h-5 mr-2" />
              LET'S GO
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                hover
                className="text-left space-y-4 p-6 bg-gradient-to-br from-amber-950/50 to-amber-900/30 border border-orange-900/30 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="relative">
          <Card className="p-8 md:p-12 text-center space-y-6 bg-gradient-to-br from-amber-950/60 to-amber-900/40 border-2 border-orange-600/30">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full shadow-lg">
              <span className="text-sm font-bold text-white tracking-wider">PRO TIP</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold">
              Press <kbd className="px-4 py-2 bg-amber-900/50 rounded-lg border-2 border-orange-600 text-orange-400 font-bold">Space</kbd> for Random
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Can't decide which template to use? Hit that spacebar and let fate decide your meme destiny.
            </p>
          </Card>
        </div>

        <div className="text-center space-y-8">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight" style={{
              textShadow: '0 0 30px rgba(249, 115, 22, 0.5), 0 0 60px rgba(249, 115, 22, 0.3)',
              background: 'linear-gradient(180deg, #fff 0%, #fbbf24 50%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              CREATE MEMES
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your genius ideas deserve the perfect meme template. Pick, customize, share, and watch the laughs roll in.
          </p>
          <div className="space-y-4">
            <Button
              onClick={() => onNavigate('generate')}
              size="lg"
              className="px-16 py-4 bg-orange-600 hover:bg-orange-500 text-white text-lg font-bold shadow-xl shadow-orange-500/30"
            >
              START CREATING
            </Button>
            <div className="text-sm text-gray-500 uppercase tracking-wider">EXPLORE COMMUNITY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
