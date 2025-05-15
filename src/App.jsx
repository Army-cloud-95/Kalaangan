// import { useState } from 'react'
// import './App.css'
//  const App = () =>{
//   return(
//     <h1 className="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   )
//  }


// export default App;
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import myImage from './assets/madhubani.jpg';
import myImageOne from './assets/warli.jpg';
import myImageTwo from './assets/pattichitra.jpg';
import myImageThree from './assets/folk.jpg';
import tale from './assets/taleee.jpg';
import wedding from './assets/wedding.jpg';
import harvest from './assets/harvest.jpg';
import forest from './assets/forest.jpg';
import village from './assets/village.jpg';
import spring from './assets/spring.jpg';
import rural from './assets/rural.jpg';
import ritual from './assets/ritual.jpg';
import peacock from './assets/peacock.jpg';
import amit from './assets/amit.jpg';
import meera from './assets/meera.jpg';
import priya from './assets/priya.jpg';


// Define color palette based on traditional Indian folk art colors
const colors = {
  primary: "#E25D45", // Warm terracotta red
  secondary: "#F9C449", // Turmeric yellow
  dark: "#5D4037", // Deep brown
  light: "#FFF3E0", // Off-white
  accent: "#2C5F2D", // Forest green
};

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-amber-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-bold text-2xl text-orange-700">
                Kalaangan
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-lg ${
                isActive('/') 
                  ? 'font-medium text-orange-700 border-b-2 border-orange-700' 
                  : 'text-orange-600 hover:text-orange-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className={`px-3 py-2 rounded-md text-lg ${
                isActive('/gallery') 
                  ? 'font-medium text-orange-700 border-b-2 border-orange-700' 
                  : 'text-orange-600 hover:text-orange-800'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-lg ${
                isActive('/about') 
                  ? 'font-medium text-orange-700 border-b-2 border-orange-700' 
                  : 'text-orange-600 hover:text-orange-800'
              }`}
            >
              About
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-600 hover:text-orange-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amber-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-orange-700 bg-orange-100' 
                  : 'text-orange-600 hover:bg-orange-100 hover:text-orange-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/gallery') 
                  ? 'text-orange-700 bg-orange-100' 
                  : 'text-orange-600 hover:bg-orange-100 hover:text-orange-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-orange-700 bg-orange-100' 
                  : 'text-orange-600 hover:bg-orange-100 hover:text-orange-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-amber-800 text-amber-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Kalaangan</h3>
            <p className="text-amber-200">Celebrating India's Traditional Art Forms</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-amber-200 hover:text-white">
              <span className="sr-only">Facebook</span>
              {/* Simple Facebook icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-amber-200 hover:text-white">
              <span className="sr-only">Instagram</span>
              {/* Simple Instagram icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-amber-200 hover:text-white">
              <span className="sr-only">Twitter</span>
              {/* Simple Twitter icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-amber-200">
          <p>&copy; {new Date().getFullYear()} Kalaangan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Art Card Component for Gallery
const ArtCard = ({ title, artist, region, imageUrl }) => {
  return (
    <div className="bg-amber-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-800">{title}</h3>
        <p className="text-amber-900">Artist: {artist}</p>
        <p className="text-amber-700">Region: {region}</p>
      </div>
    </div>
  );
};

// Home Page
const Home = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-700 to-amber-600">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-amber-50 sm:text-5xl md:text-6xl">
                  <span className="block">Discover the beauty of</span>
                  <span className="block text-yellow-300">Indian Folk Art</span>
                </h1>
                <p className="mt-3 text-base text-amber-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Kalaangan is a celebration of India's rich artistic heritage, showcasing traditional art forms that have been passed down through generations.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/gallery" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-900 bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10">
                      Explore Gallery
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-100 bg-orange-800 hover:bg-orange-900 md:py-4 md:text-lg md:px-10">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={myImageThree} alt="Indian Folk Art Collage" />
        </div>
      </div>

      {/* Featured Art Forms Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-orange-800 text-center mb-12">Featured Art Forms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Art Form 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={myImage} alt="Madhubani Art" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Madhubani</h3>
              <p className="text-gray-700">
                Originally from Bihar, Madhubani art is known for its geometric patterns and representations of deities, nature, and royal courts.
              </p>
            </div>
          </div>

          {/* Art Form 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={myImageOne} alt="Warli Art" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Warli</h3>
              <p className="text-gray-700">
                Originating from Maharashtra, Warli paintings use simple shapes like circles, triangles and squares to depict daily life scenes.
              </p>
            </div>
          </div>

          {/* Art Form 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={myImageTwo} alt="Gond Art" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Gond</h3>
              <p className="text-gray-700">
                From central India, Gond artwork features intricate patterns filled with vibrant colors depicting natural elements and daily life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-amber-50 sm:text-4xl">
              Discover the Cultural Richness
            </h2>
            <p className="mt-4 text-xl text-amber-100">
              Explore our extensive collection of authentic Indian folk art.
            </p>
            <div className="mt-8">
              <Link to="/gallery" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-orange-800 bg-yellow-300 hover:bg-yellow-400">
                Visit Gallery
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery Page
const Gallery = () => {
  // Mock data for art pieces
  const artPieces = [
    { id: 1, title: "Celebration of Spring", artist: "Rajesh Kumar", region: "Bihar", imageUrl: spring },
    { id: 2, title: "Village Life", artist: "Sunita Devi", region: "Maharashtra", imageUrl: village },
    { id: 3, title: "Wedding Ceremony", artist: "Prakash Jha", region: "Bihar", imageUrl: wedding },
    { id: 4, title: "Harvest Festival", artist: "Meena Kumari", region: "Rajasthan", imageUrl: harvest },
    { id: 5, title: "Forest Deities", artist: "Arjun Tribal", region: "Madhya Pradesh", imageUrl: forest },
    { id: 6, title: "Dancing Peacock", artist: "Lakshmi N", region: "Karnataka", imageUrl: peacock },
    { id: 7, title: "Mythological Tale", artist: "Ramesh Sharma", region: "Uttar Pradesh", imageUrl: tale },
    { id: 8, title: "Rural Landscape", artist: "Kavita Singh", region: "Gujarat", imageUrl: rural },
    { id: 9, title: "Sacred Rituals", artist: "Dinesh Patel", region: "West Bengal", imageUrl: ritual },
  ];

  // State for active filter (can be expanded)
  const [activeFilter, setActiveFilter] = useState("All");
  
  const regions = ["All", "Bihar", "Maharashtra", "Rajasthan", "Madhya Pradesh", "Karnataka", "Uttar Pradesh", "Gujarat", "West Bengal"];
  
  const filteredArt = activeFilter === "All" 
    ? artPieces 
    : artPieces.filter(art => art.region === activeFilter);

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-orange-800 mb-8 text-center">Art Gallery</h1>
        
        {/* Filters */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-orange-700 mb-4">Filter by Region:</h2>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveFilter(region)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === region
                    ? 'bg-orange-700 text-white'
                    : 'bg-amber-100 text-orange-800 hover:bg-amber-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArt.map((art) => (
            <ArtCard
              key={art.id}
              title={art.title}
              artist={art.artist}
              region={art.region}
              imageUrl={art.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page
const About = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={myImage} alt="Traditional artist working" />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-orange-800 mb-4">About Kalaangan</h1>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Kalaangan is dedicated to preserving and promoting India's rich cultural heritage through its diverse folk art forms. Our mission is to create awareness, appreciation, and support for traditional artists and their communities.
                </p>
                <h2 className="text-xl font-semibold text-orange-700 mt-6 mb-2">Our Mission</h2>
                <p className="mb-4">
                  To document, preserve, and showcase the rich diversity of Indian folk art traditions, ensuring these cultural treasures continue to thrive in the modern world. We aim to provide traditional artists with a platform to share their work globally while educating audiences about the deep cultural significance behind each art form.
                </p>
                <h2 className="text-xl font-semibold text-orange-700 mt-6 mb-2">Our Vision</h2>
                <p className="mb-4">
                  We envision a world where India's traditional art forms are celebrated globally, where artisans receive fair compensation for their work, and where these ancient traditions continue to evolve and thrive for generations to come.
                </p>
                <h2 className="text-xl font-semibold text-orange-700 mt-6 mb-2">Our Work</h2>
                <ul className="list-disc pl-5 mb-4">
                  <li className="mb-2">Documentation and digitization of traditional art forms</li>
                  <li className="mb-2">Organizing exhibitions and workshops</li>
                  <li className="mb-2">Direct support to artisan communities</li>
                  <li className="mb-2">Educational programs for schools and universities</li>
                  <li className="mb-2">Connecting artisans with global markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-orange-800 mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <img src={priya} alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800">Priya Sharma</h3>
                <p className="text-amber-800">Founder & Curator</p>
                <p className="mt-2 text-gray-600">Art historian specializing in traditional Indian art forms with over 15 years of experience.</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <img src={amit} alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800">Amit Patel</h3>
                <p className="text-amber-800">Community Director</p>
                <p className="mt-2 text-gray-600">Works directly with artisan communities to preserve traditional techniques and create sustainable livelihoods.</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <img src={meera} alt="Team Member" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-800">Meera Reddy</h3>
                <p className="text-amber-800">Education Coordinator</p>
                <p className="mt-2 text-gray-600">Develops educational programs to promote awareness about traditional art forms among students.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-orange-700 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-orange-700 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-orange-700 mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-700 text-white py-2 px-4 rounded-md hover:bg-orange-800 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main App
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );  
}