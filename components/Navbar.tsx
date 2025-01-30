import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signOut, signIn} from "@/app/auth";

const Navbar =  async () => {
    const session = await auth()
    return (
        <header className={"px-5 py-5 bg-white shadow-sm font-work-sans"}>
            <nav className={"flex justify-between items-center"}>
                <Link href="/public">
                    <Image src={"/app_logo.png"} alt={"YC_Directory"} width="144" height="30"/>
                </Link>
                <div className={"flex justify-between items-center gap-5 text-black"}>
                    {session && session.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>
                            <Link href={`/user/${session?.user?.id}`}>
                                <span>{session && session?.user?.name}</span>
                            </Link>
                            <form action={ async () => {
                                "use server";
                                await signOut({redirectTo : "/"})}}>
                                <button type="submit">Logout</button>
                            </form>
                        </>
                    ) :(
                        <form action={async () => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type={"submit"}>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
