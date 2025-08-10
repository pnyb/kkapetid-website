import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-brick">Visit Us</h2>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg font-serif">Sinsuat Avenue, Esteros, RH10 , Cotabato City, Philippines, 9600</p>
        <p className="text-lg font-serif">Mon-Sat: 10:00 AM – 9:00 PM</p>

        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.414296796232!2d124.23212827602158!3d7.193479192811805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563983af1bba8d%3A0xaac3a61596c3aa4!2skkapetid!5e0!3m2!1sen!2sph!4v1754649041236!5m2!1sen!2sph"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            title="Restaurant Location"
            className="border-0"
          ></iframe>
        </div>

         <div className="flex justify-center gap-6 text-brand-dark">
            <a
            href="https://facebook.com/kkapetid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-brand-light hover:bg-brand-medium transition text-2xl flex items-center justify-center shadow-md"
            aria-label="Facebook"
            >
            <FaFacebookF />
            </a>
            <a
            href="https://instagram.com/kkapetid"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-brand-light hover:bg-brand-medium transition text-2xl flex items-center justify-center shadow-md"
            aria-label="Instagram"
            >
            <FaInstagram />
            </a>
        </div>
      </div>
    </section>
  );
}
