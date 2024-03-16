import { useDeferredValue } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'


export default function TreeModel() {

    return (
        <>
            <Canvas camera={{ position: [15, 0, 20], fov: 50, }}>
                <hemisphereLight color="white" groundColor="purple" intensity={3} />
                <spotLight position={[50, 50, 10]} angle={0.25} penumbra={1} />
                <group position={[0, -10, 0]}>
                    <Model position={[0, 0.95, 0]} url={'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf'} />
                    <ContactShadows scale={30} blur={10} far={20} />
                </group>
                <group position={[0, -10, 4]}>
                    <Model position={[0, 0.5, 0]} url={'/gnome.gltf'} />
                </group>
                <OrbitControls />
            </Canvas>
        </>
    )
}

function Model({ url, ...props }: any) {
    const deferred = useDeferredValue(url)
    const { scene }: any = useGLTF(deferred)
    // <primitive object={...} mounts an already existing object
    return <primitive object={scene} {...props} />
}

// Uncomment in order to silently pre-load all models
//Object.values(MODELS).forEach(useGLTF.preload)
