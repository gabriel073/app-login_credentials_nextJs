"use client";

import { signOut } from "next-auth/react";

function SettingsPage() {
    return (
        <div className=' flex container m-auto justify-center items-center flex-col w-1/2'>
            <h1 className="text-3xl text-fuchsia-900 font-extrabold  justify-center items-center mt-10">🎇 Settings Page 🎇</h1>
            <button className='p-3 rounded-lg block my-4 bg-blue-500 text-slate-300 w-1/4 text-xl  hover:bg-blue-700 cursor-pointer' onClick={() => signOut()}>Logout</button>
        </div>
    )
}

export default SettingsPage;