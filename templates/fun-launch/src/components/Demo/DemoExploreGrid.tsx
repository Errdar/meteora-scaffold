import { ExploreTab } from '@/components/Explore/types';
import { TokenCard } from '@/components/TokenCard/TokenCard';
import { DEMO_POOLS } from '@/lib/demo-data';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ExploreTabTitleMap: Record<ExploreTab, string> = {
  [ExploreTab.NEW]: 'New',
  [ExploreTab.GRADUATING]: 'Soon',
  [ExploreTab.GRADUATED]: 'Bonded',
};

export const DemoExploreGrid = () => {
  const [activeTab, setActiveTab] = useState<ExploreTab>(ExploreTab.NEW);

  const getPoolsForTab = (tab: ExploreTab) => {
    switch (tab) {
      case ExploreTab.NEW:
        return DEMO_POOLS.filter(p => !p.baseAsset.graduatedPool && (p.bondingCurve || 0) < 80);
      case ExploreTab.GRADUATING:
        return DEMO_POOLS.filter(p => !p.baseAsset.graduatedPool && (p.bondingCurve || 0) >= 80);
      case ExploreTab.GRADUATED:
        return DEMO_POOLS.filter(p => p.baseAsset.graduatedPool);
      default:
        return [];
    }
  };

  const pools = getPoolsForTab(activeTab);

  return (
    <div className="border border-neutral-850 rounded-xl overflow-hidden">
      {/* Mobile Tabs */}
      <div className="border-b border-neutral-850 bg-black/50">
        <div className="flex">
          {Object.values(ExploreTab).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'flex-1 px-4 py-3 text-sm font-medium transition-colors',
                activeTab === tab
                  ? 'bg-primary/10 text-primary border-b-2 border-primary'
                  : 'text-neutral-400 hover:text-neutral-200'
              )}
            >
              {ExploreTabTitleMap[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="space-y-2">
          {pools.length > 0 ? (
            pools.map((pool) => (
              <div key={pool.id} className="border border-neutral-800 rounded-lg">
                <TokenCard
                  pool={pool}
                  timeframe="24h"
                  rowRef={() => {}}
                />
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-neutral-500">
              No tokens in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};