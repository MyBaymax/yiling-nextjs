'use client'

import {usePathname} from 'next/navigation'
import Link from 'next/link'

type link = {
    href: string,
    name: string,
}

export function Navigation({navLinks}: { navLinks: link[] }) {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)

                return (
                    <Link
                        className={isActive ? 'text-blue' : 'text-black'}
                        href={link.href}
                        key={link.name}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}
