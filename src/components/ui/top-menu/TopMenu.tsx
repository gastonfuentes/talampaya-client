import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { TopMenuItem } from './TopMenuItem'

export const TopMenu = () => {


    const menuItems = [
        {
            path: '/torneos',
            title: 'torneos',
            subTitle: 'torneos del torneo talampaya pro tour'
        },
        {
            path: '/ranking',
            title: 'ranking',
            subTitle: 'rankings del torneo talampaya pro tour'
        },
        {
            path: '/nosotros',
            title: 'nosotros',
            subTitle: 'nosotros'
        },
    ]


    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            <div>
                <Link href={"/"}>
                    <span className={`${titleFont.className} antialiased font-bold`}>Talampaya Pro Tour</span>
                </Link>
            </div>

            <div className='hidden sm:block'>
                {menuItems.map(item => (
                    <TopMenuItem path={item.path} title={item.title} subTitle={item.subTitle} key={item.path} />
                ))}
            </div>

        </nav>
    )
}
