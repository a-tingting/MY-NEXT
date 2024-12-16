import React from 'react'
import Image from 'next/image'
import { photos } from '@/data'

export default function page({ params }: { params: { id: string } }) {
    const photo = photos.find((p) => p.id === params.id)!
    return (
        <div className="container mx-auto pt-8">
            <Image
                src={photo.src}
                width={300}
                height={300}
                className="rounded-lg block mx-auto"
                alt={photo.alt}
            />
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-3 mt-5 leading-8">
                <p>
                    <strong>Title：</strong> {photo.alt}
                </p>
                <p>
                    <strong>Price：</strong>
                    {photo.price}
                </p>
                <p>
                    <strong>Description：</strong> 这是一段描述
                </p>
            </div>
        </div>
    )
}
