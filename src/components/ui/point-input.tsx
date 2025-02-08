import useStore from "@/store/store"

type PropsType = {
  id: number
  type: string
  label: string
  objKey: string
  value: number
}



const PointInput = ({ id, type, label, objKey, value }: PropsType) => {


  const { points, setPoints } = useStore()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setPoints(points.map(point => point.id === id ? { ...point, [objKey]: e.target.value } : point))

  }
  return (
    <div className='flex justify-start items-center gap-2'>
      <label
        className="text-sm text-gray-500"
        htmlFor={id.toString()}
      >{label}:</label>
      <input
        className='bg-white/50 backdrop-blur-sm w-16 border border-gray-300 rounded-md py-1 px-2 outline-none'
        type={type}
        id={id.toString()}
        value={value}
        onChange={handleChange}
      />
    </div>



  );
};


export default PointInput;