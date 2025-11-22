import {Canvas} from "@react-three/fiber"


export default function Canva(){
    return(
        <Canvas
            style={{
                background:"green"
            }}
        >

            <mesh>
                <sphereGeometry  args={[2,80,80]}></sphereGeometry>
                <meshBasicMaterial></meshBasicMaterial>
            </mesh>

         

        </Canvas>
    )
}