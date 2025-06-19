import { TokenCard } from '@/components/TokenCard/TokenCard';
import { DEMO_POOLS } from '@/lib/demo-data';
import { cn } from '@/lib/utils';

type DemoTokenListProps = {
  className?: string;
};

export const DemoTokenList: React.FC<DemoTokenListProps> = ({ className }) => {
  return (
    <div className={cn('space-y-4', className)}>
      <h3 className="text-lg font-semibold mb-4">Demo Tokens</h3>
      <div className="space-y-2">
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
  );
};