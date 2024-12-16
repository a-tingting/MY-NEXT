'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { photos } from '@/data'
import { useParams, useRouter } from 'next/navigation'

export default function page() {
    const params = useParams<{ id: string }>()
    const photo = photos.find((p) => p.id === params.id)!
    const router = useRouter()

    return (
        <div
            className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
            onClick={router.back}
        >
            <Image
                src={photo?.src}
                width={300}
                height={300}
                className="rounded-lg"
                alt={photo?.alt}
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    )
}
