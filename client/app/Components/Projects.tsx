import Link from "next/link";

export default function Projects(){
    return(
        <main id='projects' className='projects flex flex-col items-center justify-center gap-10 mt-16'>
            <h2 className='underline underline-offset-8 text-5xl text-center'>My Projects</h2>
            <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 items-center justify-center p-10'>
                <span className='relative'>
                    <div className='desc flex flex-col items-center'>
                        <Link href='/' className='p-3 duration-200 text-white text-sm rounded-xl bg-blue-500 hover:bg-blue-400'>View</Link>
                    </div>
                    <img className='rounded-tr-3xl rounded-bl-3xl' src='https://cdn.pariscityvision.com/library/image/5251.jpg' alt='OKKO' />
                </span>
            </div>
        </main>
    )
}