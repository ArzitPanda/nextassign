import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-32 bg-slate-800 flex flex-row justify-between items-center px-6">
        <div className="text-xl text-yellow-400 font-semibold">
            nextEvents
        </div>
        <Link href="/" >
            <div className="text-cyan-500 text-3xl">Browse all events</div>
        </Link>



    </div>
  )
}

export default Navbar