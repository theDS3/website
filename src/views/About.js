import React from 'react';

import ipad from '../assets/images/ipad.png';

export default function About() {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
            <p className="text-white-50">
              Grayscale is a free Bootstrap theme created by Start Bootstrap. It
              can be yours right now, simply download the starter on
              <a href="https://github.com/anubhavsrivastava/gatsby-starter-grayscale">
                the github repo
              </a>
              .
            </p>
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>
  );
}
