import React from 'react'
import Hero from '@/components/hero'
import bbSrc from '@/public/bb.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '标签页名字',
}

export default function page() {
    return (
        <Hero
            imgUrl={bbSrc}
            altText="Home"
            content="Welcome to reliability page!"
        />
    )
}
