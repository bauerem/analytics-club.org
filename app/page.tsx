import DarkContentH from '@/components/content'
import LightFooterE from '@/components/footer'
import LightHeaderA from '@/components/header'
import LightHeroA from '@/components/hero'
import DarkPartnersC from '@/components/partners'
import DarkStatisticC from '@/components/statistic'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <LightHeaderA />

      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-20">

        <LightHeroA />
        <DarkStatisticC />
        <DarkContentH />
        <DarkPartnersC />

      </main>

      <LightFooterE />
    </div>
  )
}

{/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
<p>hello world</p>
<Button>hello</Button>
      </div> */}