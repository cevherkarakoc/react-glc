import React, { useState, useCallback } from 'react';
import { Canvas, Program, Mesh, Uniform } from '../components';
import { UNIFORM } from '../constants';

export default {
    title: 'Program',
    component: Program,
    parameters: {
        componentSubtitle: 'Handy status label',
    },

};

const vertexShader = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 100.0;
  }`;

const fragmentShader = `
  void main() {
    gl_FragColor = vec4(gl_FragCoord.x/200., gl_FragCoord.y/200., 0.0, 1.0);
  }`;

export const _Program = () => <Canvas><Program /></Canvas>;

export const ProgramWithShaders = () => {
    const attributesData = { aPosition: new Float32Array([0, 0, 0]) };
    const indices = new Uint16Array([0]);

    return <Canvas>
        <Program fragment={fragmentShader} vertex={vertexShader}>
            <Mesh attributesData={attributesData} indices={indices} drawMode="POINTS" />
        </Program>
    </Canvas>
}