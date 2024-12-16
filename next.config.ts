import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    // reactStrictMode: false, //关闭严格模式
    images: {
        remotePatterns: [
            {
                hostname: 'q4.itc.cn',
            },
        ],
    },
}

export default nextConfig
