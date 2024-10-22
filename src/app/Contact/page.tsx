export default function Contact() {  
    return (  
        <main style={{ backgroundColor: "white" }} className="flex flex-col items-center justify-center">  
            <div className="relative w-full h-20 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/contact.jpg')" }}>  
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 rounded-lg"></div>  

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">  
                    <h1 style={{ padding: '14px' }} className="text-3xl font-bold uppercase m-0 tracking-wider leading-loose text-white bg-white bg-opacity-10 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mt-12">  
                        Contact Me  
                    </h1>  
                </div>  
            </div>  

            <div className="mt-6 p-8 max-w-xl bg-gray-100 rounded-lg shadow-lg">  
                <h2 className="text-2xl font-semibold uppercase mb-4">Get in Touch</h2>  
                <p className="mb-4 text-lg text-gray-700">  
                    If you have any questions, feedback, or just want to say hello, feel free to reach out to me using the form below. You can also connect with me on social media!  
                </p>  

                {/* Contact Form */}  
                <form className="flex flex-col space-y-4">  
                    <input  
                        type="text"  
                        placeholder="Your Name"  
                        className="p-2 border border-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"  
                        required  
                    />  
                    <input  
                        type="email"  
                        placeholder="Your Email"  
                        className="p-2 border border-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"  
                        required  
                    />  
                    <textarea  
                        placeholder="Your Message"  
                        className="p-2 border border-purple-400 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"  
                        rows={4}  
                        required  
                    ></textarea>  
                    <button  
                        type="submit"  
                        className="bg-purple-600 text-white p-2 rounded-tr-xl rounded-bl-xl hover:bg-purple-700 transition duration-300"  
                    >  
                        Send Message  
                    </button>  
                </form>  

                
                <div className="mt-8">  
                    <h3 className="text-lg font-semibold mb-2 uppercase">Connect with me:</h3>  
                    <ul className="space-y-2">  
                        <li>  
                            <a href="https://www.instagram.com/fati.manoor7805/profilecard/?igsh=MWZ5ZXcyanEwYzdhMQ==" target="_blank" className="text-purple-500 hover:underline">  
                                Instagram  
                            </a>  
                        </li>  
                        <li>  
                            <a href="https://github.com/SyedaFatimaNoor" target="_blank" className="text-purple-500 hover:underline">  
                                GitHub  
                            </a>  
                        </li>  
                        <li>  
                            <a href="https://linkedin.com" target="_blank"className="text-purple-500 hover:underline">  
                                LinkedIn  
                            </a>  
                        </li>  
                    </ul>  
                </div>  
            </div>  
        </main>  
    );  
}