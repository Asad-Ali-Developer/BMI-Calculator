import BMICalculator from './Components/BMICalculator'
import MyNavbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <div className="App h-screen bg-zinc-900">
    <MyNavbar />

    <div className=" w-full h-[90%] flex justify-center items-center text-white">
    <BMICalculator />
    </div>
    </div>
    </>
  )
}

export default App