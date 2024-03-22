import './App.css'
import MainSection from './layouts/MainSection/MainSection'
import SidePannel from './layouts/SidePannel/SidePannel'

function App() {

  return (
    <main className='flex flex-col lg:flex-row lg:gap-10 p-5'>
      <SidePannel />
      <MainSection />
    </main>
  )
}

export default App
