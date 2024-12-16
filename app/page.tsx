import React from 'react'
import { photos } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {photos.map((item) => (
                            <Link
                                href={`/photos/${item.id}`}
                                className="group"
                                key={item.id}
                            >
                                <Image
                                    className="w-full h-full object-cover "
                                    src={item.src}
                                    width={200}
                                    height={200}
                                    alt={item.alt}
                                />
                                <h3 className="mt-4 text-sm text-gray-700">
                                    {item.alt}
                                </h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">
                                    ${item.price}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
