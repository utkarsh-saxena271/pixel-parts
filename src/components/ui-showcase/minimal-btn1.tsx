export default function Button1(){
    return(
        <button className="relative text-zinc-500 hover:text-zinc-50 border-zinc-700 border px-8 py-2 group hover:border-zinc-500 cursor-pointer transition-all duration-150 ease-linear hover:px-10 hover:py-3">
          <div className="-top-px -left-px absolute h-4 w-4 border-l border-t border-zinc-500 group-hover:border-zinc-50 transition-colors duration-150 ease-linear"></div>
          <div className="-top-px -right-px absolute h-4 w-4 border-r border-t border-zinc-500 group-hover:border-zinc-50 transition-colors duration-150 ease-linear"></div>
          <div className="-bottom-px -left-px absolute h-4 w-4 border-l border-b border-zinc-500 group-hover:border-zinc-50 transition-colors duration-150 ease-linear"></div>
          <div className="-bottom-px -right-px absolute h-4 w-4 border-r border-b border-zinc-500 group-hover:border-zinc-50 transition-colors duration-150 ease-linear"></div>
          Button
        </button>
    )
}