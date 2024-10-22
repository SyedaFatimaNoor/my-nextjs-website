const Loading: React.FC = () => {  
    return (  
    <div className="flex items-center justify-center h-screen bg-gray-100">  
    <div className="flex flex-col items-center">  
    <svg className="animate-spin h-20 w-20 text-purple-900 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="002424">  
    <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" />  
    <path className="opacity-75" fill="currentColor" d="M412a8801016088000-160z" />  
    </svg>  
    <p className="text-xl font-semibold text-gray-700">Loading...</p>  
    </div>  
    </div>  
    );  
   }  
   
   export default Loading;  


   