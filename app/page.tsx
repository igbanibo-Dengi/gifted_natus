import Aof from '@/components/AOF'
import Community from '@/components/community'
import Hero from '@/components/hero'
import Impact from '@/components/impact'
import Intro from '@/components/intro'


export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Aof />
      <Impact />
      <Community />
    </main>
  )
}
