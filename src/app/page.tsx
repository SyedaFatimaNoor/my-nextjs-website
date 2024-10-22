"use client";
import React, { useEffect, useState } from 'react';
import Loading from '../Components/Loading';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.error('Failed to fetch data:', e);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);
 
  if (loading) {
    return <Loading />;
  }
 
  return (
    <main className="relative inset-0 w-full min-h-screen">
      {/* First section */}
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./images/bg-img.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-10">
          <div className="bg-white-500 bg-clip-padding backdrop-filter bg-opacity-50 backdrop-saturate-150 backdrop-contrast-75 backdrop-blur-md p-6 rounded-lg shadow-lg text-center w-[700px]">
            <h1 className="text-3xl font-bold uppercase tracking-wider leading-loose text-white">Hi! Everyone</h1>
            <h2 className="text-white text-center font-semibold text-2xl antialiased uppercase">Welcome to my website..</h2>
            <p className="mt-4 text-gray-300 p-1 w-1/2 mx-auto">
              I created this website to learn and practice my skills in Next.js, Tailwind CSS, and TypeScript. It is also a homework assignment given by Sir Mubashir Ali. I hope you like this!
            </p>
            <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl hover:bg-purple-700 transition duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full h-screen flex flex-col items-center bg-white justify-center">
        <h1 className="text-5xl mb-6 mt-20 font-bold uppercase tracking-wider bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent">
          My Coding Journey
        </h1>
        <div className="flex justify-center">
          <img src="./images/coading2.jpg" alt="Coding Journey" className="h-auto rounded w-[36%] -ml-[40%] mt-[34px]" />
        </div>
        <div className="flex items-center justify-center h-full bg-opacity-10">
          <div className="bg-white-500 ml-[203px] mt-[-44%] bg-clip-padding backdrop-filter bg-opacity-50 backdrop-saturate-150 backdrop-contrast-75 backdrop-blur-md p-6 rounded-lg shadow-lg text-center w-[600px]">
            <p className="mt-4 text-black text-center px-4 max-w-lg">
              My coding journey started with a fascination for how websites are built, leading me to learn HTML and CSS. From creating basic web pages, I moved on to mastering TypeScript, which introduced me to more advanced concepts like type safety and better structuring of code. As I progressed, I worked on projects such as Next.js applications, customizing them with tools like tailwind.config.ts, and also gained experience in WordPress and SEO optimization.
            </p>
            <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl hover:bg-purple-700 transition duration-200">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full h-[90vh] flex flex-col items-center bg-gray-100 justify-center">
        <h1 className="text-5xl mb-6 mt-20 font-bold uppercase tracking-wider bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Next Step
        </h1>
        <div className="w-1/2 h-4/5 flex flex-col items-center justify-center">
          <p>
            My coding journey began with learning HTML and CSS, building simple web pages, and quickly moving on to TypeScript, which deepened my understanding of modern web development. Working on Next.js projects and configuring files like tailwind.config.ts allowed me to customize applications, while WordPress and SEO optimization introduced me to the practical side of web development. These experiences have sharpened my skills in both coding and problem-solving.
            <br />
            As I continue to grow, my next step is to dive deeper into Python and Java, expanding my backend knowledge. I’m also looking forward to working on more advanced projects, refining my coding abilities, and potentially exploring full-stack development. Each new challenge pushes me to improve, and I’m excited about the opportunities ahead.
          </p>
        </div>
      </div>
    </main>
  );
}