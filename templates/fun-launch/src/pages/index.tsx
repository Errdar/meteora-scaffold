import { DemoNotice } from '@/components/Demo/DemoNotice';
import { DemoExploreGrid } from '@/components/Demo/DemoExploreGrid';
import Page from '@/components/ui/Page/Page';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <Page>
      <DemoNotice />
      
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Fun Launch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Launch tokens with customizable price curves on Solana. Create dynamic bonding curves, 
            manage liquidity, and build thriving token communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/create-pool">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4">
                <span className="iconify ph--rocket-bold w-5 h-5 mr-2" />
                Launch Token
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-lg px-8 py-4">
                <span className="iconify ph--play-bold w-5 h-5 mr-2" />
                View Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="ph--chart-line-up-bold"
            title="Dynamic Bonding Curves"
            description="Create customizable price curves that respond to market dynamics and trading activity"
            gradient="from-blue-500 to-cyan-500"
          />
          <FeatureCard
            icon="ph--shield-check-bold"
            title="Security & Audits"
            description="Built-in security checks, audit scores, and holder distribution analysis"
            gradient="from-green-500 to-emerald-500"
          />
          <FeatureCard
            icon="ph--lightning-bold"
            title="Instant Trading"
            description="Integrated Jupiter terminal for seamless swapping and liquidity provision"
            gradient="from-purple-500 to-pink-500"
          />
        </div>

        {/* Live Tokens */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Explore Tokens</h2>
            <p className="text-gray-300">Discover trending tokens across different stages</p>
          </div>
          <DemoExploreGrid />
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-pink-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="1,234" label="Tokens Launched" />
            <StatItem number="$2.5M" label="Total Volume" />
            <StatItem number="5,678" label="Active Traders" />
            <StatItem number="98%" label="Success Rate" />
          </div>
        </div>

        {/* How It Works */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-300">Launch your token in three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard
              step="1"
              title="Create Token"
              description="Upload your token metadata, logo, and configure initial parameters"
            />
            <StepCard
              step="2"
              title="Set Curve"
              description="Choose your bonding curve parameters and pricing strategy"
            />
            <StepCard
              step="3"
              title="Launch & Trade"
              description="Deploy your token and start trading with built-in liquidity"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

function FeatureCard({ icon, title, description, gradient }: {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`bg-gradient-to-r ${gradient} p-4 rounded-xl`}>
          <span className={`iconify ${icon} w-8 h-8 text-white`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">
        {number}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function StepCard({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
      <div className="absolute -top-4 left-6">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
          {step}
        </div>
      </div>
      <div className="pt-4 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}