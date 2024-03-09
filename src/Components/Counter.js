// Counter.js
import React, { useEffect } from 'react';

function Counter() {
  useEffect(() => {
    const storedCount = localStorage.getItem("downloadCount");
    const initialCount = storedCount ? Number(storedCount) : 0;
    localStorage.setItem("downloadCount", initialCount + 1);
  }, []);

  const downloadCount = localStorage.getItem("downloadCount");

  return (
    <div>
      Total Downloads: {downloadCount}
    </div>
  );
}

export default Counter;
