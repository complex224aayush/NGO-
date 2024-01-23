import React from 'react'
import "./Home.css";


import r13 from "../../Images/r13.jpg";
import r14 from "../../Images/r14.jpg";
import r15 from "../../Images/r15.jpg";
import r16 from "../../Images/r16.jpg";
import r17 from "../../Images/r17.jpg";
import r18 from "../../Images/r18.jpg";

import b10 from "../../Images/b10.jpg";
import b12 from "../../Images/b12.jpg";
import b18 from "../../Images/b18.jpg";
import b19 from "../../Images/b19.jpg";
import b66 from "../../Images/b66.jpg";
import b20 from "../../Images/b20.jpg";
import Photo from '../Photo/Photo';

const Home = () => {
  return (
    <div className='top'>
    <div className='home'>
    <h2 className='w'>.</h2>
    <h2 className='w'>.</h2>
    <h2 className='w'>.</h2>
        <div className='homecontainer'> 
        </div>
        <h1 className='ad2'> BAL JYOTI FOUN<span className='ad21'>DATION - BODHGAYA ( IND ) </span></h1>
        <div className='slider'>
            <h3 className='P'>       PRO<span className='ad21'>DUCTS</span></h3>
            <div className='img1'>
            <h2 className='R'>RUGS</h2>
                <img className='r13' src={r13} alt=''/>
                <img className='r13' src={r14} alt=''/>
                <img className='r13' src={r18} alt=''/>
                <img className='r13' src={r16} alt=''/>
                <img className='r13' src={r15} alt=''/>
                <img className='r13' src={r17} alt=''/>
            </div>
            <div className='img2'>
            <h2 className='B'>BAMBOO</h2>
               <img className='b10' src={b10} alt=''/>
                <img className='b10' src={b12} alt=''/>
                <img className='b10' src={b18} alt=''/>
                <img className='b10' src={b19} alt=''/>
                <img className='b10' src={b20} alt=''/>
                <img className='b10' src={b66} alt=''/>
            </div>
        </div>
        <h1 className='greet'>
            GREE<span className='ad21'>TINGS</span>
        </h1>
        <div>
        <div className='back'>
        <h3 className='greeting'>
        Hi there,
Bal Jyoti Foundation has started a prolific vision for serving Rural areas, helping them to improve 
their livelihood and assure their sustainment using craft and textile bases. This organization has 
been founded in February 2019 by Mr. Rupak kumar.
The foundation consists of young and energetic designers and Engineers, Who has a thought process of implementing their design sense in every aspect of the craft and textile backgrounds. The 
rural areas, consisting of BPL ( Below Poverty Line ) families are the main target for our idea implementation.
Serving, helping them and building a sense of leadership is the main satisfaction point of the foundation.
        </h3>
        </div>
        </div>
        <div className='blackg'>
        <div className='ab'>
            
            <div className='m'>
                <div>
            <h2>1.VISION</h2>

</div>
<div className='inter'>
<p>•Implementation of a core line-up for the products
made by Artisans, to be sold in a good platform.</p>
<p>•Establish a good livelihood income, which would both
serve: the Artisans and the Handicraft Sector. </p>
<p>•Building a sense of Leadership quality in the SHGs (Self
Help Group), SO that they can run their small scale business
by their own in their future</p>

            </div>
            </div>
            <div className='v'>
                <div>
            <h2>2.MISSION</h2>

</div>
<div className='inter'>
<p>•Bring back life into the extincting crafts of India.</p>
<p>•Help at least 300 families each year to rise them from their poverty
level.</p>
<p>•Sustain these families with craft bases and let them relive a basic
exposure to the modern World.</p>
<p>•Empower women where it is needed. 
</p>
</div>
</div>

      
        </div>
        <div className='p'>
        <div>
    <h2>3.OBJECTIVE</h2>
    </div>
    <div className='interr'>
   <p> •To provide customers with the type of products they want.</p>
<p>•Profit Margin for Artisans to be higher as compared to normal wages.</p>
<p>•Involve rural area in business sector, through intervention
in textile and Handicraft sector.</p>
<p>•Women empowerment to be the first priority, i:e to bring
them forward from the Taboo they face.</p>
    </div>
 
</div>
</div>

        <div className='home15'>
            <div className='greet1111'>
        <h1>
       OUR T<span className='ad21'>EAM</span>
        </h1>
        </div>
    <div className='container1'>
    <Photo/>
    </div>
    </div>
    </div>
     </div>
        
      
     
  )
}

export default Home
