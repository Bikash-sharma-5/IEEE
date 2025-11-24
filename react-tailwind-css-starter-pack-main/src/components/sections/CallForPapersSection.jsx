import React from 'react';
import { BookOpen, Link as LinkIcon } from 'lucide-react';
import Section from '../common/Section';
import ImportantDatesTimeline from './ImportantDatesTimeline';
import { paperTopics, conferenceInfo } from '../../data/constants';

const CallForPapersSection = () => (
  <Section id="papers" title="Call for Papers & Important Dates">
    <div className="flex flex-col w-[100%] mx-auto">
      {/* ================== PAPERS INVITED SECTION ================== */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-xl font-bold text-blue-800 mb-8">
            Papers are invited on (but not limited to) the following topics:
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {/* Track 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Track 1: Digitalization</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Digital Transformation and Innovation</li>
                <li>Human-Computer Interaction and Digital User Experience</li>
                <li>Digital Ethics, Security, and Governance</li>
              </ul>
            </div>

            {/* Track 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-indigo-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">Track 2: Intelligence</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Data Science, Analytics, and Big Data</li>
                <li>Deep Learning in Computer Vision and Natural Language Processing</li>
              </ul>
            </div>

            {/* Track 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-purple-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">Track 3: Applications</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Internet of Things (IoT) and Smart Technologies</li>
                <li>Applications of Digitalization and Intelligence in Key Sectors</li>
                <li>Future Trends and Innovations in Defense Sector</li>
              </ul>
            </div>

            {/* Track 4 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-pink-600 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-pink-700 mb-4">
                Track 4: Emerging Consumer Technologies
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Health and Wellness Technologies for Consumers</li>
                <li>Smart and Connected Devices for Everyday Life</li>
                <li>AR, VR, and XR in Consumer Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Timeline */}
      <div className="flex items-center justify-center">
        <ImportantDatesTimeline />
      </div>

      {/* Paper Topics Horizontal Scroller */}
      <div className='w-[80%] flex flex-col items-center m-auto'>
        <h3 className="text-2xl justify-center w-[100%] font-bold text-gray-700 mb-6 text-center mt-6">Paper Topics</h3>
        <div className="relative overflow-hidden">
          {/* Three lines for scrolling */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-x space-x-4">
              {paperTopics.map((track, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 p-2 m-2 rounded-lg shadow-lg flex items-center justify-center text-gray-700"
                >
                  <BookOpen className="w-6 h-6 mx-2 text-blue-600" />
                  <p className="text-xs">{track}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-x-negative space-x-4">
              {paperTopics.map((track, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 p-2 m-2 rounded-lg shadow-lg flex items-center justify-center text-gray-700"
                >
                  <BookOpen className="w-6 h-6 mx-2 text-blue-600" />
                  <p className="text-xs">{track}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-x space-x-4">
              {paperTopics.map((track, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 p-2 m-2 rounded-lg shadow-lg flex items-center justify-center text-gray-700"
                >
                  <BookOpen className="w-6 h-6 mx-2 text-blue-600" />
                  <p className="text-xs">{track}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Paper Submission Link */}
      <div className="mt-8 text-center">
        <a
          href={conferenceInfo.paperSubmissionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform duration-300 shadow-md hover:scale-105"
        >
          <LinkIcon className="mr-2" /> Submit Your Paper
        </a>
      </div>

      <div className='mt-8 w-[50%] mx-auto text-center bg-gray-50 p-8 rounded-lg'>
        <p>
          "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support."
        </p>
      </div>
    </div>
  </Section>
);

export default CallForPapersSection;
