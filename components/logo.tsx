"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Logo() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Link href="/">
            <a href="/">
                <svg
                    xmlns="/"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className={`w-10 h-10 text-white p-2 bg-gradient-to-r from-secondary to-primary rounded-full`}
                    viewBox="0 0 24 24"
                >
                    <path d="M11 21.0001H9.8C8.11984 21.0001 7.27976 21.0001 6.63803 20.6731C6.07354 20.3855 5.6146 19.9265 5.32698 19.362C5 18.7203 5 17.8802 5 16.2001V9.77753M21 12.0001L15.5668 5.96405C14.3311 4.59129 13.7133 3.9049 12.9856 3.65151C12.3466 3.42894 11.651 3.42899 11.0119 3.65165C10.2843 3.90516 9.66661 4.59163 8.43114 5.96458L3 12.0001M19.9749 19.9587C18.608 21.3472 16.392 21.3472 15.0251 19.9587C14.3417 19.2644 14 18.3545 14 17.4445C14 16.5346 14.3417 15.6246 15.0251 14.9304C15.0251 14.9304 15.3125 15.6667 16.1875 16.1112C16.1875 15.2223 16.4063 13.8889 17.4938 13.0001C18.375 13.889 19.2899 14.2345 19.9749 14.9304C20.6583 15.6246 21 16.5346 21 17.4445C21 18.3545 20.6583 19.2644 19.9749 19.9587Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </Link>
    )
}

export default Logo