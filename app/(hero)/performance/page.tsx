import React from 'react'
import Hero from '@/components/hero'
import aaSrc from '@/public/aa.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'performance',
}

export default function page() {
    return (
        <Hero
            imgUrl={aaSrc}
            altText="Home"
            content="Welcome to performance page!"
        />
    )
}
