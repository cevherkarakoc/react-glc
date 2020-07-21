import React, { useContext, useLayoutEffect } from 'react';
import { AnimationFrameContext, CanvasContext } from '../contexts';

export const Clear = () => {
  const gl = useContext(CanvasContext);
  const { frame } = useContext(AnimationFrameContext);

  useLayoutEffect(() => {
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, [gl, frame]);

  return <></>;
};
