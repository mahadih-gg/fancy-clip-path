import { PointType } from "@/lib/types"
import { create } from "zustand"


interface storeState {
  points: PointType[]
  setPoints: (points: PointType[]) => void
}




const useStore = create<storeState>(set => ({
  points: [{
    id: 1,
    x: 0,
    y: 0,
    radius: 0
  }],
  setPoints: (points: PointType[]) => set({ points })
}))




export default useStore
