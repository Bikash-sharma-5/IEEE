import React from 'react';
import { MapPin, Users, Mail } from 'lucide-react';
import Section from '../common/Section';
import { conferenceInfo, contact } from '../../data/constants';

const ContactSection = () => (
  <Section id="contact" title="Venue & Contact" className="bg-gray-50">
    <div className="grid md:grid-cols-2 gap-10 w-[90%] mx-auto items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Get In Touch</h3>
        <div className="space-y-4 text-gray-700 text-lg">
          <div className="flex items-start">
            <MapPin className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <span>{conferenceInfo.venue}</span>
          </div>
          <div className="flex items-start">
            <Users className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div className='flex flex-col flex-wrap-reverse'>
              <span>{contact.name}, {contact.phone}</span>
              <span>{contact.name1}, {contact.phone1}</span>
            </div>
          </div>
          <div className="flex items-start">
            <Mail className="w-7 h-7 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              {contact.emails.map(email => (
                <a key={email} href={`mailto:${email}`} className="block hover:text-blue-700">{email}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden shadow-xl h-[350px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3375975017303!2d73.8728977145294!3d18.606926387366906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1721390012345!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location of the venue"
        ></iframe>
      </div>
    </div>
  </Section>
);

export default ContactSection;
