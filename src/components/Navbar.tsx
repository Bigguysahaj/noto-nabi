import MaxWidthWebWrapper from "./MaxWidthWebWrapper";
import Link from "next/link";
import { buttonVariants } from '@/components/ui/button'
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWebWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-bold">
                        <span>noto-nabi</span>
                    </Link>

                    {/* add mobile num */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                                href='/pricing'
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                })}>
                                Pricing
                            </Link>
                            <LoginLink 
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                })}>
                                Log in
                            </LoginLink>
                            <LoginLink 
                                className={buttonVariants({
                                    size: 'sm',
                                })}>
                                Get started
                            </LoginLink>
                        </>
                    </div>
                </div>
            </MaxWidthWebWrapper>
        </nav>
    )
}

export default Navbar
