import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Head>
        <title>MINDSPAK Banner</title>
        <meta name="description" content="Call for Literary Works - MINDSPAK Magazine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Banner Container */}
      <div className="relative w-full max-w-2xl bg-gray-900 rounded-lg shadow-xl p-8 text-center overflow-hidden animate-fade-in-up">
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-20 blur-3xl"></div>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide animate-pulse">
          MINDSPAK
        </h1>
        <p className="text-sm md:text-base text-white mt-2">ENGLISH E-MAGAZINE OF</p>
        <p className="text-sm md:text-base text-white">FACULTY OF AGRICULTURE</p>
        <p className="text-sm md:text-base text-white">RAJARATA UNIVERSITY OF SRI LANKA</p>
        <p className="text-sm md:text-base text-white mt-1">VOLUME 3 ISSUE II | ISSN</p>

        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-orange-500 mt-6 animate-bounce">
          CALL FOR LITERARY WORKS
        </h2>

        {/* Submission Info */}
        <div className="mt-6">
          <div className="bg-orange-500 text-white px-6 py-2 rounded-lg inline-block shadow-lg transform hover:scale-110 transition duration-300">
            <p className="text-lg md:text-xl font-semibold">SHARE YOUR CREATIONS</p>
          </div>
          <p className="text-2xl md:text-3xl text-white mt-2 animate-fade-in">
            SUBMIT BY 20 MAY 2025
          </p>
        </div>

        {/* Theme and Submission Details */}
        <div className="mt-6">
          <p className="text-lg md:text-xl text-orange-500 font-semibold underline animate-fade-in-left">
            THEME: LIFE
          </p>
          <p className="text-lg md:text-xl text-white mt-2">ARE YOU SKILLED IN WRITING?</p>
          <p className="text-lg md:text-xl text-white">WE ACCEPT:</p>
          <ul className="text-lg md:text-xl text-white list-disc list-inside">
            <li className="animate-fade-in-right">POEMS</li>
            <li className="animate-fade-in-right delay-100">SHORT STORIES</li>
            <li className="animate-fade-in-right delay-200">ESSAYS OR REVIEWS</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
        
          <p className="text-sm md:text-base text-white">+94 77 376 104 / +94 71 0997 046</p>
          <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block mt-2 shadow-lg transform hover:scale-110 transition duration-300">
            <p className="text-sm md:text-base">SEND YOUR LITERARY WORKS TO</p>
            <p className="text-sm md:text-base font-semibold">MS.DELTFOA@AGRI.RJT.AC.LK</p>
          </div>
        </div>
      </div>
    </div>
  );
}
