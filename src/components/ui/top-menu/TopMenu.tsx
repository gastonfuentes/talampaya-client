import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const TopMenu = () => {
    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            <div>
                <Link href={"/"}>
                    <span className={`${titleFont.className} antialiased font-bold`}>Talampaya Pro Tour</span>
                </Link>
            </div>

            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-slate-500' href={"/ranking"}>Ranking</Link>
            </div>

        </nav>
    )
}
