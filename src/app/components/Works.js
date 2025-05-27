export default function Works() {
  return (
    <div>
      <p className="text-base font-semibold text-gray-800 dark:text-white">Projects</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <div className="grid grid-rows-3 gap-4">

        <a href="https://food-selection-website.vercel.app/" target="_blank">
          <div className="w-full h-64 bg-[#BA3C54] rounded-lg flex flex-row overflow-hidden">
            <div className="w-1/3 flex flex-col justify-end text-white p-2 z-2">
              <h1 className="font-bold text-xl md:text-3xl">Acai Bowl Co.</h1>
              <p className="text-xs md:text-sm">Customizing food selection made simple.</p>
            </div>
            <div className="w-2/3">
              <img src="/images/food.png" className="w-full h-full object-cover rounded-br-lg transform transition hover:scale-125 duration-300" />
            </div>
          </div>
        </a>

        <a href="https://github.com/kuschelljane/blog-platform" target="_blank">
          <div className="w-full h-64 bg-gray-200 rounded-lg flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center p-2 z-2">
              <h1 className="font-bold text-xl md:text-3xl text-black">Blog Platform</h1>
              <p className="text-xs md:text-sm">Streamlining how you share ideas.</p>
            </div>
            <div>
              <img src="/images/blog.png" className="w-full h-full object-contain p-4 transform transition hover:scale-125 duration-300" />
            </div>
          </div>
        </a>


      <a href="https://task-management-nine-delta.vercel.app/" target="_blank">
        <div className="w-full h-64 bg-blue-400 rounded-lg flex flex-row overflow-hidden">
            <div className="w-2/3">
              <img src="/images/task.png" className="w-full h-full object-contain sm:object-cover transform transition hover:scale-125 duration-300" />
            </div>
            <div className="w-1/3 flex flex-col justify-center text-white p-2 sm:p-0">
              <h1 className="font-bold text-xl md:text-3xl">Focus Board</h1>
              <p className="text-xs md:text-sm">Organize tasks with clarity and ease.</p>
            </div>
        </div>
      </a>
          
        </div>

        <div className="grid grid-rows-2 gap-4">

      <a href="https://github.com/kuschell-adish/helpdesk-application" target="_blank">   
        <div className="w-full h-64 md:h-96 bg-gray-200 rounded-lg flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center p-2 mt-2 z-2">
              <h1 className="font-bold text-xl md:text-3xl text-black">Ticketing System</h1>
              <p className="text-xs md:text-sm">Redefining how feedback flows.</p>
            </div>
            <div>
              <img src="/images/helpdesk.png" className="w-full h-full object-contain p-4 transform transition hover:scale-125 duration-300" />
            </div>
        </div>
      </a>   

      <a href="https://github.com/kuschelljane/food-website" target="_blank">
        <div className="w-full h-64 md:h-96 bg-[#FE7349] rounded-lg flex flex-row overflow-hidden">
            <div className="w-2/3">
              <img src="/images/food2.png" className="w-full h-full object-cover transform transition hover:scale-125 duration-300" />
            </div>
            <div className="w-1/3 flex flex-col justify-end text-white mr-10 mb-3 sm:p-2">
              <h1 className="font-bold text-xl md:text-3xl">Aladdin Restaurant</h1>
              <p className="text-xs md:text-sm">Elevating takeout with intuitive visual ordering.</p>
            </div>
        </div>
      </a>

        </div>

      </div>
    </div>
  );
}
