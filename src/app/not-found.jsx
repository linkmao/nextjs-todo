import Link from "next/link"

const NotFound = () => {
  return <div className="flex justify-center items-center h-[calc(100vh-7rem)]">
    <div>
    <h1 className="font-bold text-white text-5xl">PAGINA NO ENCONTRADA</h1>
    <Link href="/"> <h2 className="text-white text-2xl">Maolink Software</h2></Link>
    </div>
  </div>
}

export default NotFound