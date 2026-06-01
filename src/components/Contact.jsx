import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';

const info = [
  { icon: '📍', label: 'Address',             value: 'Sinsuat Avenue, Esteros, RH10, Cotabato City, 9600', link: 'https://maps.google.com/?q=kkapetid+cotabato+city' },
  { icon: '📞', label: 'Phone / Call to Order', value: '+63 995 981 2488', link: 'tel:+639959812488' },
  { icon: '🕐', label: 'Operating Hours',      value: 'Monday – Saturday · 12:00 PM – 10:00 PM',           link: null },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-16" style={{ background: '#fdf6f0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="section-label justify-center reveal">Find Us</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-cafe mb-4 reveal delay-100">
            Visit Us in <em className="text-brand-medium not-italic">Cotabato City</em>
          </h2>
          <p className="text-gray-500 font-serif reveal delay-200">
            We'd love to have you. Come by anytime — or call ahead to order!
          </p>
        </div>

        {/* Single centered column */}
        <div className="flex flex-col items-center gap-10 max-w-2xl mx-auto">

          {/* Info cards */}
          <div className="flex flex-col gap-4 w-full reveal">
            {info.map(({ icon, label, value, link }) => (
              <div key={label} className="flex items-start gap-4 bg-white border border-brand-light/60 rounded-2xl p-5 hover-lift shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-brand-medium mb-1">{label}</p>
                  {link ? (
                    
                    <a href={link}
                      target={link.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-cafe font-semibold hover:text-brand-medium transition-colors leading-snug"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-slate-cafe font-semibold leading-snug">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social — centered */}
          <div className="flex flex-col items-center gap-3 w-full reveal">
            <p className="text-xs font-bold tracking-widest uppercase text-gray-400">Follow Us</p>
            <div className="flex gap-4 justify-center">
              <a href="https://facebook.com/kkapetid" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#1558b0] text-white px-5 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-1 shadow-md">
                <FaFacebookF /> Facebook
              </a>
              <a href="https://instagram.com/kkapetid" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="flex items-center gap-3 text-white px-5 py-3 rounded-full font-bold text-sm transition-all hover:-translate-y-1 shadow-md"
                style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>

          {/* Call CTA — centered */}
          <div className="w-full reveal bg-slate-cafe rounded-2xl p-6 text-white text-center relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-brand-medium/20" />
            <p className="font-display font-bold text-xl mb-1 relative z-10">Ready to order?</p>
            <p className="text-white/60 text-sm mb-4 relative z-10">Give us a call — we'll take it from there.</p>
            <a href="tel:+639959812488" className="relative z-10 inline-flex items-center gap-2 bg-brand-medium hover:bg-brand-light hover:text-slate-cafe text-white font-bold py-3 px-6 rounded-full transition-all">
              📞 +63 995 981 2488
            </a>
          </div>

          {/* Map — full width, centered */}
          <div className="w-full reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.414296796232!2d124.23212827602158!3d7.193479192811805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563983af1bba8d%3A0xaac3a61596c3aa4!2skkapetid!5e0!3m2!1sen!2sph!4v1754649041236!5m2!1sen!2sph"
                width="100%"
                height="360"
                loading="lazy"
                allowFullScreen
                title="KKapetid Location"
                className="border-0 w-full block"
              />
            </div>
            <a href="https://maps.google.com/?q=kkapetid+cotabato+city" target="_blank" rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 text-brand-medium hover:text-brand-dark font-semibold text-sm transition-colors">
              Open in Google Maps →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}