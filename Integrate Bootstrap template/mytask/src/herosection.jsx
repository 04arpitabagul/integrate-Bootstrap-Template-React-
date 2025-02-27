import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
    return (
      <section className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold">Hi, Hi, I'm John Deo.</h1>
            <p className="text-muted">
              A freelance Web developer from London. I convert custom web designs to Bootstrap templates.
            </p>
            <p className="text-muted">I make YouTube videos and write Blog.</p>
            <button className="btn btn-primary">I'M AVAILABLE</button>
            <div className="mt-3">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaGithub />
            </div>

          </div>
          <div className="col-md-6 text-center">
            <img 
              src="https://www.goldenradiology.ca/wp-content/uploads/2023/02/team-img03.jpg" 
              alt="John Deo" 
              className="img-fluid rounded-circle"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </section>
    );
  };

export default HeroSection;