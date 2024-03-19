import React from "react";
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-200">
        <div className=" px-4 py-6 lg:py-8 md:grid-cols-12">
          {/* Social media */}
          <nav className="flex items-center justify-center gap-8 md:col-span-4">
            <a
              href="#"
              className="block text-primary p-4 bg-white rounded-full transition duration-300 hover:bg-primary-dark"
            >
              <RiInstagramLine />
            </a>
            <a
              href="#"
              className="block text-primary p-4 bg-white rounded-full transition duration-300 hover:bg-primary-dark"
            >
              <RiFacebookLine />
            </a>
            <a
              href="#"
              className="block text-primary p-4 bg-white rounded-full transition duration-300 hover:bg-primary-dark"
            >
              <RiTwitterLine />
            </a>
            <a
              href="#"
              className="block text-primary p-4 bg-white rounded-full transition duration-300 hover:bg-primary-dark"
            >
              <RiGithubLine />
            </a>
          </nav>
        </div>
      
      <div className="border-t border-slate-700">
        <div className="md:text-center text-center container mx-auto py-7 px-6">
          <p className="mb-0">
            &copy; guión realidad dicha infinita | ningún derecho reservado ©
            200,000 a.c. - {currentYear} d.c.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
