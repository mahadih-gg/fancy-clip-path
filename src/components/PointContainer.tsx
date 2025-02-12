import useStore from '@/store/store';
import { AnimatePresence, motion } from 'motion/react';
import { IoClose } from 'react-icons/io5';
import PointInput from './ui/point-input';

const PointContainer = () => {

  const { points, setPoints } = useStore();


  const handleAdd = () => {
    setPoints([...points, { id: points.length + 1, x: 0, y: 0, radius: 0 }])
  }

  return (
    <div className="w-full min-h-96 bg-white/70 border-4 border-white rounded-md p-4 backdrop-blur-2xl">
      <AnimatePresence>
        {
          points.map((point, index) => {

            const handleDelete = () => {
              setPoints(points.filter(p => p.id !== point.id))
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}

                className="relative border-b border-gray-300 first:pt-0 py-4 group transition-all duration-300"
              >
                {index !== 0 && (
                  <button onClick={handleDelete} className="hidden group-hover:block absolute top-5 right-0 p-0.5 rounded-full bg-white hover:bg-red-200 border border-slate-300 hover:border-red-400 transition-all duration-300">
                    <IoClose />
                  </button>
                )}

                <h3 className="text-sm text-gray-500 pb-2">Point - {point.id}</h3>

                <div className="flex flex-wrap gap-2 items-center">
                  <PointInput id={point.id} type="number" objKey="x" label="X" value={point.x} />

                  <PointInput id={point.id} type="number" objKey="y" label="Y" value={point.y} />

                  <PointInput id={point.id} type="number" objKey="radius" label="Radius" value={point.radius} />
                </div>
              </motion.div>
            )
          })
        }
      </AnimatePresence>

      <div className="flex justify-end items-center py-3">
        <button
          onClick={handleAdd}
          className="bg-white border text-sm border-slate-400 rounded-md p-2"
        >
          Add Point
        </button>
      </div>
    </div>
  );
};

export default PointContainer;