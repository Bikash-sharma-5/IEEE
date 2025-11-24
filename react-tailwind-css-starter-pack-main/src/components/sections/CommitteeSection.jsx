import React from 'react';
import Section from '../common/Section';
import Card from '../common/Card';
import AnimatedCard from '../common/AnimatedCard';
import CommitteeList from './CommitteeList';
import { committee } from '../../data/constants';

const CommitteeSection = () => (
  <Section id="committee" className="bg-gray-50">
    <div className="max-w-7xl mx-auto text-center px-4">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">Meet the Committee</h2>
      <p className="text-sm md:text-lg text-gray-600 mb-8 md:mb-16 max-w-3xl mx-auto">
        Guiding the conference with expertise and dedication, our committee comprises leaders and innovators from academia and industry.
      </p>
      
      {/* Main Organizing Committee */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {/* Patron-In-Chief (full width) */}
        <AnimatedCard delay={0} className="col-span-1 md:col-span-2 lg:col-span-4">
          <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-indigo-800 mb-1">Chief Honorary Chair</h3>
            <p className="text-gray-800 text-sm md:text-lg">
              {committee.chiefHonoraryChair.name}, {committee.chiefHonoraryChair.title}
            </p>
          </Card>
        </AnimatedCard>

        {/* Patrons (2 cards, side by side) */}
        {committee.patrons.map((p, index) => (
          <AnimatedCard key={index} delay={150 + index * 100} className="col-span-1 md:col-span-2">
            <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-lg md:text-xl font-bold text-indigo-800 mb-1">Honorary Chair</h3>
              <p className="text-gray-800 text-sm md:text-lg">{p.name}, {p.title}</p>
            </Card>
          </AnimatedCard>
        ))}

        {/* Convenors (2 cards, side by side) */}
        {committee.convenors.map((c, index) => (
          <AnimatedCard key={index} delay={200 + index * 100} className="col-span-1 md:col-span-2">
            <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-lg md:text-xl font-bold text-indigo-800 mb-1">Convenor</h3>
              <p className="text-gray-800 text-sm md:text-lg">{c.name}, {c.title}</p>
            </Card>
          </AnimatedCard>
        ))}

        {/* Conference General Chair (full width) */}
        <AnimatedCard delay={250} className="col-span-1 md:col-span-2 lg:col-span-4">
          <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-lg md:text-xl font-bold text-indigo-800 mb-1">Conference General Chair</h3>
            <p className="text-gray-800 text-sm md:text-lg">
              {committee.conferenceGeneralChair.name}, {committee.conferenceGeneralChair.title}
            </p>
          </Card>
        </AnimatedCard>

        {/* Conference Chairs (each 2 columns wide) */}
        {committee.conferenceChairs.map((c, index) => (
          <AnimatedCard key={index} delay={300 + index * 100} className="col-span-1 md:col-span-2">
            <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow h-full">
              <h3 className="text-lg md:text-xl font-bold text-indigo-800 mb-1">Conference Chair</h3>
              <p className="text-gray-800 text-sm md:text-lg">
                {c.name}{c.title && `, ${c.title}`}
              </p>
            </Card>
          </AnimatedCard>
        ))}

        {/* Conference Co-Chair (1 column only) */}
        <AnimatedCard delay={350} className="col-span-1 md:col-span-1 lg:col-span-1">
          <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-base md:text-lg font-bold text-indigo-800 mb-1">Conference Co-Chair</h3>
            <p className="text-gray-800 text-sm md:text-base">
              {committee.conferenceCoChair.name}
              {committee.conferenceCoChair.title && `, ${committee.conferenceCoChair.title}`}
            </p>
          </Card>
        </AnimatedCard>

        {/* Organizing Committee (1 col each) */}
        {Object.entries(committee.organizingCommittee)
          .filter(([role]) => role !== 'financeChair')
          .map(([role, person], index) => (
            <AnimatedCard 
              key={role} 
              delay={400 + index * 100} 
              className="col-span-1"
            >
              <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow h-full">
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 capitalize">
                  {role.replace(/([A-Z])/g, " $1")}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{person}</p>
              </Card>
            </AnimatedCard>
          ))}
      </div>

      {/* Finance Chair - Centered separately */}
      <div className="flex justify-center mt-4 md:mt-8">
        <AnimatedCard 
          delay={700} 
          className="w-full max-w-sm"
        >
          <Card className="border p-4 md:p-5 hover:shadow-xl transition-shadow h-full">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 capitalize">
              Finance Chair
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{committee.organizingCommittee.financeChair}</p>
          </Card>
        </AnimatedCard>
      </div>

      {/* Other Committees */}
      <CommitteeList title="International Advisory Committee" members={committee.internationalAdvisory} />
      <CommitteeList title="National Advisory Committee" members={committee.nationalAdvisory} />
      <CommitteeList title="Technical Advisory Committee" members={committee.technicalProgramme} />
    </div>
  </Section>
);

export default CommitteeSection;
