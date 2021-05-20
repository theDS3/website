import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../views/Footer';
import Header from '../components/Header';

import AboutPage from '../views/About';
import ProjectPage from '../views/Projects';

import UE from '../assets/images/UE.jpg';
import PE from '../assets/images/PE.jpg';

import ContactPage from '../views/Contact/ContactPage';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <AboutPage />

    <ProjectPage />

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
          <iframe src="https://calendar.google.com/calendar/embed?src=n8d6uleu3460ufpvl0ffad1mi0%40group.calendar.google.com&ctz=America%2FToronto" style={{border: 'hidden'}} width="700" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Event Calendar</h4>
              <p className="text-black-50 mb-0">
                The calendar on the left shows our upcoming events for DS3!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={PE} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Events</h4>
                  <p className="mb-0 text-white-50">
                    <ul>
                      <li>
                        Event 1
                      </li>
                      <li>
                        Event 2
                      </li>
                      <li>
                        Event 3
                      </li>
                    </ul>
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={UE} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Events</h4>
                  <p className="mb-0 text-white-50">
                  <div class="float-right">
                  <ul>
                      <li>
                        Event 1
                      </li>
                      <li>
                        Event 2
                      </li>
                      <li>
                        Event 3
                      </li>
                    </ul>
                    <hr className="d-none d-lg-block mb-0 mr-0 upcoming-underline" />
                  </div>
                  
                  
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactPage />

    <Footer />
  </Layout>
);

export default IndexPage;
