import { NextRequest, NextResponse } from 'next/server'
import db from '@/db'

// 在发起GET请求时，请求地址是/api/articles
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const pagenum = Number(searchParams.get('pagenum')) || 1 // 获取请求参数中的pagenum，如果没有则默认为1
    const pagesize = Number(searchParams.get('pagesize')) || 2
    const query = searchParams.get('query') || ''

    const data = db.data.posts
    let filterData = query
        ? data.filter((item) => {
              const { id, ...rest } = item
              return Object.values(rest).some((value) =>
                  String(value).toLowerCase().includes(query.toLowerCase())
              )
          })
        : data

    const total = filterData.length

    const startIndex = (pagenum - 1) * pagesize
    const endIndex = Math.min(startIndex + pagesize, total)

    filterData =
        startIndex >= total ? [] : filterData.slice(startIndex, endIndex)

    return NextResponse.json({
        code: 0,
        message: '获取成功',
        data: {
            total,
            list: filterData,
        },
    })
}

// 在发起POST请求时，请求地址是/api/articles
export async function POST(request: Request) {
    const data = await request.json() // 获取请求体中的json数据
    await db.update(({ posts }) =>
        posts.unshift({
            id: Math.random().toString(36).slice(-8),
            ...data,
        })
    )
    return NextResponse.json({
        code: 0,
        message: '添加成功',
        data: data,
    })
}
