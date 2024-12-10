import React from 'react'
import Image from 'next/image'
import homeSrc from '@/public/home.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
}

export default function Page() {
    return (
        <Hero
            imgUrl={homeSrc}
            altText="Home"
            content="Welcome to my website!"
        />
    )
}
