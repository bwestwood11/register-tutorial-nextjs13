import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <Link href="/register"><h1 className='underline text-4xl text-red-500'>Register Page</h1></Link>
    
    </>
  )
}
