/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 artemis.glb artemis
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Artemis(props) {
  const { nodes, materials } = useGLTF('/artemis.glb')
  return (
    <group {...props} dispose={null} scale={4}>
      <group position={[2.59, 7.05, -10.66]} rotation={[-0.97, -0.38, -0.18]} scale={10}>
        <mesh geometry={nodes.Artemis.geometry} material={materials.Material__59} scale={0.01} />
      </group>
      <group position={[2.59, 7.05, -10.66]} rotation={[-0.97, -0.38, -0.18]} scale={10}>
        <group scale={0.01}>
          <mesh geometry={nodes.Object001_1.geometry} material={materials.Material_012} />
          <mesh geometry={nodes.Object001_2.geometry} material={materials.Material_013} />
          <mesh geometry={nodes.Object001_3.geometry} material={materials.Material_014} />
          <mesh geometry={nodes.Object001_4.geometry} material={materials.Material_015} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/artemis.glb')