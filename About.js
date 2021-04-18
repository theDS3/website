import React from 'react';

import ipad from '../assets/images/ipad.png';

export default function About() {
  return (
    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">About</h2>
            <p className="text-white-50">
            The mission of the Data Science and Statistics Society (DS3) is to create a platform 
          for peer-mentorship, career exploration and professional skills development among
           UTSC students from all disciplines interested in Data Science and Statistics.
            </p>
            
          </div>
        </div>
        <img src={ipad} className="img-fluid" alt="" />
      </div>
    </section>
  );
}
