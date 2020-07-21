import React, { useCallback, useState, useEffect } from 'react';
import { AnimationFrameContext } from '../contexts';

export const AnimationFrame = ({ children, animated = false, onFrameStep = () => {} }) => {
  const [value, setValue] = useState({
    frame: 0,
    delta: 0,
    time: 0,
  });

  const requestRef = React.useRef();

  const animate = useCallback((currentTime) => {
    setValue(({ frame, time }) => {
      const newTime = currentTime * 0.001;
      const delta = newTime - time;

      return {
        frame: frame + 1,
        time: newTime,
        delta,
      };
    });
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    onFrameStep(value)
  }, [value, onFrameStep]);

  useEffect(() => {
    if (animated) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestRef.current);
    }

    return () => cancelAnimationFrame(requestRef.current);
  }, [animate, animated]);

  return <AnimationFrameContext.Provider value={value}>{children}</AnimationFrameContext.Provider>;
};
