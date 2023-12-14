import Logo from "./logo";

import Link from 'next/link';
import Image from 'next/image';

function Branding(props: any) {

    const textColor = 'gray-300';

    return (
        <Link href={""} className={`flex title-font font-medium items-center text-${textColor} mb-4 md:mb-0`}>
            <Image src="/ace-branding.png" alt="Branding Image" width={200} height={50} />
        </Link>
    )

    return (
        <a href={""} className={`flex title-font font-medium items-center text-${textColor} mb-4 md:mb-0`}>
            <Logo />
            <span className="ml-3 text-xl">Analytics Club</span>
        </a>
    )
}

export default Branding;