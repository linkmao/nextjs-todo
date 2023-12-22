import Link from "next/link"

const NavBar = () => {
  return <nav className="container bg-slate-800 mx-auto">
    
    <div className="flex justify-between items-center mx-5 text-white">
    <Link href="/" ><h3 className="font-bold text-2xl">NEXTJS PRIMA TODO</h3></Link>
    <ul className="flex gap-x-2">
      <li>
        <Link href="/new" className="text-slate-200 hover:text-slate-400" >New</Link>
      </li>
      <li>
        <Link href="/about" className="text-slate-200 hover:text-slate-400" >About</Link>
      </li>
    </ul>
    </div>

  </nav>
}

export default NavBar