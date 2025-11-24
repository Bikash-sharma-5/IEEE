import React from 'react';
import Section from '../common/Section';
import { registrationDetails } from '../../data/constants';

const RegistrationSection = () => (
  <Section id="registration" title="Registration Details">
    <div className="max-w-6xl mx-auto px-2 md:px-4">
      {/* Desktop Table View */}
      <div className="hidden md:block shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border text-sm text-center text-gray-800">
          {/* Header */}
          <thead>
            <tr className="bg-blue-900/90 text-white text-lg font-bold">
              <th colSpan={5} className="py-3">REGISTRATION DETAILS</th>
            </tr>
            <tr className="bg-blue-200 font-semibold">
              <th rowSpan={2} className="border px-4 py-2">Registration Category</th>
              <th colSpan={2} className="border px-4 py-2">
                Early Bird Registration <br /> Before 30th June 2026
              </th>
              <th colSpan={2} className="border px-4 py-2">
                Registration After 1st July 2026
              </th>
            </tr>
            <tr className="bg-blue-100 font-semibold">
              <th className="border px-2 py-2 text-xs lg:text-sm">IEEE Member</th>
              <th className="border px-2 py-2 text-xs lg:text-sm">Non IEEE Member</th>
              <th className="border px-2 py-2 text-xs lg:text-sm">IEEE Member</th>
              <th className="border px-2 py-2 text-xs lg:text-sm">Non IEEE Member</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {registrationDetails.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                <td className="border px-2 py-2 font-medium text-xs lg:text-sm text-left">{item.category}</td>
                <td className="border px-2 py-2 text-xs lg:text-sm">{item.earlyBird.ieee}</td>
                <td className="border px-2 py-2 text-xs lg:text-sm">{item.earlyBird.nonIeee}</td>
                <td className="border px-2 py-2 text-xs lg:text-sm">{item.afterJuly.ieee}</td>
                <td className="border px-2 py-2 text-xs lg:text-sm">{item.afterJuly.nonIeee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        <div className="bg-blue-900/90 text-white text-center py-3 rounded-t-lg font-bold">
          REGISTRATION DETAILS
        </div>
        {registrationDetails.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-blue-200 px-4 py-3 font-bold text-gray-800 border-b">
              {item.category}
            </div>
            
            {/* Early Bird Section */}
            <div className="border-b bg-blue-50">
              <div className="px-4 py-2 bg-blue-100 font-semibold text-sm">
                Early Bird Registration (Before 30th June 2026)
              </div>
              <div className="px-4 py-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">IEEE Member:</span>
                  <span className="font-semibold text-gray-800">{item.earlyBird.ieee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">Non IEEE Member:</span>
                  <span className="font-semibold text-gray-800">{item.earlyBird.nonIeee}</span>
                </div>
              </div>
            </div>

            {/* After July Section */}
            <div>
              <div className="px-4 py-2 bg-blue-100 font-semibold text-sm">
                Registration After 1st July 2026
              </div>
              <div className="px-4 py-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">IEEE Member:</span>
                  <span className="font-semibold text-gray-800">{item.afterJuly.ieee}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-600">Non IEEE Member:</span>
                  <span className="font-semibold text-gray-800">{item.afterJuly.nonIeee}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default RegistrationSection;
