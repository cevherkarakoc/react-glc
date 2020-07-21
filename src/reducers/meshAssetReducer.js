import { objToHashSymbol } from '../helper';

const createMesh = ({ gl, attributes, attributesData, indices }, hash) => {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const attributeBuffers = {};
    attributes.forEach(({ name }) => {
        const data = attributesData[name];
        if (data) {
            const attribBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, attribBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

            attributeBuffers[name] = attribBuffer;
        }

    });

    return {
        attributeBuffers: attributeBuffers,
        indexBuffer: indexBuffer,
        vertexCount: indices.length,
        hash,
    };
}

export const meshAssetReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_MESH':
            const { attributesData, indices } = action.payload;
            const hash = objToHashSymbol({ attributesData, indices });

            if (state.find(oldMesh => oldMesh.hash === hash)) {
                return state;
            } else {
                return [...state, createMesh(action.payload, hash)];
            }
        default:
            return state;
    }
};