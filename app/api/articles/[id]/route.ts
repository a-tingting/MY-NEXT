import { NextResponse } from 'next/server'
import db from '@/db'

interface IParams {
    params: { id: string }
}

// 在发起GET请求时，请求地址是/api/articles/:id(任意一个动态id)
export async function GET(request: Request, { params }: IParams) {
    const data = db.data.posts.find((post) => post.id === params.id)
    return NextResponse.json({
        code: 0,
        message: '查找成功',
        data: data,
    })
}

// 在发起PATCH请求时，请求地址是/api/articles/:id(任意一个动态id)
// PATCH是对PUT的补充，可以实现部分更新，比如只更新部分字段
export async function PATCH(request: Request, { params }: IParams) {
    const data = await request.json()
    let idx = -1
    await db.update(({ posts }) => {
        idx = posts.findIndex((post) => post.id === params.id)

        posts[idx] = {
            // 更新部分字段
            ...posts[idx],
            ...data,
        }
    })
    return NextResponse.json({
        code: 0,
        message: '修改成功',
        data: db.data.posts[idx],
    })
}

// 在发起DELETE请求时，请求地址是/api/articles/:id(任意一个动态id)
export async function DELETE(request: Request, { params }: IParams) {
    await db.update(({ posts }) => {
        const idx = posts.findIndex((post) => post.id === params.id)
        posts.splice(idx, 1)
    })
    return NextResponse.json({
        code: 0,
        message: '删除成功',
    })
}
