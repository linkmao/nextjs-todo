import Link from "next/link"

const AboutPage =() =>{
  return <section className="container mx-2">
    <h3 className="text-white text-3xl font-bold px-5 mb-5">Acerca de</h3>
    <p className="text-white px-5">Esta es una sencilla aplicación web desarrollada usando Nextjs, la cual consiste en una lista de tareas en la cual se puede crear, editar y borrar las tareas.</p>
    <p className="text-white  px-5">La información se guarda en una pequeña base de datos local llamada sqlite, para acceder a la base de datso se usa un ORM llamado Prisma, el estilizad se realiza usando Tailwind CSS.</p>
    <p className="text-white px-5 mb-5">Todo el código se basa en el video de Fazt (curso de Nextjs desde cero) que se comparte a continuación.</p>
    <Link href="https://www.youtube.com/watch?v=_SPoSMmN3ZU" target="_blank" className="text-white hover:text-slate-700 px-5">Video FAZT</Link>
    <Link href="https://github.com/linkmao/nextjs-todo" target="_blank" className="text-white hover:text-slate-700 block px-5">Repo Git Hub</Link>
    

  </section>
}

export default AboutPage
