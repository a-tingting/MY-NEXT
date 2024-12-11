import React from 'react'
import { Card } from 'antd'
import { data } from '@/data'

interface Props {
    params: { id: string }
}

// 标签页的元数据生成函数
export async function generateMetadata({ params }: Props) {
    return {
        title: `博客详情-${params.id}`,
    }
}

export default function page({ params }: Props) {
    const item = data.find((item) => item.id === +params.id)! //!非空断言，告诉编译器，这个值不会是null或undefined
    return (
        <div>
            <Card title={item?.title}>
                <p>{item?.body}</p>
            </Card>
        </div>
    )
}
