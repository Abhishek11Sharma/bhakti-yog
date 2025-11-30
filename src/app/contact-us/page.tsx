"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-purple-200 dark:border-purple-700">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 dark:text-purple-300 mb-6 text-center">
          Contact Me
        </h1>

        {/* Professional Message */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 text-center">
          Hello! I am <span className="font-semibold">Abhishek Sharma</span>, a devoted follower of <span className="font-semibold">Shree Radha</span>. 
          I am passionate about sharing devotional insights and connecting with fellow devotees.
        </p>

        {/* Contact Information */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 text-center">
          You can reach me directly via email at:{" "}
          <a 
            href="mailto:tost9870@gmail.com" 
            className="text-purple-700 dark:text-purple-400 font-semibold hover:underline"
          >
            tost9870@gmail.com
          </a>
        </p>

        {/* Optional Encouraging Note */}
        <p className="text-md md:text-lg text-gray-500 dark:text-gray-400 text-center">
          Feel free to send me your questions, thoughts, or any devotional experiences you’d like to share. 
          I look forward to connecting with you and walking the path of devotion together.
        </p>

      </div>
    </div>
  );
}
