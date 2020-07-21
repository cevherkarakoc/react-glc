import React, { useCallback, useState, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CanvasContext, MeshAssetContext } from '../contexts';
import { AnimationFrame } from './AnimationFrame';
import { meshAssetReducer } from '../reducers/meshAssetReducer';

export const Canvas = ({ children, width = 128, height = 128, contextAttributes = {}, animated = false, clearColor = [0, 0, 0, 1], onFrameStep = () => { } }) => {
  const [gl, setGl] = useState(null);
  const meshes = useReducer(meshAssetReducer, []);

  const ctxRef = useCallback((node) => {
    if (node !== null) {
      const ctx = node.getContext('webgl', contextAttributes) || node.getContext("experimental-webgl", contextAttributes);
      ctx.clearColor(...clearColor);
      ctx.frontFace(ctx.CCW);

      ctx.viewport(0, 0, ctx.drawingBufferWidth, ctx.drawingBufferHeight);
      ctx.clear(ctx.COLOR_BUFFER_BIT);
      setGl(ctx);
    }
  }, []);

  useEffect(() => {
    if (gl) {
      gl.clearColor(...clearColor);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }, [clearColor])

  return (
    <div>
      <canvas ref={ctxRef} width={width} height={height}></canvas>
      <CanvasContext.Provider value={gl}>
        <MeshAssetContext.Provider value={meshes}>
          {gl && (
            <AnimationFrame animated={animated} onFrameStep={onFrameStep}>
              {children}
            </AnimationFrame>
          )}
        </MeshAssetContext.Provider>
      </CanvasContext.Provider>
    </div>
  );
};


Canvas.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  animated: PropTypes.bool,
  onFrameStep: PropTypes.func,
  contextAttributes: PropTypes.shape({
    alpha: PropTypes.bool,
    desynchronized: PropTypes.bool,
    antialias: PropTypes.bool,
    depth: PropTypes.bool,
    failIfMajorPerformanceCaveat: PropTypes.bool,
    powerPreference: PropTypes.oneOf(['default', 'high-performance', 'low-power']),
    premultipliedAlpha: PropTypes.bool,
    preserveDrawingBuffer: PropTypes.bool,
    stencil: PropTypes.bool,
  }),
};