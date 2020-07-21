import React, { useContext, useLayoutEffect, useState } from 'react';
import { AnimationFrameContext, CanvasContext, ProgramContext } from '../contexts';

const defaultVertexShader = `void main() {
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
}`;

const defaultFragmentShader = `void main() {
  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}`;

const compileShader = (gl, source, type) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error('An error occurred compiling the shaders  \n\n' + info);
  }

  return shader;
}

export const Program = ({ children, attributes = [], vertex = defaultVertexShader, fragment = defaultFragmentShader }) => {
  const gl = useContext(CanvasContext);
  const { frame } = useContext(AnimationFrameContext);

  const [program, setProgram] = useState(null);

  attributes.forEach((item) => (item.type = gl.FLOAT));

  useLayoutEffect(() => {
    const vertexShader = compileShader(gl, vertex, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, fragment, gl.FRAGMENT_SHADER);

    const shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(shaderProgram);
      throw new Error('Could not compile WebGL program. \n\n' + info);
    }

    /*const uniforms = gl.getProgramParameter(shaderProgram, gl.ACTIVE_UNIFORMS);
    

    for(let i=0;i<uniforms;i++) {
      const uniform = gl.getActiveUniform(shaderProgram, i);
      const location = gl.getUniformLocation(shaderProgram, uniform.name)
      console.log("u1", uniform, location);
    }

    console.log("U", uniforms);*/

    setProgram(shaderProgram);
  }, [gl, vertex, fragment]);

  useLayoutEffect(() => {
    if (program) {
      gl.useProgram(program);
    }
  }, [gl, program, frame]);

  return (
    <ProgramContext.Provider value={{ program, attributes }}>
      {program && children}
    </ProgramContext.Provider>
  );
};
