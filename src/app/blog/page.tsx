"use client"
import React, { useEffect, useState } from 'react'
import BlogComponent from '../components/BlogComponent';

export default function BlogPage() {

  const [blog, setBlog]=useState([]);

  useEffect(()=>{
    async function getAllBlog(){
      // const res=await fetch(process.env.NEXT_PUBLIC_BASE_URL+'/posts');
      const res=await fetch(`https://dummyjson.com`+'/posts');
      const data=await res.json();
      console.log(`====> data: ${data}`)
      setBlog(data?.posts);
      return data;

    }
    getAllBlog();
  }, []);



  // interface partialBlog


  return (
    <div>
      {
        blog?.map(({name, body}, id)=>(
          <BlogComponent 
          id={id}
          key={id} 
          title={name} 
          body={body}/>
        ))
      }

    </div>
  )
}
