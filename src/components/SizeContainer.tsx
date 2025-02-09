import useStore from "@/store/store";

const SizeContainer = () => {

  const { size, setSize } = useStore()

  return (
    <div className="w-full bg-white/70 border-4 border-white rounded-md p-4 backdrop-blur-2xl">

      <h3 className="text-base text-gray-500 pb-2">Size</h3>
      <div className="flex justify-between items-center">

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="width" className="w-12 text-sm text-gray-500">Width:</label>
            <input
              type="number"
              className="w-5/6 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-md py-1 px-2 outline-none"
              value={size.width}
              min={100}
              max={300}
              onChange={(e) => setSize({ ...size, width: parseInt(e.target.value) })}
            />
          </div>


          <div className="flex items-center gap-2">

            <label htmlFor="height" className="w-12 text-sm text-gray-500">Height:</label>
            <input
              type="number"
              className="w-5/6 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-md py-1 px-2 outline-none"
              value={size.height}
              min={100}
              max={300}
              onChange={(e) => setSize({ ...size, height: parseInt(e.target.value) })}
            />



          </div>

        </div>
      </div>
    </div>
  );
};

export default SizeContainer;