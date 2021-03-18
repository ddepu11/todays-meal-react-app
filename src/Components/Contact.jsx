import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact">
      <header>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi
          pariatur laborum
        </p>
      </header>

      <aside className="aside flex">
        <div>
          <h3>Address</h3>
          <span>8569, Delhi, India</span>
        </div>

        <div>
          <h3>Email</h3>
          <span>xyz_mno@gmail.com</span>
        </div>
      </aside>

      <section className="section">
        <h3>Phone</h3>
        <span>157694895</span>
        <div className="social-links flex">
          <FaGithubSquare />
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
        </div>
      </section>
    </div>
  );
}
