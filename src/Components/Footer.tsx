import Link from 'next/link';  

export default function Footer() {  
  return (  
    <footer className="bg-gray-900 text-white py-8">  
      <div className="max-w-5xl mx-auto px-4">  
        <div className="flex justify-between items-center">  
          <div className="mb-4">  
            <h2 className="text-2xl font-bold">Noor's Web</h2>  
            <p className="text-sm">Connecting the world through great design.</p>  
          </div>  
          <div className="flex space-x-4">  
            <Link href="/" className="hover:text-purple-400 transition duration-300">Home</Link>  
            <Link href="/About" className="hover:text-purple-400 transition duration-300">About</Link>  
            <Link href="/Services" className="hover:text-purple-400 transition duration-300">Services</Link>  
            <Link href="/Contact" className="hover:text-purple-400 transition duration-300">Contact</Link>  
            <Link href="/blog" className="hover:text-purple-400 transition duration-300">Blog</Link>  
          </div>  
        </div>  
        <div className="border-t border-gray-700 mt-4 pt-4 text-center">  
          <p className="text-sm">&copy; {new Date().getFullYear()} Noor's Web. All rights reserved.</p>  
        </div>  
      </div>  
    </footer>  
  );  
}