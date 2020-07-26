import React, { Fragment, useContext, useLayoutEffect, useState, useEffect } from 'react';
import { CanvasContext, ProgramContext, AnimationFrameContext } from '../contexts';
import { UNIFORM } from '../constants';

const uniformFns = {
  [UNIFORM.FLOAT1]:  (gl, location, value) => gl.uniform1f(location, value),
  [UNIFORM.FLOAT2]:  (gl, location, value) => gl.uniform2fv(location, value),
  [UNIFORM.FLOAT3]:  (gl, location, value) => gl.uniform3fv(location, value),
  [UNIFORM.MATRIX4]: (gl, location, value) => gl.uniformMatrix4fv(location, false, value),
}

export const Uniform = ({ name, type, value }) => {
  const gl = useContext(CanvasContext);
  const { frame } = useContext(AnimationFrameContext);
  const { program } = useContext(ProgramContext);

  const [location, setLocation] = useState(null);
  const [uniformFn, setUniformFn] = useState(() => () => null);

  useEffect(() => {
    const fn = uniformFns[type];
    if(fn) {
      setUniformFn(() => fn)
    }
  }, [gl, type])

  useLayoutEffect(() => {
    setLocation(gl.getUniformLocation(program, name));
  }, [gl, program, name]);

  useLayoutEffect(() => {
    uniformFn(gl, location, value);
  }, [gl, program, location, value, frame, uniformFn]);

  return <Fragment></Fragment>;
};
