import { useRef, Suspense, RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random";
import EarthCanvas from "./Earth";

interface MyObjectType {
  rotation: { x: number; y: number };
  // Other properties if any
}

const Stars = (props: any) => {
  const ref: RefObject<MyObjectType> = useRef(null);
  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 10;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const CreativePage = () => {
  return (
    <div style={{ height: "700px" }}>
      <EarthCanvas />
      <div className="w-full h-auto absolute inset-0 z-[-1]">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </div>
  );
};

export default CreativePage;
