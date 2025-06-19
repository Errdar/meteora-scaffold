import { useQuery } from '@tanstack/react-query';
import { DEMO_POOLS } from '@/lib/demo-data';
import { Pool } from '@/contexts/types';

// Mock the explore data with demo pools
export function useDemoExploreData() {
  return useQuery({
    queryKey: ['demo-explore'],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return {
        recent: { pools: DEMO_POOLS.slice(0, 2) },
        aboutToGraduate: { pools: DEMO_POOLS.slice(1, 2) },
        graduated: { pools: DEMO_POOLS.slice(2, 3) },
        args: {
          recent: { timeframe: '24h' as const },
          aboutToGraduate: { timeframe: '24h' as const },
          graduated: { timeframe: '24h' as const },
        }
      };
    },
    refetchInterval: 30000,
  });
}

// Mock individual token data
export function useDemoTokenData(tokenId: string) {
  return useQuery({
    queryKey: ['demo-token', tokenId],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const pool = DEMO_POOLS.find(p => p.baseAsset.id === tokenId);
      if (!pool) {
        throw new Error('Token not found');
      }
      
      return pool;
    },
    refetchInterval: 60000,
  });
}