import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div  className='flex items-center justify-between mx-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
    {/* left side */}
      <div >
         <h1 className='text-4xl xl:text-5xl 2xl-text-6xl font-bold text-neutral-700 leading-tight'>
            Remove the <br className='max-md:hidden' /> <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'> background</span> from <br className='max-md:hidden' /> images for free.
         </h1>
            <p className='my-6 text-[15px] text-gray-500'>Lorem ipsum dolor sit amet,  incididunt ut labore et dolore magna aliqua. <br className='max-md:hidden' /> Ut enim ad minim veniam, laboris nisi ut aliquip ex ea commodo consequat. </p>
         <div>
         <input type='file' name='' id='upload1' hidden/>
         <label htmlFor='upload1' className='inline-flex gap-3 px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-600'>
            <img width={20 } src={assets.upload_btn_icon}  alt='Upload img' />
            <p className='text-white text-sm'> Upload Your Images</p>
         </label>
         </div>
      </div>
      {/* rigth side */}
      <div className='w-full max-w-md'>
        <img src={assets.header_img} alt='Header_img' />


      </div>
    </div>
  )
}

export default Header
