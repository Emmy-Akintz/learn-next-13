import Image from 'next/image'
import Link from 'next/link'
// 19.47
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href='/users'>Users</Link>
    </main>
  )
}
