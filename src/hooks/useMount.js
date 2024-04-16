import { useEffect, useState } from 'react';

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log('=========');
    setMounted(true);
  }, []);

  return mounted;
}
