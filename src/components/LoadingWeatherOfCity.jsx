function LoadingWeatherOfCity() {
  return (
    <div className='flex items-center justify-center min-h-screen flex-col animate-pulse'>
      <div className="relative">
        <div className={`flex items-center flex-col justify-center z-5 mb-4`}> 
          <div className={`flex border-3 border-gray-500 bg-gray-100 rounded-2xl bg-gray max-w-xl h-[70px]`}>
            <div
              class="focus:outline-0 font-bold text-violet-500 text-lg w-200 p-6"  
            >
            </div>
          </div>
        </div>
      </div>
      <div
        className='relative border border-gray-500 bg-gray-100 border-3 rounded-2xl w-xl h-[300px]'
      >
        <div className="flex items-center flex-col justify-between p-5 h-full">
          <div class="text-center bg-gray-500 rounded-lg w-[200px] h-[40px]"></div>
          <div className="text-center bg-gray-500 rounded-lg   w-[300px] h-[100px]"></div>
          <div className="text-center bg-gray-500 rounded-lg w-[200px] h-[40px]"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingWeatherOfCity