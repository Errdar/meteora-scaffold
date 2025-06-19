import { DemoNotice } from '@/components/Demo/DemoNotice';
import { TokenCard } from '@/components/TokenCard/TokenCard';
import Page from '@/components/ui/Page/Page';
import { DEMO_POOLS } from '@/lib/demo-data';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DemoPage() {
  const [selectedPool, setSelectedPool] = useState(DEMO_POOLS[0]);

  return (
    <Page>
      <DemoNotice />
      
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Fun Launch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A modern platform for launching tokens with customizable price curves on Solana
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/create-pool">
              <Button className="w-full sm:w-auto">
                <span className="iconify ph--rocket-bold w-5 h-5 mr-2" />
                Create Pool
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full sm:w-auto bg-white/10 hover:bg-white/20">
                Explore Tokens
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="ph--chart-line-up-bold"
            title="Dynamic Bonding Curves"
            description="Launch tokens with customizable price curves that adapt to market conditions"
          />
          <FeatureCard
            icon="ph--shield-check-bold"
            title="Security First"
            description="Built-in audit checks and security features to protect your token launch"
          />
          <FeatureCard
            icon="ph--lightning-bold"
            title="Instant Trading"
            description="Integrated Jupiter terminal for seamless token swapping"
          />
        </div>

        {/* Demo Token Cards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Demo Tokens</h2>
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            {DEMO_POOLS.map((pool) => (
              <div key={pool.id} className="border border-neutral-700 rounded-lg">
                <TokenCard
                  pool={pool}
                  timeframe="24h"
                  rowRef={() => {}}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
          <h2 className="text-2xl font-bold mb-6 text-center">Built With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <TechItem name="Next.js" description="React Framework" />
            <TechItem name="TypeScript" description="Type Safety" />
            <TechItem name="Tailwind CSS" description="Styling" />
            <TechItem name="Solana Web3.js" description="Blockchain" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-4 py-12">
          <h2 className="text-3xl font-bold">Ready to Launch?</h2>
          <p className="text-gray-300 max-w-lg mx-auto">
            Start creating your own token pools with customizable bonding curves
          </p>
          <Link href="/create-pool">
            <Button size="lg" className="text-lg px-8 py-4">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </Page>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg">
          <span className={`iconify ${icon} w-6 h-6 text-white`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function TechItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="space-y-2">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </div>
  );
}