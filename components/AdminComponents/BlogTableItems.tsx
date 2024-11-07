import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItems = ({authorImg, title, author, date}) => {

    const blogDate = new Date(date);
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Image 
                    src={authorImg?authorImg:assets.profile_icon}
                    width={40}
                    height={40}
                    alt=""
                />
                <p>{author ? author : "No author"}</p>
            </th>
            <td className="px-6 py-4">
                {title? title : "no title"}
            </td>
            <td className="px-6 py-4">
                {blogDate.toDateString()}
            </td>
            <td className="px-6 py-4 cursor-pointer">
                x
            </td>
        </tr>
    )
}

export default BlogTableItems
