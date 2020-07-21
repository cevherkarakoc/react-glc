import React, { useContext, useState } from 'react';

import { AnimationFrameContext, UNIFORM, Canvas, Clear, Mesh, Program, Uniform } from './index';

const FramePrinter = () => {
    const { frame, time, delta } = useContext(AnimationFrameContext);

    return (
        <div>
            <p>Frame Count : {frame}</p>
            <p>Frame Time : {time}</p>
            <p>Delta : {delta}</p>
        </div>
    );
};

const vertexShader = `precision mediump float;
  struct Light
  {
          int Type;
          vec4 Position;
  };
  attribute vec3 aPosition;
  uniform mat4 uViewMatrix;
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelMatrix;
  uniform vec4 uA[5];
  uniform Light light;
  void main() {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1.0) + (uA[0] * 0. * uA[1] * 0. * light.Position);
    gl_PointSize = 10.0;
  }`;

const fragmentShader = `precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;
  void main() {
    gl_FragColor = vec4(gl_FragCoord.x/uResolution.x ,gl_FragCoord.y/uResolution.y,sin(uTime),1.0);
  }`;

const projectionMatrix = new Float32Array([3.732050895690918, 0, 0, 0, 0, 3.732050895690918, 0, 0, 0, 0, -1.0020020008087158, -1, 0, 0, -0.20020020008087158, 0]);

const res = new Float32Array([512, 512]);
const vertices = new Float32Array([-1.0, -1.0, 0.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, 1.0, 0.0]);
const attributesData = { aPosition: vertices };
const indices = new Uint16Array([0, 1, 2, 0, 2, 3]);
const attributes = [
    {
        name: 'aPosition',
        location: 0,
        size: 3,
        // type: gl.FLOAT,
        normalized: false,
        stride: 0,
        offset: 0,
    },
];

export const Plane = ({ x = 0, y = 0, z = 0, rotateY = 0 }) => {
    const sinT = Math.sin(rotateY);
    const cosT = Math.cos(rotateY);

    const modelMatrix = new Float32Array([1, 0, 0, 0,
        0, cosT, -sinT, 0,
        0, sinT, cosT, 0,
        x, y, z, 1]);

    return <Mesh attributesData={attributesData} indices={indices} drawMode="TRIANGLES">
        <Uniform name="uModelMatrix" type={UNIFORM.MATRIX4} value={modelMatrix} />
    </Mesh>
}

export const RotatingPlane = ({ x = 0, y = 0, z = 0, speed = 1. }) => {
    const { time } = useContext(AnimationFrameContext);

    const theta = (time * speed) % Math.PI;

    return <Plane x={x} y={y} z={z} rotateY={theta} />
}

export const ExampleProgram = ({ children, camX, camY, camZ }) => {
    const { time } = useContext(AnimationFrameContext);
    const viewMatrix = new Float32Array([-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, camX, camY, camZ, 1]);

    return <Program attributes={attributes} fragment={fragmentShader} vertex={vertexShader}>
        <Uniform name="uTime" type={UNIFORM.FLOAT1} value={time} />
        <Uniform name="uResolution" type={UNIFORM.FLOAT2} value={res} />
        <Uniform name="uViewMatrix" type={UNIFORM.MATRIX4} value={viewMatrix} />
        <Uniform name="uProjectionMatrix" type={UNIFORM.MATRIX4} value={projectionMatrix} />

        <Clear />

        {children}
    </Program>
}

export const ExampleComponent = () => {
    const [animated, setAnimated] = useState(true);
    const [camX, setCamX] = useState(0);
    const [camY, setCamY] = useState(0);
    const [camZ, setCamZ] = useState(-5);

    return (
        <div>
            <Canvas width={512} height={512} animated={animated}>
                <ExampleProgram camX={camX} camY={camY} camZ={camZ}>
                    <Plane x={1.25} y={1.75} z={6} />
                    <RotatingPlane x={-1.25} y={1.5} z={8} speed={2} />
                    <RotatingPlane x={1.25} y={-1.5} z={8} speed={0.5} />
                    <RotatingPlane x={0} y={0} z={50} speed={4} />
                    <RotatingPlane x={5} y={0} z={50} speed={5} />
                    <RotatingPlane x={-5} y={0} z={50} speed={5} />
                    <Plane x={-1.25} y={-1.75} z={6} />
                </ExampleProgram>
                <FramePrinter />
            </Canvas>
            <input type="range" min={-3} max={3} step={0.05} value={camX} onChange={event => setCamX(Number(event.target.value))}></input> <br />
            <input type="range" min={-2} max={2} step={0.05} value={camY} onChange={event => setCamY(Number(event.target.value))}></input> <br />
            <input type="range" min={-8} max={20} step={0.05} value={camZ} onChange={event => setCamZ(Number(event.target.value))}></input> <br />
            <button onClick={() => setAnimated(!animated)}>{animated ? 'Stop' : 'Play'}</button>
        </div>
    );
};
