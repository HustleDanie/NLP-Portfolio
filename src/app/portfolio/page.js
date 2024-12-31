'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'Sentiment Analysis with BERT',
    description: 'A project implementing sentiment analysis using BERT.',
    technologies: ['Python', 'BERT', 'NLP'],
    image: 'https://via.placeholder.com/300',
    details:
      'This project focuses on analyzing text sentiment using the BERT transformer model. It demonstrates the use of fine-tuning for downstream NLP tasks.',
  },
  {
    title: 'Text Summarization with Transformers',
    description: 'A tool to summarize large text using Transformer models.',
    technologies: ['Transformers', 'Hugging Face', 'Python'],
    image: 'https://via.placeholder.com/300',
    details:
      'Using Hugging Face’s pre-trained models, this tool generates summaries for lengthy articles, showcasing advanced transformer usage.',
  },
  {
    title: 'Named Entity Recognition (NER)',
    description: 'An NLP application to extract named entities from text.',
    technologies: ['SpaCy', 'NLP', 'Python'],
    image: 'https://via.placeholder.com/300',
    details:
      'This project utilizes SpaCy for Named Entity Recognition to extract meaningful entities like names, dates, and organizations.',
  },
  {
    title: 'Custom Chatbot Development',
    description: 'A chatbot using NLP techniques and deep learning.',
    technologies: ['Dialogflow', 'NLP', 'TensorFlow'],
    image: 'https://via.placeholder.com/300',
    details:
      'An AI-driven chatbot built with Dialogflow, integrated with TensorFlow for enhanced conversational capabilities.',
  },
];

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          NLP Projects Portfolio
        </h2>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 p-3 mb-4 sm:mb-0 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div className="flex flex-wrap gap-2">
            {['All', 'Python', 'BERT', 'Transformers', 'Hugging Face', 'SpaCy', 'Dialogflow', 'TensorFlow'].map(
              (tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 text-sm font-medium rounded-full shadow-md ${
                    selectedTech === tech
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-300'
                  } hover:bg-blue-500 hover:text-white transition-all`}
                >
                  {tech}
                </button>
              )
            )}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition-transform hover:scale-105"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No projects match your search or filter criteria.
            </p>
          )}
        </div>

        {/* Modal */}
        {activeProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeProject.title}</h3>
              <p className="text-gray-600 mb-4">{activeProject.details}</p>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                onClick={() => setActiveProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
