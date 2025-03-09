"use client"
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

import { useEffect,useState } from 'react';
const page = () => {
const[formData,setFormData]=useState({
name:"",
url:"",
id:"",
slug:"",
});

const handleChange=(e)=>{
    const{ name,value}= e.target;
    setFormData((prevData)=>({
    ...prevData,
    [name]:value,
  
    }));
};

const handleSave=()=>{

console.log("Details",formData);


}
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex flex-row justify-center m-20 gap-12 h-4/5 scroll-behaviour">
        <div className="flex h-auto flex-wrap w-60 border-custom shadow-xl font-bold lg:bg-zinc-800/50 backdrop-blur-md gap-12 overflow-auto content-center ">
        <Link href="/dashboard/general"> <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">General</div></Link>
        <Link href="/dashboard/voting_sites">   <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">Voting Site</div></Link>
        <Link href="/store">   <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">Store</div></Link>
        <Link href="/dashboard/Home">  <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">Home</div></Link>
        <Link href="/dashboard/general">  <div className="m-5 flex flex-col justify-center items-center w-10/12 h-6 text-xl hover:text-2xl duration-300 cursor-pointer transition-all">General</div></Link>
        </div>

        <div className="flex-1 h-full flex-wrap justify-center gap-4 lg:gap-0 lg:bg-zinc-800 text-white font-bold border-custom shadow-xl">
          <div className="px-10 py-5 h-full w-full text-xl ">
            <form className="flex flex-col h-full justify-between">
              <div>
                <div className="mb-4 flex gap-5 items-center">
                  <label className="text-white text-l font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input

                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 flex gap-5 items-center">
                  <label className="text-white text-l font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  />
            
              </div>

              <div className="mb-4 flex gap-5 items-center">
                  <label className="text-white text-l font-bold mb-2" htmlFor="slug">
                    Slug
                  </label>
                  <input
                    type="slug"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  />
            
              </div>
              </div>

              <div className="flex justify-end gap-2">
                
                  <button
                  
                  type="submit"
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page