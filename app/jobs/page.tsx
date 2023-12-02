import LightFooterE from '@/components/footer'
import LightHeaderA from '@/components/header'
import LightHeroA from '@/components/hero'
import LightBlogD from '@/components/jobs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Jobs() {
  return (
    <div>
      <LightHeaderA />

      <main className="flex min-h-screen flex-col items-center justify-between py-24 px-20">

        <LightBlogD />

      </main>

      <LightFooterE />
    </div>
  )
}

{/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
<p>hello world</p>
<Button>hello</Button>
      </div> */}