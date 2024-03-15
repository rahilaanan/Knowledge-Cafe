import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] =useState([]);


    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div>
            <h4 className="text-2xl">Blogs:  {blogs.length}</h4>
            {
               blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;