import React from "react";
import { footerSection } from "../constants/index";

const Footer = () => (
  <footer className="py-6 text-white bg-gray-800">
    <div className="container mx-auto text-center">
      {footerSection.map((section, index) => (
        <div key={index} className="mb-4">
          {section.title && (
            <h3 className="text-xl font-bold">{section.title}</h3>
          )}

          {section.links && (
            <ul className="flex justify-center">
              {section.links.map((link, index) => (
                <li key={link.text} className="mx-2">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          )}

          {section.socialMedia && (
            <div className="flex justify-center">
              {section.socialMedia.map((social, socialIndex) => (
                <a key={socialIndex} href={social.url} className="mx-2">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          )}
          {section.copyright && <p>{section.copyright}</p>}
        </div>
      ))}
    </div>
  </footer>
);

export default Footer;
