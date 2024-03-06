import React from 'react'

function Posts() {
  let k = [1,2,3,4,5,6,7,8,9];
  return (
    <section className="bg-white dark:bg-gray-900 px-10">
      <div className="container md:px-6 pb-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {
            k.map((m ,index) => {
              return (
                <div key={index}>
                  <div className="relative border rounded-lg">
                    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg" alt="" />

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
                      <img className="object-cover object-center w-10 h-10 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />

                      <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Tom Hank</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Creative Director</p>
                      </div>
                    </div>
                  </div>

                  <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    What do you want to know about UI
                  </h1>

                  <hr className="w-32 my-6 text-blue-500" />

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                    praesentium, alias nam? Tempore
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

export default Posts