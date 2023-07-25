"use client";

import Link from "next/link";
import Image from "next/image";
import BASE_DATA from "@/config/base_data";
import {usePathname} from "next/navigation";
import {Navigation} from "@/app/ui/Navigation";


export default function Header() {
    // 是否是首页
    const isIndex = usePathname() === '/';
    // Logo HTML
    const LogoLinkHtml = (
        <Link href={'/'} title={BASE_DATA.SITE_NAME}>
            <Image src={'/logo-YILING-1000x230.svg'} alt={BASE_DATA.SITE_NAME} width={200} height={46}/>
        </Link>
    );
    // 导航数据
    const navLinks = [
        {
            href: '/',
            name: '首页'
        },
        {
            href: '/products',
            name: '产品'
        },
        {
            href: '/blog',
            name: '博客'
        }
    ];
    return (
        <header id={'header'}>
            <div className={'container mx-auto py-4 px-6 flex justify-between'}>
                {/* Logo */}
                {isIndex ? <h1>{LogoLinkHtml}</h1> : <h2>{LogoLinkHtml}</h2>}
                {/* 导航 */}
                <Navigation navLinks={navLinks}/>
            </div>
        </header>
    )
}
