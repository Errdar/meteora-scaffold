import { cn } from '@/lib/utils';

type DemoNoticeProps = {
  className?: string;
};

export const DemoNotice: React.FC<DemoNoticeProps> = ({ className }) => {
  return (
    <div className={cn(
      'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 mb-6',
      className
    )}>
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <span className="iconify ph--info-bold w-5 h-5 text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-blue-300 mb-1">
            Demo Mode
          </h3>
          <p className="text-xs text-blue-200/80">
            This is a demonstration of the Fun Launch template. All data shown is simulated for showcase purposes.
            In production, this would connect to real Solana networks and display live token data.
          </p>
        </div>
      </div>
    </div>
  );
};