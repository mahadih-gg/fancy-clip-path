import Sidebar from "@/components/Sidebar"
import Iridescence from "@/components/ui/Iridescence"

function App() {

  return (
    <section className="w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-full">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={true}
          amplitude={0.1}
          speed={0.5}
        />
      </div>
      <div className="w-full h-full relative z-50">
        <div>

        </div>
        <div className="absolute right-5 top-1/2 -translate-y-1/2">
          <Sidebar />
        </div>
      </div>

    </section>

  )
}

export default App
