import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Optimized and styled profile image */}
        <Image
          src="/robot dog.jpg"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
        />
        {/* About Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            I am an aspiring NLP researcher and developer with a keen interest
            in building AI solutions that solve real-world problems. My
            expertise lies in language modeling, sentiment analysis, and chatbot
            development. I am passionate about advancing natural language
            technologies and their applications.
          </p>
          {/* Call to Action Button */}
          <div className="mt-6">
            <a
              href="#projects"
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
