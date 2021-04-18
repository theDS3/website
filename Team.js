import React from 'react';

import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.jpg'
import p3 from '../assets/images/p3.jpg'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'
import p7 from '../assets/images/p7.jpg'
import p8 from '../assets/images/d1.jpg'
import p9 from '../assets/images/d2.jpg'
import p10 from '../assets/images/d3.jpg'
import p11 from '../assets/images/d4.jpg' 
import p12 from '../assets/images/s1.jpg' 
import p13 from '../assets/images/s2.jpg' 
import p14 from '../assets/images/a1.jpg' 
import p15 from '../assets/images/a2.jpg' 
import p16 from '../assets/images/a3.jpg' 
import p17 from '../assets/images/a4.jpg' 
import p18 from '../assets/images/a5.jpg' 
import p19 from '../assets/images/a6.jpg' 
import p20 from '../assets/images/a7.jpg' 


export default function Team() {
    return (
        <section id="team" className="team-section text-center">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <br></br>
                    <h2 className="text-black mb-4">Team</h2>
             
                    <div class="d-flex flex-row">
                        <div class="p-2"><img src={p1} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p2} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p3} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p4} className="img-fluid" alt="" /></div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2"><img src={p5} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p6} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p7} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p8} className="img-fluid" alt="" /></div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2"><img src={p9} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p10} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p11} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p12} className="img-fluid" alt="" /></div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2"><img src={p13} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p14} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p15} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p16} className="img-fluid" alt="" /></div>
                    </div>
                    <div class="d-flex flex-row">
                        <div class="p-2"><img src={p17} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p18} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p19} className="img-fluid" alt="" /></div>
                        <div class="p-2"><img src={p20} className="img-fluid" alt="" /></div>
                    </div>
                </div>
            </div>
            <br></br>
            </div>
        </section>
    );
  }
  