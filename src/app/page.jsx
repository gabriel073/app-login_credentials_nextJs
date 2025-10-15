

export default function HomePage() {
  return (
    <>
      <div className='h-[calc(100vh-7rem)] flex justify-center items-center ' >
        <div className=' flex container m-auto justify-center items-center flex-col w-1/2'>
          <h1 className="text-3xl text-fuchsia-900 font-extrabold   justify-center items-center mt-10">🎇 Home Page 🎇</h1>

        </div>

      </div>
      <div className=" flex justify-center mt-[-12rem]">

        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" className='w-1/4 items-center' />
      </div>
    </>
  );
}
