import React from 'react';

import Layout from '../components/Layout';
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
              <h2 className="text-black mb-4">Team</h2>

              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src="../assets/images/presidents/p1.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/presidents/p2.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/presidents/p3.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/presidents/p4.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src="../assets/images/presidents/p5.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/presidents/p6.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/presidents/p6.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/directors/d1.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src="../assets/images/directors/d2.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/directors/d3.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/directors/d4.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/social-design/s1.jpg" className="img-fluid" alt="" />
                </div>
              </div>

              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src="../assets/images/social-design/s2.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/associates/a1.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/associates/a2.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/associates/a3.jpg" className="img-fluid" alt="" />
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="p-2">
                  <img src="../assets/images/associates/a4.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/associates/a5.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/associates/a6.jpg" className="img-fluid" alt="" />
                </div>
                <div class="p-2">
                  <img src="../assets/images/associates/a7.jpg" className="img-fluid" alt="" />
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
