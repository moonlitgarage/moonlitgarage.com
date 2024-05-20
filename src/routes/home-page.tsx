import { Canvas, MeshStandardMaterialProps } from "@react-three/fiber"
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, Environment } from "@react-three/drei"

// modified from: https://codesandbox.io/p/sandbox/edgesgeometry-iup24?file=%2Fsrc%2FApp.js%3A1%2C1-46%2C1

interface ModelProps extends MeshStandardMaterialProps {
    position: [number, number, number];
    rotation: [number, number, number];
  }

function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/blackbird.glb')
  return (
    // @ts-ignore
    <group {...props} dispose={null}>
    {/* @ts-ignore */}
      <mesh geometry={nodes.imagetostl_mesh0.geometry} material={materials.mat0} />
          {/* @ts-ignore */}

      <mesh geometry={nodes.imagetostl_mesh1.geometry} material={materials.mat1} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh2.geometry} material={materials.mat2} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh3.geometry} material={materials.mat3} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh4.geometry} material={materials.mat4} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh5.geometry} material={materials.mat5} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh6.geometry} material={materials.mat6} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh7.geometry} material={materials.mat7} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh8.geometry} material={materials.mat8} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh9.geometry} material={materials.mat9} />
    {/* @ts-ignore */}
    <mesh geometry={nodes.imagetostl_mesh10.geometry} material={materials.mat10} />
    </group>
  )
}

useGLTF.preload('/blackbird.glb')

export default function HomePage() {
    return (
        <div id="canvas-container" className='border-2 grow'>
    <Canvas shadows camera={{ position: [-200, 200, 1], fov: 45 }}>
      <ambientLight intensity={Math.PI / 8} />
      <spotLight intensity={Math.PI} decay={0} angle={0.2} castShadow position={[5, 2.5, 5]} shadow-mapSize={128} />
      <Model position={[0, 0.19, 0]} rotation={[0, 0, -Math.PI / 4.45]} />
      <AccumulativeShadows frames={100} temporal>
        <RandomizedLight radius={2} position={[5, 2.5, 5]} />
      </AccumulativeShadows>
      <OrbitControls makeDefault dampingFactor={0.3} />
      <Environment preset="night" />
    </Canvas>
        </div>
    );
}