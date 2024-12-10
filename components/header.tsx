'use client'
import React, { use } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/performance', label: 'Performance' },
    { href: '/reliability', label: 'Reliability' },
    { href: '/scale', label: 'Scale' },
]

export default function header() {
    const pathname = usePathname()

    return (
        <div>
            <div className="absolute w-full z-10">
                <div className="flex justify-between container mx-auto text-white p-8 items-center">
                    <Link className="text-3xl font-bold" href="/">
                        Home
                    </Link>
                    <div className="text-xl space-x-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    pathname === link.href
                                        ? 'text-purple-400'
                                        : ''
                                }
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* <Link
                            className={
                                pathname === '/performance'
                                    ? 'text-purple-400'
                                    : ''
                            }
                            href="/performance"
                        >
                            performance
                        </Link>
                        <Link
                            className={
                                pathname === '/reliability'
                                    ? 'text-purple-400'
                                    : ''
                            }
                            href="/reliability"
                        >
                            reliability
                        </Link>
                        <Link
                            className={
                                pathname === '/scale' ? 'text-purple-400' : ''
                            }
                            href="/scale"
                        >
                            scale
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
