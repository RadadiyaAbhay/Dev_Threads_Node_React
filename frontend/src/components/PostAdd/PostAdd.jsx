import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { MdTitle, MdContentPasteGo } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { addPost, getPost } from '../../services/actions/post.action';

const PostAdd = () => {
    const [open, setOpen] = useState(false)
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.userReducer)

    const [input, setInput] = useState({
        title: '',
        content: '',
        author: user?.name,
        userId: user?._id,
        fileImg: null
    })
    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleFileInput = (e) => {
        setInput({ ...input, fileImg: e.target.files[0] });
    };
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('title', input.title);
        formData.append('content', input.content);
        formData.append('author', input.author);
        formData.append('userId', input.userId);
        formData.append('fileImg', input.fileImg);
        dispatch(addPost(formData));
        setInput({
            title: '',
            content: '',
            author: user?.name,
            userId: user?._id,
            fileImg: null
        })
        setOpen(false)
    }
    return (
        <>
            <section className="bg-white mt-2 md:mt-4 dark:bg-gray-900 px-10 ">
                <div className="container md:px-6 mx-auto ">
                    <div className=''>
                        <div className='flex justify-end'>

                            <button onClick={() => {
                                setOpen(true)
                            }} type='button' className='bg-gray-900 px-5 py-2  rounded-xl text-white font-bold'>Add Post</button>
                        </div>
                        {
                            open ? (
                                <div className='absolute z-10 left-0 top-0 size-full'>
                                    <div className="flex justify-center">
                                        <div className='w-7/12 bg-white my-10  border-2 shadow-xl rounded-xl'>
                                            <form className="w-full p-10" encType="multipart/form-data">
                                                <div className='flex justify-end'>
                                                    <button type="button" onClick={() => { setOpen(false) }}><GiCancel className='text-2xl' /></button>
                                                </div>
                                                <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Add Post</h1>

                                                <div className="relative flex items-center mt-8">
                                                    <span className="absolute">
                                                        <MdTitle className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' />
                                                    </span>

                                                    <input type="text" name='title' value={input.title} onChange={handleInput} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Post Title" />
                                                </div>

                                                <div className="relative flex items-center mt-4">
                                                    <span className="absolute">
                                                        <MdContentPasteGo className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' />

                                                    </span>

                                                    <input type="text" name='content' value={input.content} onChange={handleInput} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Post Content" />
                                                </div>
                                                <div className="relative flex items-center mt-4">
                                                    <span className="absolute">
                                                        <MdContentPasteGo className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' />

                                                    </span>

                                                    <input type="file" name='fileImg' onChange={handleFileInput} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Enter Post Img" />
                                                </div>
                                                <div className="mt-6">
                                                    <button type='button' className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleSubmit}>
                                                        Add Post
                                                    </button>



                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            ) : (<></>)
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostAdd