import Link from 'next/link';  

const Custom404: React.FC = () => {  
    return (  
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 p-4">
        <h1 className="text-8xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Page not found.</h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
            The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        
        <Link href="/" passHref>  
            <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl hover:bg-purple-700 transition duration-200">  
            Go to Homepage 
            </button>  
        </Link>  
        <Link href="/About" passHref>  
            <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl hover:bg-purple-700 transition duration-200">  
            About Us
            </button>  
        </Link>  
        </div>  
    );  
   };  
   
   export default Custom404;  

