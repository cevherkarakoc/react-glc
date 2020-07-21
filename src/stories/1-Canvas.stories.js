import React, { useState, useCallback } from 'react';
import { Canvas } from '../components';

export default {
    title: 'Canvas',
    component: Canvas,
    parameters: {
        componentSubtitle: 'Handy status label',
    },
   
};

export const _Canvas = () => <Canvas />

export const Sizing = () => <Canvas width={400} height={100} />

export const ClearColor = () => <Canvas clearColor={[0,1,1,1]} />

export const Animated = () => {
    const [red, setRed] = useState(0);
    
    const onFrameStep = useCallback( ({time}) => {
        setRed(Math.abs(Math.sin(time)));
    }, [] );

    return <Canvas clearColor={[red, 0, 0, 1]} animated onFrameStep={onFrameStep} />
}
