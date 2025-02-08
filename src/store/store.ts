import { PointType, SizeType } from "@/lib/types"
import { create } from "zustand"


interface StoreState {

  size: SizeType
  setSize: (size: SizeType) => void

  points: PointType[]
  setPoints: (points: PointType[]) => void


  clipPath: string
  setClipPath: (clipPath: string) => void

}

interface StoreData {
  points: PointType[]
  clipPath: string
  size: SizeType
}


const initialState: StoreData = {
  points: [{
    id: 1,
    x: 0,
    y: 0,
    radius: 0
  }],
  size: {
    width: 300,
    height: 300
  },
  clipPath: ''
}


const useStore = create<StoreState>(set => ({

  size: initialState.size,
  setSize: (size: SizeType) => set({ size }),

  points: initialState.points,
  setPoints: (points: PointType[]) => set({ points }),


  clipPath: initialState.clipPath,
  setClipPath: (clipPath: string) => set({ clipPath })


}))





export default useStore
