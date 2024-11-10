
import { useEffect, useState } from 'react';

function useKeyboardControls() {
  const [controls, setControls] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.code) {
        case 'ArrowUp':
          setControls((c) => ({ ...c, forward: true }));
          break;
        case 'ArrowDown':
          setControls((c) => ({ ...c, backward: true }));
          break;
        case 'ArrowLeft':
          setControls((c) => ({ ...c, left: true }));
          break;
        case 'ArrowRight':
          setControls((c) => ({ ...c, right: true }));
          break;
        case 'Space': 
          setControls((c) => ({ ...c, jump: true }));
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.code) {
        case 'ArrowUp':
          setControls((c) => ({ ...c, forward: false }));
          break;
        case 'ArrowDown':
          setControls((c) => ({ ...c, backward: false }));
          break;
        case 'ArrowLeft':
          setControls((c) => ({ ...c, left: false }));
          break;
        case 'ArrowRight':
          setControls((c) => ({ ...c, right: false }));
          break;
        case 'Space': 
          setControls((c) => ({ ...c, jump: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return controls;
}

export default useKeyboardControls;
