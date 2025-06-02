import { useEffect, useState } from 'react';

export function useHeaderHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('main-header');
    const updateHeight = () => {
      if (header) {
        setHeight(header.offsetHeight);
      }
    };

    updateHeight(); // Initial

    const observer = new ResizeObserver(updateHeight);
    if (header) observer.observe(header);

    return () => observer.disconnect();
  }, []);
  
  return height;
}
