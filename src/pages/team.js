import React from 'react';

import Layout from '../components/Layout';

import config from '../../config';
import Footer from '../views/Footer';
import Header from '../components/Header';

export default function Team() {
  return (
    <Layout>
      <Header />
      <section id="team" className="team-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <br></br>
              <h2 className="text-black mb-4 mt-10">Team</h2>

              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={config.teamImages.p1} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p2} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p3} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p4} className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={config.teamImages.p5} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p6} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p7} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p8} className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={config.teamImages.p9} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p10} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p11} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p12} className="img-fluid" alt="" />
                </div>
              </div>

              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={config.teamImages.p13} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p14} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p15} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p16} className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src={config.teamImages.p17} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p18} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p19} className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src={config.teamImages.p20} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
