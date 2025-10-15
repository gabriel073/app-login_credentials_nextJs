import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

async function Navbar() {
    const session = await getServerSession(authOptions)

    return (
        <nav className='bg-slate-800 text-white p-4'>
            <ul className='flex items-center'>
                <h1 className='font-bold text-blue-600 mx-8 text-2xl items-center'>NextAut</h1>
                {
                    !session?.user ? (
                        <>
                            <div className='flex gap-4 items-center'>
                                <li><a href="/" className='text-xl hover:text-blue-500'>Home</a></li>
                            </div>
                            <div className='flex justify-end gap-4  w-full mx-8 items-center'>

                                <li><a href="/auth/login" className='text-xl hover:text-blue-500 mx-2'>Login</a></li>
                                <li><a href="/auth/register" className='text-xl hover:text-blue-500'>Register</a></li>
                            </div>
                        </>
                    ) : (
                        <div className="flex justify-between gap-4  w-full mx-8 items-center">
                            <li><a href="/dashboard" className='text-xl hover:text-blue-500'>Dashboard</a></li>
                            <li><a href="api/auth/signout" className='text-xl hover:text-blue-500'>Logout</a></li>
                        </div>
                    )
                }
            </ul>
        </nav>
    )
}
export default Navbar;