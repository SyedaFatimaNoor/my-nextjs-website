export default function Services() {
    return (
        <main className="flex flex-col items-center justify-center">
            <div className="relative w-full h-20 md:h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/services.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50 rounded-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 style={{ padding: '14px' }} className="text-3xl font-bold uppercase m-0 tracking-wider leading-loose text-white bg-opacity-10 rounded-lg shadow-lg p-4 md:p-6 lg:p-8 mt-12">
                        My Services
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-auto p-4">
                <h2 className="text-5xl mt-3 font-bold uppercase tracking-wider bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
                    Our Expertise
                </h2>
                <p className="text-center text-gray-700 max-w-4xl leading-relaxed mx-auto">
                    We offer a variety of services tailored to meet your needs. From web development to digital marketing,
                    our team is dedicated to helping your business thrive in the digital world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Web Development</h3>
                        <p>Building responsive and modern websites to elevate your online presence.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">SEO Optimization</h3>
                        <p>Enhancing your website&apos;s visibility and driving organic traffic.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                        <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
                        <p>Creating customized strategies to reach your target audience effectively.</p>
                    </div>
                </div>

                <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-tr-xl rounded-bl-xl hover:bg-purple-700 transition duration-200">
                    Contact Us
                </button>
            </div>
        </main>
    );
}
