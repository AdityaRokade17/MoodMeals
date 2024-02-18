import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='bg-neutral-900 flex flex-col gap-10 items-center justify-center p-5 '>
          <div className='w-[60rem] text-white flex flex-col gap-4 items-center'>
            <h1 className='font-extrabold text-6xl text-white '><span className='text-blue-600'>Contact</span> us</h1>
          </div>
          <div className='flex flex-col gap-2 items-center w-[25rem] bg-black p-5 rounded-lg'>
          <form className="mt-6 w-full">
                    <div className="mb-2">
                        <label
                            htmlFor="fullname"
                            className="block text-sm font-semibold text-neutral-200"
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            value={""}
                            onChange={""}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-neutral-200"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={""}
                            onChange={""}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-neutral-200"
                        >
                            Phone No.
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={""}
                            onChange={""}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-neutral-100  "
                        >
                            Message
                        </label>
                        <textarea
                            type="message"
                            id="message"
                            name="message"
                            value={""}
                            onChange={""}
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-zinc-900 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-600">
                            Send
                        </button>
                    </div>
                </form>

          </div>
        </div>
  )
}

export default Contact