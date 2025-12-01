import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint); // Initialize with false

  useEffect(() => {
    // Ensure window is defined for SSR compatibility
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < breakpoint);
      };

      // Set initial state
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [breakpoint]); // Re-run effect if breakpoint changes

  return isMobile;
};

export default useIsMobile;