function App() {

  return (

      <div className="h-screen w-screen bg-indigo-950 grid justify-items-center">
        <div className="relative flex size-3 bg-green-500 mt-6 h-20 w-20 rounded-[10vw] flex items-center justify-center">
          
          <button type="submit" className="outline-3 hover:outline-sky-400 bg-tranparent px-5 py-5 h-20 w-20 rounded-[10vw] cursor-pointer 
          ">
            !</button>
            {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 z-0"></span> */}
        </div>
      </div>
  )
}

export default App
