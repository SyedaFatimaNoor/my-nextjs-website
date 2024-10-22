import React from 'react';  
import Link from 'next/link';  


const blogs = [  
    {  
        id: 1,  
        title: "Understanding React Hooks",  
        summary: "An in-depth guide to using hooks in React for better state and lifecycle management.",  
        image: "./images/blog1.jpg",  
    },  
    {  
        id: 2,  
        title: "Exploring CSS Grid",  
        summary: "Learn how to create complex layouts using CSS Grid in your web projects.",  
        image: "./images/blog2.jpg",  
    },  
    {  
        id: 3,  
        title: "Next.js: The React Framework",  
        summary: "Discover how Next.js can enhance your React apps .",  
        image: "./images/blog3.jpg",  
    },  
];  

export default function Blog() {  
    return (  
        <main style={{ backgroundColor: "white" }} className="flex flex-col items-center justify-center">  
            {/* Header Section */}  
            <div className="relative w-full h-20 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog.jpg')" }}>  
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 rounded-lg"></div>  
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">  
                    <h1 style={{ padding: '14px' }} className="text-3xl font-bold uppercase m-0 tracking-wider leading-loose bg-white bg-opacity-10 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mt-12">  
                        My Blogs  
                    </h1>  
                </div>  
            </div>  

            {/* Blog Posts Section */}  
            <div className="flex  flex-row-reverse items-center justify-center w-full p-4">  
                {blogs.map(blog => (  
                    <div key={blog.id} className="flex flex-col max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden my-4 mx-2">  
                        <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />  
                        <div className="p-4">  
                            <h2 className="text-xl font-bold">{blog.title}</h2>  
                            <p className="text-gray-600 mt-2">{blog.summary}</p>  
                            <Link href={`/blog/${blog.id}`} className="mt-4 inline-block text-purple-600 hover:underline">  
                                Read More  
                            </Link>  
                        </div>  
                    </div>  
                ))}  
            </div>  
        </main>  
    );  
}



