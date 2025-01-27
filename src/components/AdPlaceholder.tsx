import { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  className?: string;
  adClient?: string;
  adSlot?: string;
}

const AdPlaceholder = ({ className = "", adClient = "", adSlot = "" }: AdPlaceholderProps) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const adsbygoogle = (window as any).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
      }
    } catch (err) {
      console.error('Ad loading error:', err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdPlaceholder;