'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

function RegisterPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.confirmPassword) {
            return alert("Passwords do not match");
        }
        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                username: data.username,
                email: data.email,
                password: data.password
            })
            ,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(errors);
        if (res.ok) {
            router.push('/auth/login')
        }


    })

    return (
        <div className='h-[calc(100vh-7rem)] flex justify-center items-center'>
            <form onSubmit={onSubmit} className='w-1/4'>
                <h1 className='text-3xl font-bold mb-4 text-center text-blue-600'>Register</h1>

                <label htmlFor="username" className='block text-sm my-2  text-slate-500 w-full'>Username:
                </label>
                <input type="text" {...register("username", {
                    required: {
                        value: true,
                        message: "Username is required"
                    }
                })} placeholder="Username" className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full' />
                {errors.username && <span className='text-sm text-red-500 mb-2'>{errors.username.message}</span>}

                <label htmlFor="email" className='block text-sm my-2 text-slate-500 w-full'>Email:
                </label>
                <input type="email" {...register("email", {
                    required: {
                        value: true,
                        message: "Email is required"
                    }
                })} placeholder="Email" className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full' />
                {errors.email && <span className='text-sm text-red-500 mb-2'>{errors.email.message}</span>}

                <label htmlFor="password" className='block text-sm my-2 text-slate-500 w-full'>Password:
                </label>
                <input type="password" {...register("password", {
                    required: {
                        value: true,
                        message: "Password is required"
                    }
                })} placeholder="*****" className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full' />
                {errors.password && <span className='text-sm text-red-500 mb-2'>{errors.password.message}</span>}

                <label htmlFor="confirmPassword" className='block text-sm my-2 text-slate-500 w-full'>Confirm Password:
                </label>
                <input type="password" {...register("confirmPassword", {
                    required: {
                        value: true,
                        message: "You must confirm your password"
                    }
                })} placeholder="*****" className='p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full' />
                {errors.confirmPassword && <span className='text-sm text-red-500 mb-2'>{errors.confirmPassword.message}</span>}
                <button type="submit" className='p-3 rounded-lg block my-4 bg-blue-500 text-slate-300 w-full  hover:bg-blue-700 text-xl cursor-pointer'>Register</button>
            </form>
        </div>
    )
}
export default RegisterPage;