export default function About() {  
    return (  
        <main style={{ backgroundColor: "white" }} className="flex flex-col items-center justify-center">   
            <div className="relative w-full h-20 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/aboutme.jpg')" }}>   
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 rounded-lg"></div>  
                  
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 ">  
                    <h1 style={{ padding: '14px' }} className="text-3xl font-bold uppercase m-0 tracking-wider leading-loose text-white bg-white bg-opacity-10 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mt-12">  
                        ABOUT ME  
                    </h1>  
                    <p className="mt-4 text-lg max-w-2xl text-center p-4 bg-white bg-opacity-10 rounded-lg shadow-lg">   
                        Hi! Everyone, I am Syeda Noor ul Ain Fatima, and I am a frontend developer skilled in HTML, CSS, and TypeScript. I am also learning Next.js and Tailwind CSS through the GIAIC program with Sir Mubashir Ali. This website is a home assignment assigned by him.   
                    </p>  
                </div>  
            </div>  

            <div className="mt-6 text-start p-14 h-full w-full bg-black-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-black-100 w-7/10">  
                <h2 className="text-2xl font-semibold">My Skills</h2>  
                <div className="mt-2 text-lg text-black max-w-3xl mx-auto">  
                    <p>I have a strong foundation in web development technologies, including:</p>
                    <ul className="list-disc list-inside mt-2">  
                        <li>HTML5</li>  
                        <li>CSS3</li>  
                        <li>JavaScript (TypeScript)</li>  
                        <li>React.js</li>  
                        <li>Next.js (currently learning)</li>  
                        <li>Tailwind CSS (currently learning)</li>  
                    </ul>  
                </div>
                
                <h2 className="mt-8 text-2xl font-semibold">Projects</h2>  
                <div className="mt-2 text-lg text-black max-w-3xl mx-auto">  
                    <p>I have worked on several projects, which include:</p>  
                    <ul className="list-disc list-inside mt-2">  
                        <li>  
                            <a   
                                href="https://cosmic-boba-c6366c.netlify.app/"   
                                target="_blank"   
                                rel="noopener noreferrer"   
                                className="text-purple-500 hover:underline"  
                            >  
                                Css Animated Website  
                            </a>  
                        </li>  
                        <li>  
                            <a   
                                href="https://phenomenal-tarsier-3b6c2b.netlify.app/"   
                                target="_blank"   
                                rel="noopener noreferrer"   
                                className="text-purple-500 hover:underline"  
                            >  
                                Flipping Card  
                            </a>  
                        </li>  
                        <li>  
                            <a   
                                href="https://venerable-crepe-3595ff.netlify.app/"   
                                target="_blank"   
                                rel="noopener noreferrer"   
                                className="text-purple-500 hover:underline"  
                            >  
                                Chocolate can website  
                            </a>  
                        </li>  
                    </ul>  
                </div>  

                <h2 className="mt-8 text-2xl font-semibold">Hobbies</h2>  
                <div className="mt-2 text-lg text-black max-w-3xl mx-auto">  
                    <p>In my free time, I enjoy:</p>  
                    <ul className="list-disc list-inside mt-2">  
                        <li>Reading books on web technologies</li>  
                        <li>Exploring new programming languages</li>  
                        <li>Working on personal projects</li>  
                        <li>Photography and travel</li>  
                    </ul>  
                </div>  
            </div>  
        </main>  
    );  
}
