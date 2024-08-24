import React from 'react'
import logo from '../images/Vibex.png'
const Forum = () => {
  return (
    <div className='flex justify-center w-full h-screen shadow-2xl max-w-[1400px] m-auto'>
     <div className='bg-[#2DCFC1] shadow-xl w-[40%]' >

     </div>
     <div className='w-[60%] p-[100px] flex '>
        <div className=''>
            <img src={logo} alt="" />
            <h1 className='text-4xl font-bold mt-7 text-black/80'>Quiz Rimayu</h1>
            <p className='mt-7 text-lg font-medium text-[#B6B8C3]'>Masukan namamu sebagai user pada forum untuk memulai pertandingan
                <br></br>
                jangan lupa sholat sebelum bermain game ini okei
            </p>

            <div className='mt-7 border-2  border-dashed garis border-[#B6B8C3]'></div>

            <div className='mt-[80px] text-[#6F7D97] w-[450px]'>
                <h1 className='text-lg font-bold '>Username</h1>
                <input type="text" className='border-[#CED4DA] px-3 border-2 rounded-lg mt-3 h-[70px] w-full' placeholder='Masukan Username'  />
                <div className='flex items-center gap-2'>
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>                <p className='mt-6 [&_span]:text-[#2DCFC1] text-medium font-semibold'>I've read and agree with the <span> Terms of services, Privacy Policy </span> and <span> Return and Refund Policy </span></p>
                </div>
                <button className='w-full active:scale-95 h-[60px] mt-7 font-bold text-xl rounded-lg rounde-lg text-bold text-white bg-[#2DCFC1]'>
                    Send
                </button>
                <p className='text-end text-[#2DCFC1] mt-7 font-medium'>Have a referral code?</p>
            </div>

        </div>
        
     </div>
    </div>
  )
}

export default Forum
