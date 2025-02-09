import useStore from '@/store/store';
import { motion } from 'motion/react';
import { useEffect } from 'react';

const ClippyCanvas = () => {

  const { points, clipPath, setClipPath, size } = useStore();

  useEffect(() => {
    if (points.length === 0) {
      setClipPath('path("M 0,0 L 100,0 L 100,100 L 0,100 Z")');

      return;
    }

    const path = points.map((point, index) => `${point.x},${point.y} ${points.length - 1 === index ? 'Z' : 'L'}`).join(' ');
    const clip = `path('M ${path}')`;
    setClipPath(clip);
  }, [points]);


  console.log(clipPath)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="size-full bg-white border-4 border-white rounded-md p-4 backdrop-blur-2xl flex justify-center items-center"
    >
      <div
        className="border border-slate-400 border-dashed"
        style={{
          width: size.width,
          height: size.height
        }}
      >
        <div
          className="bg-red-400"
          style={{
            width: size.width,
            height: size.height,
            clipPath: "path('M 0,60 L 10,50 L 90,50 L 100,40 L 100,10 L 110,0 L 190,0 L 200,10 L 200,190 L 190,200 L 10,200 L 0,190 Z')"
          }}
        >
        </div>

      </div>

    </motion.div>


  );

};

export default ClippyCanvas;