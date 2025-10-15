"use client";
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [error, setError] = useState(null);

    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn('credentials', {
            email: data.email,
            password: data.password
            , redirect: false
        })

        if (res.error) {
            setError(res.error)
        } else {
            router.push('/dashboard')
            router.refresh()
        }

    })
    return (
        <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
            <form className='w-1/4' onSubmit={onSubmit}>
                <h1 className='text-3xl font-bold  text-blue-600 mb-4 text-center' >Login</h1>
                {error && (
                    <p className='bg-red-500 text-lg rounded text-white p-3'>{error}</p>
                )}
                <label htmlFor="email" className='block text-sm my-2 text-slate-500 w-full'>Email:
                </label>
                <input type="email" placeholder="Email" className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full ' {...register("email", {
                    required: {
                        value: true,
                        message: "Email is required"
                    }
                })} />
                {errors.email && <span className='text-sm text-red-500 mb-2'>{errors.email.message}</span>}

                <label htmlFor="password" className='block text-sm my-2 text-slate-500 w-full'>Password:
                </label>
                <input type="password" {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required"
                    }
                })} name="password" placeholder="*******" className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full ' />
                {errors.password && <span className='text-sm text-red-500 mb-2'>{errors.password.message}</span>}

                <button type="submit" className='p-3 rounded-lg block my-4 cursor-pointer bg-blue-500 text-slate-300 w-full text-xl  hover:bg-blue-700'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage;