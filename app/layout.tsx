import './globals.css';
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
import { User } from './user';
import { NavItem } from './nav-item';

export const metadata = {
    title: 'Khaata Online - Three Star Sanitory Store ',
    description:
        'A system to help you manage your shop easily.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-full bg-gray-50" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}>
                <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                    <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                        <div className="flex h-full max-h-screen flex-col gap-2">
                            <div className="flex h-[60px] items-center border-b px-5">
                                <Link
                                    className="flex items-center gap-2 font-semibold"
                                    href="/"
                                >
                                    <Logo />
                                    <span className="">ACME</span>
                                </Link>
                            </div>
                            <div className="flex-1 overflow-auto py-2">
                                <nav className="grid items-start px-4 text-sm font-medium">
                                    <NavItem href="/">
                                        <UsersIcon className="h-4 w-4" />
                                        Users
                                    </NavItem>
                                    <NavItem href="/settings">
                                        <SettingsIcon className="h-4 w-4" />
                                        Settings
                                    </NavItem>

                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
                            <Link
                                className="flex items-center gap-2 font-semibold lg:hidden"
                                href="/"
                            >
                                <Logo />
                                <span className="">ACME</span>
                            </Link>
                            <User />
                        </header>
                        {children}
                    </div>
                </div>
                <Analytics />
            </body>
        </html>
    );
}