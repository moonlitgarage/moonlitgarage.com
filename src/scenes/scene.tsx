import { Canvas } from '@react-three/fiber'

export default function Scene() {
  return (
    <Canvas>
      <group>
        <mesh>
          <meshNormalMaterial />
          <boxGeometry args={[4, 4, 2]} />
        </mesh>
      </group>
    </Canvas>
  )
}
