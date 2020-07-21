import React, { useContext, useLayoutEffect, useState, useEffect } from 'react';
import { AnimationFrameContext, CanvasContext, ProgramContext, MeshAssetContext } from '../contexts';
import { objToHashSymbol } from '../helper';

export const Mesh = ({ children, attributesData, indices, drawMode = 'TRIANGLES' }) => {
  const gl = useContext(CanvasContext);
  const { frame } = useContext(AnimationFrameContext);
  const [meshes, meshDispatch] = useContext(MeshAssetContext);
  const { attributes } = useContext(ProgramContext);

  const [mesh, setMesh] = useState(null);

  useLayoutEffect(() => {
    meshDispatch({
      type: "ADD_MESH",
      payload: {
        gl, attributes, attributesData, indices
      }
    })
  }, [gl, attributes, attributesData, indices, meshDispatch]);

  useEffect(() => {
    const hash = objToHashSymbol({ attributesData, indices });
    setMesh(meshes.find(oldMesh => oldMesh.hash === hash))
  }, [meshes, attributesData, indices])

  useLayoutEffect(() => {
    if (mesh) {
      attributes.forEach((attribute) => {
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.attributeBuffers[attribute.name]);
        gl.enableVertexAttribArray(attribute.location);
        gl.vertexAttribPointer(
          attribute.location,
          attribute.size,
          attribute.type,
          attribute.normalized,
          attribute.stride,
          attribute.offset,
        );
      });
      
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
      //uniformList.forEach(uniform => uniform.fn(uniform.value, uniform.location));
      
      gl.drawElements(gl[drawMode], mesh.vertexCount, gl.UNSIGNED_SHORT, 0);
    }
  }, [gl, mesh, frame, attributes, drawMode]);

  return <>
    {mesh && children}
  </>;
};
