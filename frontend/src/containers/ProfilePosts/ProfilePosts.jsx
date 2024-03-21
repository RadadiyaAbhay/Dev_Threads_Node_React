import React from 'react'
import { useSelector } from 'react-redux'


function ProfilePosts() {

  let { posts } = useSelector(state => state.postReducer)
  const {user} = useSelector(state => state.userReducer)

  let newData = posts?.filter((post) =>{
    return  post?.userId == user?._id;
  })


  return (
    <section className="bg-white dark:bg-gray-900 px-10">
      <div className="container md:px-6 pb-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            newData?.map((m, index) => {
              const imgpath = `http://localhost:3000/uploads/${m.fileImg}`
              return (
                <div key={index}>
                  <div className="relative border rounded-lg">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={imgpath} alt="" />

                    <div className="absolute bottom-0  items-center flex p-3 bg-white dark:bg-gray-900">
                      <img className="object-cover object-center w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />

                      <div className="mx-4 ">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{m.author}</h1>
                      </div>
                    </div>
                  </div>

                  <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                  {m.title}
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {m.content}
                  </p>

                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}

export default ProfilePosts