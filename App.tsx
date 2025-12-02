import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, MapPin, ArrowRight, Plane, 
  Stethoscope, Globe2, HeartPulse, CheckCircle2, Building2,
  Activity, Baby, Brain, Bone, ShieldCheck, Quote, Star
} from 'lucide-react';
import Logo from './components/Logo';
import ChatBot from './components/ChatBot';

// --- Components ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? "text-primary-600 font-bold" : "text-gray-600 hover:text-primary-600";

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-40 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p className="flex items-center gap-2 font-medium">
            <Phone size={12} className="text-accent-400" /> 0799638346
            <span className="mx-2 text-primary-600 hidden sm:inline">|</span>
            <Mail size={12} className="text-accent-400" /> stanmaxx@gmail.com
          </p>
          <p className="hidden sm:block text-primary-100">Premier Medical Tourism Agency in Nairobi, Kenya</p>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={`text-sm uppercase tracking-wide transition-colors ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`text-sm uppercase tracking-wide transition-colors ${isActive('/about')}`}>About Us</Link>
            <Link to="/services" className={`text-sm uppercase tracking-wide transition-colors ${isActive('/services')}`}>Treatments & Services</Link>
            <Link to="/contact" className={`text-sm uppercase tracking-wide transition-colors ${isActive('/contact')}`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">About Us</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Treatments & Services</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="col-span-1 md:col-span-1">
          <Logo className="text-white mb-6" />
          <p className="text-gray-400 text-sm leading-relaxed">
            Stanmaxx is Kenya's trusted partner for specialized medical treatment abroad. We connect patients to world-class hospitals in India, Turkey, and beyond for affordable surgeries and care.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent-400">Specialized Treatments</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Oncology (Cancer Care)</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Kidney & Liver Transplant</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> IVF & Fertility</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Cosmetic Surgery</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Neurosurgery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-accent-400">Patient Services</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Medical Visa Assistance</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Airport Transfers</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Accommodation Booking</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-primary-500"/> Diaspora Inbound Care</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-accent-400">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-500 shrink-0 mt-0.5" />
              <span>Nairobi, Kenya<br/>Leading Medical Travel Agency</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary-500 shrink-0" />
              <a href="tel:0799638346" className="hover:text-white">0799638346</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary-500 shrink-0" />
              <a href="mailto:stanmaxx@gmail.com" className="hover:text-white">stanmaxx@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Stanmaxx Medical Travelling Agency.</p>
        <p className="mt-2 md:mt-0">Seamless Medical Journeys to India, Turkey, UAE, Egypt & SA.</p>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[650px] sm:h-[750px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop" 
            alt="Medical Treatment Abroad" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/80 to-transparent mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:text-left w-full mt-10">
          <div className="inline-block bg-accent-500 text-primary-900 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            #1 Medical Travelling Agency in Nairobi
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Affordable Specialized <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">Treatment Abroad</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            We are your trusted bridge to world-class hospitals in India, Turkey, UAE, Egypt, and South Africa. 
            Comprehensive support for Oncology, Transplants, and specialized surgery for Kenyan patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-bold hover:bg-accent-400 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Free Treatment Quote <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="backdrop-blur-sm bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-900 transition-all text-center">
              Explore Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Intro Stats */}
      <section className="py-12 bg-white -mt-10 relative z-20 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="p-2">
              <p className="text-4xl font-bold text-primary-600">500+</p>
              <p className="text-gray-600 font-medium text-sm mt-1">Patients Assisted</p>
            </div>
            <div className="p-2">
              <p className="text-4xl font-bold text-primary-600">5+</p>
              <p className="text-gray-600 font-medium text-sm mt-1">Global Destinations</p>
            </div>
            <div className="p-2">
              <p className="text-4xl font-bold text-primary-600">98%</p>
              <p className="text-gray-600 font-medium text-sm mt-1">Visa Success Rate</p>
            </div>
            <div className="p-2">
              <p className="text-4xl font-bold text-primary-600">24/7</p>
              <p className="text-gray-600 font-medium text-sm mt-1">Medical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - SEO Rich */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Stanmaxx Medical Agency?</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              We specialize in connecting Kenyan patients with affordable, high-quality medical care abroad. From initial consultation to post-treatment recovery, we handle every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-primary-500 group">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Hospital Network</h3>
              <p className="text-gray-600 mb-4">
                Access accredited hospitals in <strong>India, Turkey, UAE, Egypt, and South Africa</strong>. We partner only with JCI-accredited facilities ensuring world-class standards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-accent-500 group">
              <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Stress-Free Logistics</h3>
              <p className="text-gray-600 mb-4">
                We handle your <strong>Medical Visa processing</strong>, flight bookings, airport transfers, and affordable accommodation near the hospital.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-primary-500 group">
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Inbound Diaspora Care</h3>
              <p className="text-gray-600 mb-4">
                Are you in the diaspora? We facilitate specialized treatment and checkups for you and your loved ones in <strong>top Kenyan hospitals</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div className="max-w-2xl">
               <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Specialized Treatments We Facilitate</h2>
             </div>
             <Link to="/services" className="hidden md:flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
               View All Treatments <ArrowRight size={20} />
             </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { title: "Oncology (Cancer)", icon: Activity, desc: "Advanced chemotherapy, radiation, and surgical oncology in India & Turkey." },
               { title: "Organ Transplants", icon: HeartPulse, desc: "Affordable Kidney and Liver transplants with high success rates." },
               { title: "Orthopedics", icon: Bone, desc: "Joint replacement, spine surgery, and sports medicine specialists." },
               { title: "IVF & Fertility", icon: Baby, desc: "High success rate fertility treatments in specialized clinics." },
             ].map((item, idx) => (
               <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all group">
                 <item.icon className="w-10 h-10 text-primary-500 mb-4 group-hover:scale-110 transition-transform" />
                 <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                 <p className="text-sm text-gray-600">{item.desc}</p>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors">
               View All Treatments <ArrowRight size={20} />
             </Link>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">Hear from patients whose lives have been changed through Stanmaxx.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12" />
              <div className="flex text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Stanmaxx arranged my kidney transplant in India within weeks. The hospital was world-class, and the cost was exactly as quoted. The visa assistance made everything stress-free."
              </p>
              <div>
                <p className="font-bold text-gray-900">James O.</p>
                <p className="text-sm text-primary-600">Kidney Transplant, India</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12" />
              <div className="flex text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I travelled to Turkey for cosmetic surgery. The team met me at the airport, and the hotel was lovely. I am so happy with the results and the professionalism of the agency."
              </p>
              <div>
                <p className="font-bold text-gray-900">Sarah K.</p>
                <p className="text-sm text-primary-600">Cosmetic Surgery, Turkey</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12" />
              <div className="flex text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Living in the UK, I needed a trusted agency to handle my mother's checkups in Nairobi. Stanmaxx organized the best specialists and transport. Highly recommended!"
              </p>
              <div>
                <p className="font-bold text-gray-900">David M.</p>
                <p className="text-sm text-primary-600">Diaspora Care, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-800 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Start Your Recovery Journey Today</h2>
           <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
             Don't let medical costs or lack of specialists hold you back. Contact Stanmaxx for a personalized treatment plan and cost estimate.
           </p>
           <div className="flex justify-center gap-4 flex-col sm:flex-row">
             <Link to="/contact" className="bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-bold hover:bg-accent-400 transition-colors shadow-lg">
               Book Free Consultation
             </Link>
             <a href="tel:0799638346" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-800 transition-colors flex items-center justify-center gap-2">
               <Phone size={18} /> Call 0799638346
             </a>
           </div>
         </div>
      </section>
    </>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Stanmaxx Medical Agency</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We are Nairobi's premier medical tourism facilitator, bridging the gap between Kenyan patients and global healthcare excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-600 rounded-2xl transform rotate-3 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop" 
              alt="Medical Team Assistance" 
              className="relative rounded-2xl shadow-2xl z-10"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary-800">Your Health, Our Priority</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Located in Nairobi, Kenya, <strong>Stanmaxx Medical Travelling Agency</strong> was founded with a singular mission: to assist patients in accessing specialized medical treatments that may be unavailable or too costly locally.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that travelling for surgery is a major decision. That's why we don't just act as a travel agent; we are your medical concierge. From selecting the right specialist in <strong>India, Turkey, UAE, Egypt, or South Africa</strong> to ensuring you have a comfortable place to stay during recovery, we manage it all.
            </p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-500 flex-shrink-0" />
                <span className="font-medium text-gray-800">Personalized Hospital Selection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-500 flex-shrink-0" />
                <span className="font-medium text-gray-800">Transparent Cost Estimates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-accent-500 flex-shrink-0" />
                <span className="font-medium text-gray-800">Post-Treatment Follow-up Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  // Structured data for Services instead of just destinations
  const treatments = [
    {
      title: "Oncology & Cancer Care",
      desc: "Access advanced cancer treatments including PET Scans, CyberKnife, and Immunotherapy.",
      countries: ["India", "Turkey", "Egypt"],
      icon: Activity
    },
    {
      title: "Cardiac Surgery",
      desc: "World-class heart bypass, valve replacement, and pediatric cardiac surgery.",
      countries: ["India", "South Africa"],
      icon: HeartPulse
    },
    {
      title: "Organ Transplants",
      desc: "Legal and ethical kidney and liver transplant programs with high success rates.",
      countries: ["India", "Turkey"],
      icon: ShieldCheck
    },
    {
      title: "Cosmetic & Plastic Surgery",
      desc: "Hair transplants, rhinoplasty, and body contouring by celebrity surgeons.",
      countries: ["Turkey", "UAE"],
      icon: Stethoscope
    },
    {
      title: "Orthopedics & Spine",
      desc: "Minimally invasive spine surgery and robotic joint replacements.",
      countries: ["India", "Germany", "Egypt"],
      icon: Bone
    },
    {
      title: "IVF & Infertility",
      desc: "Helping couples achieve their dream of parenthood with advanced reproductive tech.",
      countries: ["India", "Turkey", "UAE"],
      icon: Baby
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medical Treatments & Services</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We connect you with the best specialists globally for your specific medical needs.
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {treatments.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <t.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.title}</h3>
              <p className="text-gray-600 mb-6">{t.desc}</p>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Top Destinations:</p>
                <div className="flex flex-wrap gap-2">
                  {t.countries.map((c, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inbound Service Highlight */}
        <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-3xl overflow-hidden shadow-2xl mb-20">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10 md:p-14 text-white">
              <div className="flex items-center gap-2 mb-4 text-accent-400 font-bold tracking-wide uppercase text-sm">
                <Building2 size={16} /> Inbound Medical Tourism
              </div>
              <h2 className="text-3xl font-bold mb-6">Medical Care for Diaspora in Kenya</h2>
              <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                Visiting home? Stanmaxx assists Kenyan diaspora and expatriates in arranging executive checkups, dental procedures, and specialized care at Nairobi's top-tier private hospitals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3"><CheckCircle2 className="text-accent-500"/> VIP Hospital Admissions</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent-500"/> Dental & Optical Packages</li>
                <li className="flex gap-3"><CheckCircle2 className="text-accent-500"/> Second Opinion Services</li>
              </ul>
              <Link to="/contact" className="inline-block bg-white text-primary-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Arrange Your Visit
              </Link>
            </div>
            <div className="h-full min-h-[300px] md:min-h-full">
              <img src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2072&auto=format&fit=crop" alt="Nairobi Hospital" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Global Network Section (Replaced Destination List) */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-10">Our Global Medical Network</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Creating text badges instead of logos for simplicity */}
             {["India", "Turkey", "UAE (Dubai)", "Egypt", "South Africa", "Kenya"].map((c, idx) => (
               <div key={idx} className="px-8 py-4 bg-gray-50 rounded-lg border border-gray-200 font-bold text-xl text-gray-600">
                 {c}
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Stanmaxx</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Get a free quote for your medical treatment abroad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Info */}
          <div className="bg-primary-800 text-white p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-primary-100 mb-8">
                Reach out to our medical coordinators. We reply within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-primary-700 p-4 rounded-xl"><Phone className="text-accent-400 w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Call / WhatsApp</h3>
                    <p className="text-primary-100 text-lg">0799638346</p>
                    <p className="text-primary-300 text-xs mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-primary-700 p-4 rounded-xl"><Mail className="text-accent-400 w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Email Us</h3>
                    <p className="text-primary-100 text-lg">stanmaxx@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-primary-700 p-4 rounded-xl"><MapPin className="text-accent-400 w-6 h-6" /></div>
                  <div>
                    <h3 className="font-bold text-lg">Visit Us</h3>
                    <p className="text-primary-100">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-500 opacity-10 rounded-full -mr-10 -mb-10"></div>
          </div>

          {/* Form */}
          <div className="p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="+254..." />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Treatment Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                   <option>Select Treatment Type</option>
                   <option>Oncology (Cancer)</option>
                   <option>Organ Transplant</option>
                   <option>Cardiac Surgery</option>
                   <option>IVF / Fertility</option>
                   <option>Cosmetic Surgery</option>
                   <option>General Checkup</option>
                   <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all">
                   <option>Any / Recommend for me</option>
                   <option>India</option>
                   <option>Turkey</option>
                   <option>UAE (Dubai)</option>
                   <option>Egypt</option>
                   <option>South Africa</option>
                   <option>Kenya (Inbound)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Please describe your medical condition briefly..."></textarea>
              </div>

              <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 transition-colors shadow-md text-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-gray-800">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </HashRouter>
  );
}