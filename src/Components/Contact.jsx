import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error animi
          pariatur laborum ducimus, autem veniam iusto excepturi cum numquam
        </p>
      </header>
      <aside className="aside">
        <div>
          <h3>Address</h3>
          <span>utem veniam iusto excepturi cum numquam</span>
        </div>
        <div>
          <h3>Email</h3>
          <span>xyz_mno@gmail.com</span>
        </div>
      </aside>
      <section className="section">
        <h3>Phone</h3>
        <span>15769+895</span>
        <div className="social-links">
          <FaGithubSquare />
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
        </div>
      </section>
    </div>
  );
}
