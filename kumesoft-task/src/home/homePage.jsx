import React from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";
import CountUp from "react-countup";
import { useState } from "react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <img className="w-32" src="/src/logo.webp" />
          <button onClick={toggleMenu}>
            <RxCross1 size={24} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block py-2 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-500">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-blue-500">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="bg-[url(/src/download.jpeg)] bg-cover bg-no-repeat h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col">
        <nav className="flex justify-between items-center p-4 lg:px-12 lg:py-6">
          <img className="w-40 lg:w-48" src="/src/logo.webp" />

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              About Us
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              Our Team
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              Contacts
            </a>
          </div>

          <div className="flex flex-row justify-between gap-4 items-center">
            <CiSearch size={24} color="white" className="cursor-pointer" />
            <button onClick={toggleMenu} className="lg:hidden">
              <RxHamburgerMenu size={24} color="white" />
            </button>
          </div>
        </nav>

        <div className="text-center mt-10 flex flex-col items-center px-4 lg:mt-20">
          <h1 className="text-center font-extrabold text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Turning Creative Ideas into Success
          </h1>
          <p className="text-white text-center mt-2 p-4 max-w-2xl">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore
            magna aliqua quis nostrud exerc.
          </p>
          <button className="bg-blue-300 font-extrabold text-white w-48 py-2 px-4 rounded-full mt-4 hover:bg-blue-400 transition-all duration-300 ease-out">
            Discover Now
          </button>
        </div>
      </div>

      {/* About Section */}
      <section className="lg:flex lg:flex-row lg:justify-between lg:items-center mt-20 p-5 lg:px-12 lg:py-20">
        <div className="flex flex-row justify-center items-center lg:ml-12">
          <img
            className="w-52 relative z-0 lg:w-60 xl:w-72"
            src="/src/h3l.webp"
          />
          <img
            className="w-52 mt-60 relative z-10 -ml-[20%] lg:w-60 lg:mt-72 xl:w-72"
            src="/src/h3r.webp"
          />
        </div>
        <div className="mt-7 p-5 lg:mt-0 lg:max-w-xl xl:max-w-2xl">
          <h4 className="text-sm font-bold text-blue-500">CREATIVE AGENCY</h4>
          <h2 className="text-2xl font-bold lg:text-5xl xl:text-6xl mt-2">
            We help your business grow
          </h2>
          <p className="mt-4 text-gray-600">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia.
          </p>
          <div className="flex flex-row mt-6">
            <MdOutlineDesignServices size={40} className="text-blue-500" />
            <div className="flex flex-col ml-7">
              <span className="text-xl font-bold">Creative design</span>
              <p className="text-gray-600">
                Natus error sit voluptatem accus antium doloremque.
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <FaCloudDownloadAlt size={40} className="text-blue-500" />
            <div className="flex flex-col ml-6">
              <span className="text-xl font-bold">Endless possibilities</span>
              <p className="text-gray-600">
                Sit voluptatem accus antium doloremque laudan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-5 lg:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: "Projects", value: 93 },
            { label: "People", value: 65 },
            { label: "Years", value: 10 },
            { label: "Offices", value: 15 },
          ].map((stat, index) => (
            <div key={index} className="text-center relative">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-blue-100 relative">
                <CountUp start={0} end={stat.value} duration={2.75} />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg md:text-xl font-bold text-gray-800 whitespace-nowrap">
                  {stat.label}
                </span>
              </h1>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="mt-20 p-5 lg:p-12 xl:px-20">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start">
          <div className="lg:max-w-xl xl:max-w-2xl">
            <h4 className="text-sm font-bold text-blue-500">
              CREATIVE SOLUTIONS
            </h4>
            <h2 className="text-2xl font-bold lg:text-5xl xl:text-6xl mt-2">
              We make unique & memorable brands
            </h2>
          </div>
          <div className="lg:max-w-lg xl:max-w-xl mt-8 lg:mt-0">
            <p className="text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate velit iusto odio dignissimos duci esse.
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae.
            </p>
            <br />
            <span className="relative inline-block pb-1 group cursor-pointer">
              <span className="font-bold text-blue-500">Read more</span>
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500 w-full 
                transition-all duration-300 ease-out 
                group-hover:w-0"
              ></span>
            </span>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex mt-10 h-72 md:h-96">
        <div className="overflow-x-auto flex gap-5 p-5 w-full">
          <img
            className="w-80 rounded-2xl flex-shrink-0"
            src="/src/image-14.webp"
          />
          <img
            className="w-80 rounded-2xl flex-shrink-0"
            src="/src/image-15.webp"
          />
          <img
            className="w-80 rounded-2xl flex-shrink-0"
            src="/src/image-16.png"
          />
          <img
            className="w-80 rounded-2xl flex-shrink-0"
            src="/src/image-17.png"
          />
          <img
            className="w-80 rounded-2xl flex-shrink-0"
            src="/src/image-16.png"
          />
          <img
            className="w-80 rounded-2xl flex-shrink-0"
            src="/src/image-15.webp"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-20 p-5 lg:px-12 lg:py-20">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center">
          <h4 className="text-2xl font-bold lg:text-4xl xl:text-5xl lg:w-[40%]">
            Subscribe for the exclusive updates!
          </h4>
          <form className="lg:w-[50%]">
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-gray-200 p-3 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-blue-500 px-6 py-3 text-white rounded-3xl text-sm flex flex-row gap-2 items-center justify-center hover:bg-blue-600 transition-all duration-300 ease-out whitespace-nowrap">
                <FaRegPaperPlane /> Subscribe
              </button>
            </div>
            <div className="flex flex-row gap-3 mt-5 items-start">
              <input type="checkbox" className="mt-1" />
              <p className="text-gray-600 text-sm">
                I agree to the{" "}
                <span className="underline hover:text-blue-500 cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-20">
        <div className="overflow-x-auto flex gap-5 p-5 w-full">
          {[
            {
              img: "/src/man.jpg",
              name: "John Doe",
              role: "Expert",
              quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              img: "/src/woman.jpg",
              name: "Sandy Williams",
              role: "CEO, Business Co.",
              quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
              img: "/src/man2.jpg",
              name: "Paul Freeman",
              role: "Expert",
              quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center text-center w-84 p-6 bg-white rounded-xl shadow-md"
            >
              <img
                className="w-28 h-28 rounded-full object-cover"
                src={testimonial.img}
              />
              <p className="mt-6 text-gray-600 lg:text-lg">
                {testimonial.quote}
              </p>
              <span className="text-4xl text-gray-300 mt-4">"</span>
              <span className="font-bold mt-2">{testimonial.name}</span>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="lg:flex p-5 lg:px-12 lg:py-20 lg:flex-row-reverse lg:justify-between lg:items-center">
        <div className="flex flex-row items-center justify-center">
          <img
            className="rounded-2xl w-48 z-10 -mr-[30%] -mb-[38%] lg:w-72 xl:w-80"
            src="/src/h32l.webp"
          />
          <img
            className="rounded-2xl w-56 z-0 lg:w-80 xl:w-96"
            src="/src/h32r.webp"
          />
        </div>
        <div className="mt-20 lg:mt-0 lg:max-w-xl xl:max-w-2xl">
          <h4 className="text-3xl font-bold lg:text-5xl xl:text-6xl">
            We provide best digital services
          </h4>
          <p className="mt-4 text-gray-600">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit sed quia.
          </p>
          <button className="bg-blue-300 text-white px-8 py-3 mt-6 rounded-3xl hover:bg-blue-900 transition-all duration-300 ease-out">
            Discover Now
          </button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-20 p-5 lg:px-12 lg:py-20">
        <div className="grid grid-cols-2 gap-8 place-items-center md:grid-cols-3 lg:flex lg:flex-row lg:justify-center lg:gap-12">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              className="opacity-20 w-32 hover:opacity-90 transition-opacity duration-300"
              src={`/src/partner-${num}-copyright.webp`}
              alt={`Partner ${num}`}
            />
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-20 p-5 lg:px-12 lg:py-20">
        <div className="text-center">
          <p className="text-blue-500">OUR BLOG</p>
          <h4 className="text-3xl font-bold mt-2 lg:text-5xl xl:text-6xl">
            Latest articles
          </h4>
        </div>
        <div className="overflow-x-auto flex gap-5 p-5 w-full mt-10">
          {[
            {
              img: "/src/artman.jpg",
              category: "MEDIA SEO",
              title: "What's trending on designers' charts this spring",
              date: "Apr 21, 2020 | 0 Comments",
            },
            {
              img: "/src/artdesk.jpg",
              category: "MEDIA SEO",
              title: "Fresh startup ideas for your digital business",
              date: "Apr 21, 2020 | 0 Comments",
            },
            {
              img: "/src/artwoman.jpg",
              category: "MEDIA SEO",
              title: "Top 5 targeting techniques to attract customers",
              date: "Apr 21, 2020 | 0 Comments",
            },
            {
              img: "/src/artman2.jpg",
              category: "MEDIA SEO",
              title: "Why do project managers need to focus on strategy?",
              date: "Apr 21, 2020 | 0 Comments",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img className="w-full h-48 object-cover" src={post.img} />
              <div className="p-5">
                <p className="text-blue-500 text-sm">{post.category}</p>
                <p className="font-bold mt-2">{post.title}</p>
                <p className="text-gray-500 text-sm mt-2">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-950 p-5 lg:px-12 lg:py-20 mt-20">
        <div className="lg:flex lg:flex-row lg:justify-between">
          {/* Office Info */}
          <div className="lg:w-1/4">
            <p className="font-bold text-white">Office</p>
            <p className="font-light text-slate-400 mt-2">Germany -</p>
            <p className="font-light text-slate-400">
              785 15h Street, Office 478
            </p>
            <p className="font-light text-slate-400">Berlin, De 81566</p>
            <a href="mailto:info@email.com" className="block mt-4">
              <span className="relative inline-block pb-1 group">
                <span className="font-bold text-slate-400 hover:text-white transition-all duration-300 ease-out">
                  info@email.com
                </span>
                <span
                  className="absolute bottom-0 text-slate-400 left-0 h-0.5 bg-current w-full 
                  transition-all duration-300 ease-out 
                  group-hover:w-0 group-hover:bg-white"
                ></span>
              </span>
            </a>
            <p className="text-white mt-2 font-bold">+1 840 841 25 69</p>
          </div>

          {/* Links */}
          <div className="flex flex-row justify-between mt-8 lg:mt-0 lg:w-2/4 lg:justify-evenly">
            <div className="flex flex-col gap-2">
              <p className="text-white font-bold">Links</p>
              {["Home", "Services", "About Us", "Our Team", "Contacts"].map(
                (link) => (
                  <a href="#" key={link} className="block">
                    <span className="relative inline-block pb-1 group">
                      <span className="font-bold text-slate-400 hover:text-white transition-all duration-300 ease-out">
                        {link}
                      </span>
                      <span
                        className="absolute bottom-0 text-slate-400 left-0 h-0.5 bg-current w-full 
                      transition-all duration-300 ease-out 
                      group-hover:w-0 group-hover:bg-white"
                      ></span>
                    </span>
                  </a>
                )
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-white font-bold">Socials</p>
              {["Facebook", "Twitter", "Dribbble", "Instagram"].map(
                (social) => (
                  <a href="#" key={social} className="block">
                    <span className="relative inline-block pb-1 group">
                      <span className="font-bold text-slate-400 hover:text-white transition-all duration-300 ease-out">
                        {social}
                      </span>
                      <span
                        className="absolute bottom-0 text-slate-400 left-0 h-0.5 bg-current w-full 
                      transition-all duration-300 ease-out 
                      group-hover:w-0 group-hover:bg-white"
                      ></span>
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-8 lg:mt-0 lg:w-1/4">
            <p className="text-white font-bold">Newsletter</p>
            <form className="mt-4">
              <div className="flex flex-row gap-3">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-slate-700 text-white px-4 py-3 rounded-3xl w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-blue-500 text-white rounded-full p-3 hover:bg-blue-900 transition-all duration-300 ease-out flex-shrink-0">
                  <FaArrowRight />
                </button>
              </div>
              <div className="flex flex-row gap-3 mt-4 items-start">
                <input type="checkbox" className="mt-1" />
                <p className="text-slate-400 text-sm">
                  I agree to the{" "}
                  <span className="underline hover:text-white transition-all duration-300 ease-out cursor-pointer">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </form>
            <div className="mt-8 text-slate-400 text-sm">
              <p>AxiomThemes © 2025. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
