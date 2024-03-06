import React from 'react'

const User = () => {
  return (
    <>
      <section className="bg-white mt-8 md:mt-16 dark:bg-gray-900 px-10">
        <div className="container md:px-6 mx-auto flex justify-center">
          <div className="flex flex-wrap md:w-6/12 w-full items-center">
            <div className='w-full flex flex-wrap'>
              <div className='md:w-4/12 w-full flex justify-center md:pb-0 pb-8'>
                <div className="w-32 h-32 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="object-cover w-full h-full" alt="avatar" />
                </div>
              </div>
              <div className='md:w-8/12 pt-5 w-full ps-5'>
                <h5 className='text-2xl font-bold text-center md:text-start'>Tom Hank</h5>
                <p className='text-center md:text-start'>Fullstack Developer</p>
              </div>
            </div>
            <div className='w-full flex pt-5'>

              <div className='w-4/12'>
                <p className='text-center text-lg font-medium'>80</p>
                <p className='text-center text-xl truncate font-semibold'>Threds</p>
              </div>
              <div className='w-4/12'>
                <p className='text-center text-lg font-medium'>1000</p>
                <p className='text-center text-xl truncate font-semibold'>Followers</p>
              </div>
              <div className='w-4/12'>
                <p className='text-center text-lg font-medium'>10</p>
                <p className='text-center text-xl truncate font-semibold'>Following</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default User  